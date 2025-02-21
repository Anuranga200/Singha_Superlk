const User = require('../models/user');

//get all users(admin only)
const getUsers = async (req, res) => {
    const users = await User.find({}).select('-password');
    res.json(users);
}

//upgrade user to premium(admin only)
 const upgradeUserToPremium = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        user.rple = 'premium';
        await user.save();
        res.json({ message: 'User upgraded to premium' });
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
};

//delte user(admin only)
const deleteUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        await user.deleteOne();
        res.json({ message: 'User removed' });
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
};

module.exports = { getUsers, upgradeUserToPremium, deleteUser };
