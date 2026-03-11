//create server
const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');
const foodPartnerRoutes = require('./routes/food-partner.routes');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: process.env.VITE_FRONTEND_URL || 'http://localhost:5173',
    credentials: true
}));
app.use(cookieParser()); // as a middleware to parse cookies from incoming requests
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello World");
})
app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);
app.use("/api/food-partner", foodPartnerRoutes);

module.exports = app