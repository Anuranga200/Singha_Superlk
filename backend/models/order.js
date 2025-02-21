const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        user:{type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
        products:[
            {
                product:{type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product'},
                quantity:{type: Number, required: true,default: 1},
                price:{type: Number, required: true}
            },
        ],
        totalAmount:{type: Number, required: true},
        status:{type :String,enum:["Pending", "completed","cancelled"],default:"Pending"},
    },
    {timestamps: true}
);

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
