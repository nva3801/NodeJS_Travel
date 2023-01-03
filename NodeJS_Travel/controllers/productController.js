const Product = require("../models/Product");
const multer = require("multer");
const CategoryItem = require("../models/CategoryItem");

const productController = {
    // get all product
    getAllProduct: async(req, res) => {
        try {
            const newProduct = await Product.find().populate("category_id").populate("tourCode").populate("productImage");
            res.status(200).json(newProduct);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    // add product
    addProduct: async (req, res) => {
        try {
            const newProduct = new Product({
                title: req.body.title,
                slug: req.body.slug,
                description: req.body.description,
                category_id: req.body.category_id,
                image: req.file.path,
                time: req.body.time,
                vehicle: req.body.vehicle,
                starting_point: req.body.starting_point,
                destination: req.body.destination,
                tour: req.body.tour,
                tour_policy: req.body.tour_policy,
                price: req.body.price,
            });
            const saveProduct = await newProduct.save();
            if(req.body.category_id) {
                const category = CategoryItem.findById(req.body.category_id);
                await category.updateOne({ $push: { product: saveProduct._id }});
            }
            res.status(200).json(saveProduct);
        }catch(err) {
            res.status(500).json(err);
        }
    },
    updateProduct: async (req, res)=> {
        try{
            const newProduct = await Product.findById(req.params.id);
            await newProduct.updateOne({$set: {
                title: req.body.title,
                slug: req.body.slug,
                description: req.body.description,
                category_id: req.body.category_id,
                image: req.file.path,
                time: req.body.time,
                vehicle: req.body.vehicle,
                starting_point: req.body.starting_point,
                destination: req.body.destination,
                tour: req.body.tour,
                tour_policy: req.body.tour_policy,
                price: req.body.price, 
            }});
            res.status(200).json("Updated Successfully");
        }catch(err) {
            res.status(500).json(err);
        }
    },
    deleteProduct: async (req, res) => {
        try{
            await Product.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted Successfully");
        }catch(err) {
            res.status(500).json(err);
        }
    },
    getAProduct: async (req, res) => {
        try {
            const product = await Product.find({slug: req.params.slug}).populate("tourCode").populate("productImage");
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}

module.exports = productController;