import React, { useState } from 'react'
import '../styles/auth.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FoodPartnerRegister = () => {
  const [businessName, setBusinessName] = useState('')
  const [contactName, setContactName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  // const [agreeTerms, setAgreeTerms] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/api/auth/food-partner/register', {
        name: businessName,
        contactName,
        phone,
        email,
        password,
        address
      }, {
        withCredentials: true  //to save token in cookie, when using axios
      })
      console.log(response.data)

      // Redirect to Home page after successful registration
      navigate('/create-food')

    } catch (error) {
      console.error('Error registering food partner:', error)
    }
  }

  return (
    <div className="auth-container">
      {/* Left Section */}
      <div className="auth-left-section">
        <div className="auth-left-content">
          <h2>Grow Your Restaurant</h2>
          <p>Join ReelFood and reach thousands of hungry customers. Expand your restaurant's reach and increase your sales.</p>
          
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Reach thousands of customers</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Real-time order management</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Detailed business analytics</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">24/7 partner support</div>
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
            <h1>Register Restaurant</h1>
            <p>Join thousands of restaurants on ReelFood</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="businessName" className="form-label">Business Name</label>
              <input
                id="businessName"
                type="text"
                className="form-input"
                placeholder="Your Business Name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactName" className="form-label">Contact Name</label>
              <input
                id="contactName"
                type="text"
                className="form-input"
                placeholder="Your Full Name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                id="phone"
                type="tel"
                className="form-input"
                placeholder="+1 (555) 123-4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="contact@business.com"
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

            <div className="form-group">
              <label htmlFor="address" className="form-label">Address</label>
              <input
                id="address"
                type="text"
                className="form-input"
                placeholder="123 Main St, City, State"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            {/* <div className="form-checkbox">
              <input
                id="agreeTerms"
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <label htmlFor="agreeTerms">I agree to the Partner Terms and Privacy Policy</label>
            </div> */}

            <button type="submit" className="auth-button">Register Restaurant</button>
          </form>

          <div className="auth-footer">
            <p>Already registered? <a href="/food-partner/login">Sign in</a></p>
            <p><a href="/user/register" style={{ marginTop: '8px', display: 'block' }}>Register as User</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodPartnerRegister
