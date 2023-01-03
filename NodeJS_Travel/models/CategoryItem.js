const mongoose = require("mongoose");


const categoryItemSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
        category_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CategoryList"
        },
        image: {
            type: String
        },
        product: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }]
    }, {timestamps: true}
)

module.exports = mongoose.model("CategoryItem", categoryItemSchema);
