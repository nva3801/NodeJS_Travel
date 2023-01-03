const ProductImage = require("../models/ProductImage");
const multer = require("multer");
const CategoryItem = require("../models/CategoryItem");
const Product = require("../models/Product");

const productImageController = {
    // get all product image
    getAllProductImage: async (req, res) => {
        try {
            const newProductImage = await ProductImage.find();
            res.status(200).json(newProductImage);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    // add product image
    addProductImage: async (req, res) => {
        try {
            const newProductImage = new ProductImage({
                product_id: req.body.product_id,
                image: req.file.path,
            });
            const saveProductImage = await newProductImage.save();
            if(req.body.product_id) {
                const category = Product.findById(req.body.product_id);
                await category.updateOne({ $push: { productImage: saveProductImage._id }});
            }
            res.status(200).json(saveProductImage);
        }catch(err) {
            res.status(500).json(err);
        }
    },
    updateProductImage: async (req, res)=> {
        try{
            const productImage = await ProductImage.findById(req.params.id);
            await productImage.updateOne({$set: {
                product_id: req.body.product_id,
                image: req.file.path,  
            }});
            res.status(200).json("Updated Successfully");
        }catch(err) {
            res.status(500).json(err);
        }
    },
    deleteProductImage: async (req, res) => {
        try{
            await ProductImage.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted Successfully");
        }catch(err) {
            res.status(500).json(err);
        }
    },
    getAProductImage: async (req, res) => {
        try {
            const productImage = await ProductImage.findById(req.params.id);
            res.status(200).json(productImage);
        } catch (err) {
            res.status(500).json(err);
        }
    },   
}

module.exports = productImageController;