import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserRegister from '../pages/auth/UserRegister';
import ChooseRegister from '../pages/auth/ChooseRegister';
import UserLogin from '../pages/auth/UserLogin';
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister';
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin';
import Home from '../pages/general/Home';
import Saved from '../pages/general/Saved';
import BottomNav from '../components/BottomNav';
import CreateFood from '../pages/food-partner/CreateFood';
import Profile from '../pages/food-partner/Profile';


function isAuthenticated() {
    const match = document.cookie.match(/(^|;)\s*token=([^;]+)/);
    return !!(match && match[2]);
}


const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
        return <Navigate to="/register" replace />;
    }
    return children;
};

const AppRoutes = () => {
        return (
                <Router>
                        <Routes>
                                <Route path="/register" element={<ChooseRegister />} />
                                <Route path="/user/register" element={<UserRegister />} />
                                <Route path="/user/login" element={<UserLogin />} />
                                <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
                                <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
                                {/* Protected Home route */}
                                <Route path="/" element={
                                    <ProtectedRoute>
                                        <><Home /><BottomNav /></>
                                    </ProtectedRoute>
                                } />
                                <Route path="/saved" element={
                                    <ProtectedRoute>
                                        <><Saved /><BottomNav /></>
                                    </ProtectedRoute>
                                } />
                                <Route path="/create-food" element={<CreateFood />} />
                                <Route path="/food-partner/:id" element={<Profile />} />
                        </Routes>
                </Router>
        )
}

export default AppRoutes