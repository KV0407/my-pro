// src/components/SignIn.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const SignIn = () => {
  const [userType, setUserType] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const demoCredentials = {
    student: 'alex.kumar@college.edu',
    teacher: 'sarah.johnson@college.edu'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo mode - auto-fill credentials
    if (!email && !password) {
      setEmail(demoCredentials[userType]);
      setPassword('demo123');
      alert('Demo mode: Using pre-filled credentials. In real app, this would authenticate.');
    } else {
      // Handle actual sign in
      console.log('Sign in attempt:', { userType, email, password, rememberMe });
      alert(`Signing in as ${userType}: ${email}`);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Sign in to continue</p>
        </div>

        <div className="user-type-selector">
          <button
            className={`user-type-btn ${userType === 'student' ? 'active' : ''}`}
            onClick={() => setUserType('student')}
          >
            Student
          </button>
          <button
            className={`user-type-btn ${userType === 'teacher' ? 'active' : ''}`}
            onClick={() => setUserType('teacher')}
          >
            Teacher
          </button>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@college.edu"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="submit-btn">
            Sign In
          </button>

          <div className="demo-notice">
            <p>Demo Mode - Click Sign In to continue</p>
            <p className="demo-credentials">
              Student: alex.kumar@college.edu | Teacher: sarah.johnson@college.edu
            </p>
          </div>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className="auth-link">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;