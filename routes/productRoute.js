const express = require('express');
const Product = require('../models/productModel')
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/productController')

//fetch all products
router.get('/products', getProducts);

//fetch products using the ID
router.get('/products/:id',getProduct)

// safe a new product
router.post('/product',createProduct)

//update a product
router.put('/products/:id', updateProduct)

//delete a product

router.delete('/products/:id', deleteProduct)
 
 module.exports = router;