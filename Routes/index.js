const router = require('express').Router();
const products = require('./productRouter');

router.use('/products', products);

module.exports = router;