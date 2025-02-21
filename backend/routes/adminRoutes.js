const express = require('express');
const{getUsers,upgradeUserToPremium,deleteuser}= require('./controllers/adminControllers.js');
const {protect,admin}= require("./middleware/authMiddleware");
const router = express.Router();

router.get("/users",protect,admin,getUsers);
router.put("/users/:id/upgrade", protect, admin, upgradeUserToPremium);
router.delete("/users/:id", protect, admin, deleteuser);

module.exports = router;
