const mongoose = require("mongoose");

const TourCode = new mongoose.Schema(
    {
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },
        tour_code: {
            type: String,
            required: true
        },
        start: {
            type: String,
            required: true
        },
        price_adult: {
            type: Number,
            required: true
        },
        price_children: {
            type: Number,
            required: true
        },
        price_baby: {
            type: Number,
            required: true
        }
    }, {timestamps: true}
)

module.exports = mongoose.model("TourCode", TourCode);
