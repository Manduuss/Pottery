const mongoose = require('mongoose')

const customerSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, "Please enter your name"]
        },
        lastname: {
            type: String,
            required: [true, "Please enter your email"]
        },
        email: {
            type: String,
            required: [true, "Please enter your passwort"]
        }
    },
{
    timestamps: true
}       
)


const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;