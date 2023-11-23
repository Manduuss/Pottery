const express = require('express');
const Customer = require('../models/customerModel');
const router = express.Router();
const {getCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer} = require('../controllers/customersController')

//fetch all customers
router.get('/customer', getCustomers)

//fetch customers using the ID
router.get('/customer/:id', getCustomer)

// safe a new customer
router.post('/customer',createCustomer)

//update a customer
router.put('/customer/:id', updateCustomer)

//delete a customer
router.delete('/customer/:id', deleteCustomer)

 module.exports = router;