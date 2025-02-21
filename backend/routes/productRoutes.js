const express = require('express');

const{
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
    //getPremiumDsicountProducts,
}=require('../controllers/productControllers');

const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.get("/", getProducts);
router.get("/id:", getProductById);
//router.get("/premium/discount",protect, getPremiumDsicountProducts);

router.post("/", protect, admin, createProduct);
router.put("/:id", protect, admin, updateProduct);
router.delete("/:id", protect, admin, deleteProduct);

module.exports = router;