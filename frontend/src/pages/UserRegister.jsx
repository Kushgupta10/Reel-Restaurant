import React, { useState } from 'react'
import '../styles/auth.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserRegister = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [agreeTerms, setAgreeTerms] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/api/auth/user/register', {
        fullName: firstName + ' ' + lastName,
        email,
        password,
        // agreeTerms
      }, {
        withCredentials: true  //to save token in cookie, when using axios
      })
      console.log(response.data)

      // Redirect to Home page after successful registration
      navigate('/')

    } catch (error) {
      console.error('Error registering user:', error)
    }
  }
  return (
    <div className="auth-container">
      {/* Left Section */}
      <div className="auth-left-section">
        <div className="auth-left-content">
          <h2>Join Us Today!</h2>
          <p>Create an account to start ordering from your favorite restaurants and enjoy exclusive benefits.</p>
          
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Easy registration in seconds</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Secure and private account</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Access exclusive discounts</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Order history and favorites</div>
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
            <p>Sign up to get started</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  className="form-input"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  className="form-input"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                id="password"
                type="password"
                className="form-input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* <div className="form-checkbox">
              <input
                id="agreeTerms"
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <label htmlFor="agreeTerms">I agree to the Terms of Service and Privacy Policy</label>
            </div> */}

            <button type="submit" className="auth-button">Create Account</button>
          </form>

          <div className="auth-footer">
            <p>Already have an account? <a href="/user/login">Sign in</a></p>
            <p><a href="/food-partner/register" style={{ marginTop: '8px', display: 'block' }}>Register as Food Partner</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserRegister
