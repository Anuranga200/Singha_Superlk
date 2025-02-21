const Order = require('../models/order');
const Product = require('../models/Products');

//place an order
const placeOrder = async (req,res)=>{
const {products}= req.body.products;
    try{
        if(!Qproducts || products.length === 0){
            res.status(400).json({message: 'No order items'});
    }}
    catch(error){
        res.status(400).json({message: 'Order failed'});
    }
    let totalAmount=0;
    const orderItems=[];
    for(let item of products){
        const product= Product.findById(item.product);
        if(!product){
            res.status(404).json({message: 'Product not found'});
        }
        const price=product.isPremiumDiscount && req.user.role === 'premium' ? product.discountPrice : product.price;
        const quantity= item.quantity;
    orderItems.push({
        product: product._id,
        quantity:item.quantity,
        price:price,
    });
    }
    const order = await Order.create({
        user:req.user._id,
        products:orderItems,
        totalAmount,
    });
    res.status(201).json({message: 'Order placed successfully', order});
}
    //get orders for logged-in user
    const getUserOrders = async (req, res) => {
        const orders = await Order.find({ user: req.user._id }).populate("products.product","name price");
        res.jason(orders);
    };
    module.exports = {placeOrder,getUserOrders};
