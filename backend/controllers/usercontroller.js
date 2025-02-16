const user = require('../models/user');
const generateToken = require('../utils/generateToken');

//register new user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
  
        const userExists = await user.findOne({ email });
        if (userExists)return res.status(400).json({ message: 'User already exists' });
        
        const user =await user.create({name,email,password,role});
        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id),
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
      
}

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await user.findOne({ email });
    if (user && (await user.comparePassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
        });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
}

//get user profile
const getUserProfile = async (req, res) => {
    const user = await user.findById(req.user._id);
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}
module.exports = {registerUser,loginUser,getUserProfile}