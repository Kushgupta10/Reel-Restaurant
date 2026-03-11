# Reel Restaurant

## What is Reel Restaurant?
Reel Restaurant is a mobile-first web application built to connect food lovers and food partners through short video reels. Users can discover, like, and save food videos, while food partners can showcase their meals and reach new customers.

## Why was it built?
- To provide a modern, engaging platform for food discovery using video reels.
- To help food partners promote their offerings and grow their business.
- To make food exploration fun and interactive for mobile users.

A mobile-first React + Node.js app for sharing and discovering food reels.

## 📱 Best Experience: Mobile View
- This app is designed for mobile users.
- For best results, use your browser's mobile device emulator or access from a phone.
- On desktop, resize your window or use DevTools (F12 > Toggle Device Toolbar).

## 🔒 Authentication
- Authentication is cookie-based (no localStorage).
- Protected routes: Home, Saved, and other main pages require login.
- When you first open the app, you are redirected to sign-up/sign-in.
- After successful login or registration, you are redirected to the Home page.
- Backend sets a `token` cookie for authentication.
- If the cookie is missing, you cannot access protected content.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/reel-restaurant.git
   cd reel-restaurant
   ```
2. Install dependencies for both frontend and backend:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in `backend/` with your MongoDB URI, JWT secret, and ImageKit keys.

### Running Locally
- Start backend:
  ```bash
  cd backend
  npm start
  # or: npx nodemon server.js
  ```
- Start frontend:
  ```bash
  cd frontend
  npm run dev
  ```
- Open [http://localhost:5173](http://localhost:5173) in your browser (preferably mobile view).

## 🛠 Deployment
- Deploy backend and frontend separately (e.g., Vercel, Netlify, Heroku).
- Ensure your frontend points to the correct backend API URL.
- Use HTTPS and secure cookies for production.

## ✨ Features
- Mobile-first UI for food reels
- Cookie-based authentication
- Protected routes
- Food partner and user flows
- Video upload and feed

