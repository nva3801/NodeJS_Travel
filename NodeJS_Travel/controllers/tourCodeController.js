const TourCode = require("../models/TourCode");
const CategoryItem = require("../models/CategoryItem");
const Product = require("../models/Product");

const tourCodeController = {
    // get all product image
    getAllTourCode: async (req, res) => {
        try {
            const newTourCode = await TourCode.find();
            res.status(200).json(newTourCode);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    // add product image
    addTourCode: async (req, res) => {
        try {
            const savenewTourCode = new TourCode({
                product_id: req.body.product_id,
                tour_code: req.body.tour_code,
                start: req.body.start,
                price_adult: req.body.price_adult,
                price_children: req.body.price_children,
                price_baby: req.body.price_baby,
            });
            const saveTourCode = await savenewTourCode.save();
            if(req.body.product_id) {
                const product = Product.findById(req.body.product_id);
                await product.updateOne({ $push: { tourCode: saveTourCode._id }});
            }
            res.status(200).json(saveTourCode);
        }catch(err) {
            res.status(500).json(err);
        }
    },
    updateTourCode: async (req, res)=> {
        try{
            const tourCode = await TourCode.findById(req.params.id);
            await tourCode.updateOne({$set: req.body});
            res.status(200).json("Updated Successfully");
        }catch(err) {
            res.status(500).json(err);
        }
    },
    deleteTourCode: async (req, res) => {
        try{
            await TourCode.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted Successfully");
        }catch(err) {
            res.status(500).json(err);
        }
    },
    getATourCode: async (req, res) => {
        try {
            const tourCode = await TourCode.findById(req.params.id);
            res.status(200).json(tourCode);
        } catch (err) {
            res.status(500).json(err);
        }
    },   
}

module.exports = tourCodeController;