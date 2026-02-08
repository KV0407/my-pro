import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1 className="logo">EventSphere</h1>
        <p className="tagline">Smart College Events Portal</p>
      </header>
      
      <main className="landing-content">
        <div className="features">
          <div className="feature-card">
            <h3>Discover Events</h3>
            <p>Find and register for workshops, fests, and sports events</p>
          </div>
          
          <div className="feature-card">
            <h3>Manage Tickets</h3>
            <p>Get QR code tickets for easy check-in</p>
          </div>
          
          <div className="feature-card">
            <h3>Stay Updated</h3>
            <p>Get notifications about upcoming events</p>
          </div>
        </div>
        
        <div className="cta-section">
          <h2>Join thousands of students managing events</h2>
          <Link to="/signup" className="cta-button">
            Get Started
          </Link>
          <p className="login-link">
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;