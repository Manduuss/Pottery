const mongoose = require('mongoose')

const customerSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, "Please enter your firstname"]
        },
        lastname: {
            type: String,
            required: [true, "Please enter your lastname"]
        },
        email: {
            type: String,
            required: [true, "Please enter your email adress"]
        }
    },
{
    timestamps: true
}       
)


const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;