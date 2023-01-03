const CategoryList = require("../models/CategoryList");
const Category = require("../models/Category");

const categoryListController = {
    // get all categories
    getAllCategoryList: async(req, res) => {
        try {
            const categoryList = await CategoryList.find().populate("categoryItem");
            res.status(200).json(categoryList);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    // add category
    addCategoryList: async (req, res) => {
        try {
            const newCategoryList = new CategoryList(req.body);
            const saveCategoryList = await newCategoryList.save();
            if(req.body.category_id) {
                const category = Category.findById(req.body.category_id);
                await category.updateOne({ $push: { categoryList: saveCategoryList._id }});
            }
            res.status(200).json(saveCategoryList);
        }catch(err) {
            res.status(500).json(err);
        }
    },
    updateCategoryList: async (req, res)=> {
        try{
            const categoryList = await CategoryList.findById(req.params.id);
            await categoryList.updateOne({$set: req.body});
            res.status(200).json("Updated Successfully");
        }catch(err) {
            res.status(500).json(err);
        }
    },
    deleteCategoryList: async (req, res) => {
        try{
            await Category.updateMany({categoryList: req.params.id}, {$pull: {categoryList: req.params.id}});
            await CategoryList.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted Successfully");
        }catch(err) {
            res.status(500).json(err);
        }
    },
    getACategory: async (req, res) => {
        try {
            const category = await CategoryList.findById(req.params.id);
            res.status(200).json(category);
        } catch (err) {
            res.status(500).json(err);
        }
    },    
}

module.exports = categoryListController;