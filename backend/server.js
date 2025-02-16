const app=require('./app');
const routers = require('./routes/userRoutes');
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

//app.use("/api/users", routers);
app.get('/',(req,res)=>{
    res.send('API is running....');
});

