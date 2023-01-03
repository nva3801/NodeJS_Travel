const mongoose = require("mongoose");


const categoryListSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        },
        category_id: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        },
        categoryItem: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CategoryItem'
        }]
    }, {timestamps: true}
)

module.exports = mongoose.model("CategoryList", categoryListSchema);
