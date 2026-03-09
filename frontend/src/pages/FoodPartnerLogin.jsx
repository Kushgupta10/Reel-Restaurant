import React, { useState } from 'react'
import '../styles/auth.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FoodPartnerLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

    const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/api/auth/food-partner/login', {
        email,
        password
      }, {
        withCredentials: true  //to save token in cookie, when using axios
      })
      console.log(response.data)

      // Redirect to create food page after successful login
      navigate('/create-food')

    } catch (error) {
      console.error('Error logging in food partner:', error)
    }
  }

  return (
    <div className="auth-container">
      {/* Left Section */}
      <div className="auth-left-section">
        <div className="auth-left-content">
          <h2>Partner Dashboard</h2>
          <p>Sign in to your restaurant partner account to manage your menu, orders, and grow your business.</p>
          
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Manage your menu and pricing</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">View and fulfill orders</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Analytics and insights</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Payment management</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="auth-right-section">
        <div className="auth-content">
          <div className="auth-brand">
            <div className="auth-brand-title">ReelFood Partner</div>
            <div className="auth-brand-subtitle">Grow Your Restaurant Business</div>
          </div>

          <div className="auth-header">
            <h1>Sign In</h1>
            <p>Sign in to your partner account</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="partner@restaurant.com"
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
            <p>New to ReelFood? <a href="/food-partner/register">Register now</a></p>
            <p><a href="/user/login" style={{ marginTop: '8px', display: 'block' }}>Sign in as User</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodPartnerLogin
