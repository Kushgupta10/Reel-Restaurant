import React from 'react'
import '../styles/auth.css'

const RegisterChoice = () => {
  return (
    <div className="auth-container">
      {/* Left Section */}
      <div className="auth-left-section">
        <div className="auth-left-content">
          <h2>Join ReelFood</h2>
          <p>Choose how you want to get started. Whether you're a food lover or a restaurant owner, we have the right option for you.</p>
          
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Quick and easy registration</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Secure account setup</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Start using our platform immediately</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Expert support available 24/7</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="auth-right-section">
        <div className="auth-content">
          <div className="auth-brand">
            <div className="auth-brand-title">ReelFood</div>
            <div className="auth-brand-subtitle">Your Favorite Food Delivered</div>
          </div>

          <div className="auth-header">
            <h1>Create Account</h1>
            <p>Choose your registration type</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href="/user/register" className="auth-button" style={{ textDecoration: 'none', textAlign: 'center' }}>
              Register as Normal User
            </a>
            
            <a href="/food-partner/register" className="auth-button auth-button-secondary" style={{ textDecoration: 'none', textAlign: 'center' }}>
              Register as Food Partner
            </a>
          </div>

          <div className="auth-footer">
            <p>Already have an account? <a href="/user/login">Sign in</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterChoice
