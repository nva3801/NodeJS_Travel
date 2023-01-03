const Category = require("../models/Category");
const CategoryList = require("../models/CategoryList");

const categoryController = {
  // get all categories
  getAllCategories: async (req, res) => {
    try {
      const category = await Category.find().select("_id title slug categoryList").populate("categoryList");
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // add category
  addCategory: async (req, res) => {
    try {
      const newCategory = new Category(req.body);
      const savedCategory = await newCategory.save();
      res.status(200).json(savedCategory);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateCategory: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      await category.updateOne({ $set: req.body });
      res.status(200).json("Updated Successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteCategory: async (req, res) => {
    try {
      // await CategoryList.updateMany({category_id: req.params.id}, {$set: {category_id: req.params.id}});
      await Category.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted Successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getACategory: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = categoryController;
