const Customer = require('../models/customerModel')
const asyncHandler = require('express-async-handler')

//get all customer
const getCustomers = asyncHandler(async(req, res) => {
    try {
       const customer = await Customer.find({});
       res.status(200).json(customer)
    } catch (error) {
        res.status(500);
        throw new Error(error.message);    }
})

//get a single customer
const getCustomer = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const customer = await Customer.findById(id);
        res.status(200).json(customer)
    } catch (error) {
        res.status(500);
        throw new Error(error.message);   
     }
})

//create a customer
const createCustomer =  asyncHandler(async(req, res) => {
    try {
        const customer = await Customer.create(req.body)
        res.status(200).json(customer);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);    }
})

//update customer
const updateCustomer = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const customer = await Customer.findByIdAndUpdate(id, req.body);
        //we cannot find a customer to update
        if(!customer) {
            res.status(404);
            throw new Error('cannot find any product with ID ${id}');
                }
        const updateCustomer = await Customer.findById(id);
        res.status(200).json(updateCustomer);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);  
      }
})

//delete a customer
const deleteCustomer = asyncHandler(async(req, res) => {
    try {
     const {id} = req.params;
     const customer = await Customer.findByIdAndDelete(id);
     if(!customer){
        res.status(404);
        throw new Error('cannot find any customer with ID ${id}');
     }
     res.status(200).json(customer);
 
    } catch (error) {
        res.status(500);
        throw new Error(error.message);    } 
 })

module.exports = {
    getCustomers,
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer
}
