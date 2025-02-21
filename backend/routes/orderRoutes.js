const express = require('express');
const {placeOrder,getUserOrders}= require('../controllers/orderControllers.js');
const {protect}= require('../middleware/authMiddleware.js');

const router = express.Router();

router.post("/", protect, placeOrder);
router.get("/myorders", protect, getUserOrders);
module.exports = router;
