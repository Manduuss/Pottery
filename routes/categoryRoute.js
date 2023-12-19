const express = require('express');
const Category = require('../models/categoryModel')
const router = express.Router();
const {getCategories, getCategory, createCaterogy, updateCategory, deleteCategory} = require('../controllers/categoriesController')

//fetch all categories
router.get('/', getCategories)

//fetch categories using the ID
router.get('/category/:id', getCategory)

// safe a new category
router.post('/test', createCaterogy)

//update a category
router.put('/category/:id', updateCategory)

//delete a category
router.delete('/category/:id', deleteCategory)
 
 module.exports = router;