// start server
require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');

connectDB();

const PORT = process.env.PORT || 3000;
const BACKEND_URL = process.env.VITE_BACKEND_URL || `http://localhost:${PORT}`;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Backend URL: ${BACKEND_URL}`);
});