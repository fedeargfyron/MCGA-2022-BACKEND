const res = require('express/lib/response');
const Product = require('../Schemas/productSchema');

const getProducts = async () => {
    return await Product.find();
}

const getById = async (id) => {
    return await Product.findById(id);
}

const postProduct = async (body) => {
    await new Product(body).save();
}

const deleteProduct = async (id) => {
    await Product.findByIdAndDelete(id);
}

module.exports = {
    getProducts,
    getById,
    postProduct,
    deleteProduct
}