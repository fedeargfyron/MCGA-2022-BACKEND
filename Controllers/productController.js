const res = require('express/lib/response');
const Product = require('../Schemas/productSchema');

const getProducts = async () => await Product.find();

const getById = async (id) => await Product.findById(id);

const postProduct = async (body) => new Product(body).save();

const deleteProduct = async (id) => await Product.findByIdAndDelete(id);

module.exports = {
    getProducts,
    getById,
    postProduct,
    deleteProduct
}