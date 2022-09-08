import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number
});

const Product = mongoose.model('Product', productSchema);