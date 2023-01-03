const mongoose = require("mongoose");


const Checkout = new mongoose.Schema(
    {
        number_adult: Number,
        number_children: Number,
        number_baby: Number,
        payment_methods: Number,
        name: String,
        phoneNumber: String,
        email: String,
        total: Number,
        tour_code: String,
        status: {
            type: Number,
            required: true,
            default: 1
        },
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    }, {timestamps: true}
)

module.exports = mongoose.model("Checkout", Checkout);
