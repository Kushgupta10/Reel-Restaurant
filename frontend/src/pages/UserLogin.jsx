import React, { useState } from 'react'
import '../styles/auth.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/api/auth/user/login', {
        email,
        password
      }, {
        withCredentials: true  //to save token in cookie, when using axios
      })
      console.log(response.data)
      // Redirect to Home page after successful login
      navigate('/')
    } catch (error) {
      console.error('Error logging in user:', error)
    }
  }
  return (
    <div className="auth-container">
      {/* Left Section */}
      <div className="auth-left-section">
        <div className="auth-left-content">
          <h2>Welcome Back!</h2>
          <p>Sign in to your account to explore delicious restaurants and order your favorite meals.</p>
          
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Browse thousands of restaurants</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Quick and easy ordering</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Track your orders in real-time</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Exclusive deals and rewards</div>
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
            <h1>Sign In</h1>
            <p>Sign in to your account to continue</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
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

            <div className="form-checkbox">
              <input
                id="rememberMe"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>

            <button type="submit" className="auth-button">Sign In</button>
          </form>

          <div className="auth-footer">
            <p>Don't have an account? <a href="/user/register">Sign up</a></p>
            <p><a href="/food-partner/login" style={{ marginTop: '8px', display: 'block' }}>Sign in as Food Partner</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
