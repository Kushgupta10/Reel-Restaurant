// write logic to connect server with db
// KYi6TbMFWZZ87YoD
const mongoose = require("mongoose");


function connectDB() {
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB:", err);
    })

}

module.exports = connectDB;