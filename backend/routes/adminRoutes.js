const express = require('express');
const{getUsers,upgradeUserToPremium,deleteUser}= require('../controllers/adminControllers.js');
const {protect,admin}= require("../middleware/authMiddleware.js");
const router = express.Router();

router.get("/users",protect,admin,getUsers);
router.put("/users/:id/upgrade", protect, admin, upgradeUserToPremium);
router.delete("/users/:id", protect, admin, deleteUser);

module.exports = router;
