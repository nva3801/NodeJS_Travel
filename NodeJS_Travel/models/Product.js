const mongoose = require("mongoose");


const Product = new mongoose.Schema(
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
        category_id: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "CategoryItem"
        }],
        image: {
            type: String
        },
        time: {
            type: String
        },
        vehicle: {
            type: String
        },
        starting_point: {
            type: String,
        },
        destination: {
            type: String,
        },
        tour: {
            type: String
        },
        tour_policy: {
            type: String
        },
        price: {
            type: Number
        },
        tourCode: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "TourCode"
            }
        ],
        productImage: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ProductImage"
            }
        ]
    }, {timestamps: true}
)

module.exports = mongoose.model("Product", Product);
