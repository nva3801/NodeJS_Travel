const CategoryItem = require("../models/CategoryItem");
const multer = require("multer");
const CategoryList = require("../models/CategoryList");

const categoryItemController = {
    // get all categories
    getAllCategoryItem: async(req, res) => {
        try {
            const categoryItem = await CategoryItem.find();
            res.status(200).json(categoryItem);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    // add category
    addCategoryItem: async (req, res) => {
        try {
            const newCategoryItem = new CategoryItem({
                title: req.body.title,
                slug: req.body.slug,
                description: req.body.description,
                category_id: req.body.category_id,
                image: req.file.path             
            });
            const saveCategoryItem = await newCategoryItem.save();
            if(req.body.category_id) {
                const categoryList = CategoryList.findById(req.body.category_id);
                await categoryList.updateOne({ $push: { product: saveCategoryItem._id }});
            }
            res.status(200).json(saveCategoryItem);
        }catch(err) {
            res.status(500).json(err);
        }
    },
    updateCategoryItem: async (req, res)=> {
        try{
            const categoryItem = await CategoryItem.findById(req.params.id);
            await categoryItem.updateOne({$set: {
                title: req.body.title,
                slug: req.body.slug,
                description: req.body.description,
                category_id: req.body.category_id,
                image: req.file.path      
            }});
            res.status(200).json("Updated Successfully");
        }catch(err) {
            res.status(500).json(err);
        }
    },
    deleteCategoryItem: async (req, res) => {
        try{
            await CategoryItem.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted Successfully");
        }catch(err) {
            res.status(500).json(err);
        }
    },
    getACategoryItem: async (req, res) => {
        try {
            const category = await CategoryItem.findOne( {slug: req.params.slug });
            res.status(200).json(category);
        } catch (err) {
            res.status(500).json(err);
        }
    },    
}

module.exports = categoryItemController;