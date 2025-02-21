const User = require('../models/user');
const generateToken = require('../utils/generateToken');

//register new user
const registerUser = async (req, res) => {
    const { name, email, password,role } = req.body;//req.body is coming from the bodyparser middleware
    const userExists = await User.findOne({ email });
    if (userExists)return res.status(400).json({ message: 'User already exists' });
        
        const user =await User.create({name,email,password,role});
        if (user) {
            res.status(200).json({
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
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
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
    const user = await User.findById(req.user._id);//req.user is coming from the protect middleware
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