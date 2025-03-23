const mongoose = require('mongoose')


const ProductSchehma = mongoose.Schema(
    {
        name: {
            type: String,   
            required:true
        },
        quantity: {
            type: Number,
            required: true,
            default: 0,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        image: {
            type: String,
            required: true,
        },
    }
);
const Product = mongoose.model("Product",ProductSchehma);

module.exports = Product;