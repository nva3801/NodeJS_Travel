const Product = require("../models/Product");
const CategoryItem = require("../models/CategoryItem");
const getListController = {
    getListCategory: async (req, res) => {
        try {
            const categoryItem = await CategoryItem.find({slug: req.params.slug}).populate("product");
            res.status(200).json(categoryItem);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    getProductById: async (req, res) => {
        try {
            const productItem = await Product.findOne({_id: req.params.id})
            res.status(200).json(productItem)
        } catch(err) {
            res.status(500).json(err)
        }
    }
}
module.exports = getListController;