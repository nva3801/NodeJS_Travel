const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        },
        categoryList: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CategoryList'
        }]
    }, {timestamps: true}
);

module.exports = mongoose.model("Category", categorySchema);