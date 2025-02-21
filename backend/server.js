const express = require('express'); 
const app=require('./app');
const userRoutes = require('./routes/userRoutes');
const userProducts = require('./routes/productRoutes')
const adminRoutes = require('./routes/adminRoutes');
const orderRoutes = require('./routes/orderRoutes');
app.use(express.json());
const connectDB = require('./config/db');
const host ='localhost';
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');

const PORT = process.env.PORT ;
const URL = process.env.MONGODB_URL ;

// Connect to MongoDB
connectDB();

const server = app.listen(PORT,host,()=>{
    console.log(`Server is running on ${server.address().port}`);
});

app.use("/api/users", userRoutes);// This will use the userRoutes for any routes that start with /api/users.
app.use ("/api/products", productRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/orders", orderRoutes);


app.get('/',(req,res)=>{
    res.send('API is running....');
});

