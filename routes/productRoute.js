const express = require('express');
const Product = require('../models/productModel')
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/productController')
const authMiddleware = require('../middleware/authMiddleware');

//fetch all products
router.get('/products', getProducts);

//fetch products using the ID
router.get('/products/:id',getProduct)

// safe a new product
router.post('/product',createProduct, authMiddleware)

//update a product
router.put('/products/:id', updateProduct, authMiddleware)

//delete a product
router.delete('/products/:id', deleteProduct, authMiddleware)
 
 module.exports = router;