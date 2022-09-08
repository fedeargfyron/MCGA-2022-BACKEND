const {
    getProducts,
    getById,
    postProduct,
    deleteProduct
} = require ('../Controllers/productController')

const express = require('express')
const router = express.Router();

router.get('/', async (req, res) => {
    let products = await getProducts();
    res.status(200).json(products);
})
 
router.get('/byId/:id', async (req, res) => {
    let product = await getById(req.params.id);

    if(!product)
        return res.status(404).json(product);
 
    res.status(200).json(product);
})
 
router.post('/', async (req, res) => {
    await postProduct(req.body);
    res.status(200).json();
})
 
router.delete('/:id', async (req, res) => {
    await deleteProduct(req.params.id)
    res.status(200).json();
})


module.exports = router;