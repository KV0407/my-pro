// src/components/SignUp.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const SignUp = () => {
  const [userType, setUserType] = useState('student');

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Create Account</h2>
          <p>Join EventSphere today</p>
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

        <div className="signup-info">
          <p>Please select your account type to continue</p>
        </div>

        <div className="continue-section">
          <Link 
            to={userType === 'student' ? "/signup/student" : "/signup/teacher"} 
            className="submit-btn"
          >
            Continue as {userType === 'student' ? 'Student' : 'Teacher'}
          </Link>
        </div>

        <div className="auth-footer">
          <p>
            Already have an account?{' '}
            <Link to="/signin" className="auth-link">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;