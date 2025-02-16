const app=require('./app');
const router = require('./routes/userRoutes');
const connectDB = require('./config/db');
const host ='localhost';
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');

const PORT = process.env.PORT || 3000;
const URL = process.env.MONGODB_URL ||'mongodb+srv://anuranga200:Atlas119life0@cluster0.qbkg9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
connectDB();

const server = app.listen(PORT,host,()=>{
    console.log(`Server is running on ${server.address().port}`);
});
