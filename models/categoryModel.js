const mongoose = require('mongoose')

const categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a catogory name"]
        }
    },
{
    timestamps: true
}       
)

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;