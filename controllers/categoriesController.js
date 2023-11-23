const Category = require('../models/categoryModel')
const asyncHandler = require('express-async-handler')


//fetch all categorys

const getCategories = asyncHandler(async(req, res) => {
    try {
       const category = await Category.find({});
       res.status(200).json(category)
    } catch (error) {
        res.status(500);
        throw new Error(error.message);  
      }
})

//fetch categories using the ID

const getCategory = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const category = await Category.findById(id);
        res.status(200).json(category)
    } catch (error) {
        res.status(500);
        throw new Error(error.message);   
     }
})

// safe a new category

const createCaterogy = (async(req, res) => {
    try {
        const category = await Category.create(req.body)
        res.status(200).json(category);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

//update a catogory
const updateCategory = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const category = await Category.findByIdAndUpdate(id, req.body);
        //we cannot find a category to update
        if(!category) {
        res.status(404);
        throw new Error('cannot find any category with ID ${id}');
        }
        const updateCategory = await Category.findById(id);
        res.status(200).json(updateCategory);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);   
     }
})

//delete a catogory

const deleteCategory = asyncHandler(async(req, res) => {
    try {
     const {id} = req.params;
     const category = await Category.findByIdAndDelete(id);
     if(!category){
        res.status(404);
        throw new Error('cannot find any category with ID ${id}'); 
        }
     res.status(200).json(category);
 
    } catch (error) {
        res.status(500);
        throw new Error(error.message);     } 
 })

 module.exports = {getCategories, 
    getCategory, 
    createCaterogy, 
    updateCategory, 
    deleteCategory}