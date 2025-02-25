const Product = require('../models/Products');

//get all products
const getProducts = async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}

//get product by id
const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

//create a new product(ADMIN ONLY)
const createProduct = async (req, res) => {
    const { name, description, price, category, image, stock, isPremiumDiscount, discountPrice } = req.body;

    const product = new Product({
        name,
        description,
        price,
        category,
        image,
        stock,
        isPremiumDiscount,
        discountPrice
    });

    const createdPreduct = await product.save();
    res.status(201).json(createdPreduct);
};

//update a product(ADMIN ONLY)
const updateProduct = async (req, res) => {
    const { name, description, price, category, image, stock, isPremiumDiscount, discountPrice } = req.body;
    const product = await Product.findById(req.params.id);
    if (product) {
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.category = category || product.category;
        product.image = image || product.image;
        product.stock = stock || product.stock;
        product.isPremiumDiscount = isPremiumDiscount || product.isPremiumDiscount;
        product.discountPrice = discountPrice || product.discountPrice;
        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

//delete a product(ADMIN ONLY)
const deleteProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        await product.deleteOne();
        res.json({ message: 'Product removed' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

//get premium discount products
const getPremiumDiscountProducts = async (req, res) => {
    if (req.user && req.user.role === 'admin') {
        return res.status(403).json({ message: 'premium access requred' });
    }
    const products = await Product.find({ isPremiumDiscount: true });
    res.json(products);
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct, getPremiumDiscountProducts };

