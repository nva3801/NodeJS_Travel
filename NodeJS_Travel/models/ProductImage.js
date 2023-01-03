const mongoose = require("mongoose");

const productImageSchema = new mongoose.Schema(
    {
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        image: {
            type: String
        },
    }, {timestamps: true}
)

module.exports = mongoose.model("ProductImage", productImageSchema);
