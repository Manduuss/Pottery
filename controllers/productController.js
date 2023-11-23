const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')


//get all products
const getProducts = asyncHandler(async(req, res) => {
    try {
       const products = await Product.find({});
       res.status(200).json(products)
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        }
})


//get a single product
const getProduct =  asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

//create a Product
const createProduct = asyncHandler(async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

//updateProduct
const updateProduct = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        //we cannot find a product to update
        if(!product) {
            res.status(404);
            throw new Error('cannot find any product with ID ${id}');
        }
        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);    
    }
})


//delete a product
const deleteProduct =  asyncHandler(async(req, res) => {
    try {
     const {id} = req.params;
     const product = await Product.findByIdAndDelete(id);
     if(!product){
        res.status(404);
        throw new Error('cannot find any product with ID ${id}');
     }
     res.status(200).json(product);
 
    } catch (error) {
        res.status(500);
        throw new Error(error.message);   
     } 
 })

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}