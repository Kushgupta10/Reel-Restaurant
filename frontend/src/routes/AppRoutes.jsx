import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
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




const ProtectedRoute = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {

        axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/auth/me`,
            { withCredentials: true }
        )
        .then(() => {
            setIsAuth(true);
            setLoading(false);
        })
        .catch(() => {
            setIsAuth(false);
            setLoading(false);
        });

    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isAuth) {
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
