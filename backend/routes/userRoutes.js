const express = require('express');
const {registerUser,loginUser,getUserProfile} = require('../controllers/usercontroller.js');
const {protect} = require('../middleware/authMiddleware');
const router = express.Router();
router.route('/').post(registerUser);
router.route('/login').post(loginUser);
router.route('/profile').get(protect,getUserProfile);
module.exports = router;
