const TourCode = require("../models/TourCode");
const Checkout = require("../models/Checkout");
const Product = require("../models/Product");
const CheckoutController = {
    Checkout: async (req, res) => {
        try {
            const getTourCode = await TourCode.find({tour_code: req.params.tour_code}).populate("product_id");
            res.status(200).json(getTourCode);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    AddCheckout: async (req, res) => {
        try {
            const newCheckout = new Checkout(req.body);
            const saveProduct = await newCheckout.save();
            return res.status(200).json(saveProduct);
        } catch(err) {
            return res.status(500).json(err)
        }
    },
    getCheckout: async (req, res) => {
        try {
            const getCheckout = await Checkout.find({email: req.params.email}).populate("product_id")
            res.status(200).json(getCheckout)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    getDetailCheckout: async (req, res) => {
        try {
            const getDetailCheckout = await Checkout.findOne({_id: req.params.id}).populate("product_id")
            res.status(200).json(getDetailCheckout)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    updateCheckout: async (req, res) => {
        try {
            const newCheckout = await Checkout.findById(req.params.id)
            await newCheckout.updateOne({ $set: req.body });
            res.status(200).json("Updated Successfully");
        } catch(err) {
            res.status(500).json(err)
        }
    },
    deleteCheckout: async (req, res) => {
        try {
            // await CategoryList.updateMany({category_id: req.params.id}, {$set: {category_id: req.params.id}});
            await Checkout.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted Successfully");
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getAllCheckout: async(req, res) => {
        try{
            checkoutList = await Checkout.find()
            res.status(200).json(checkoutList)
        } catch(err) {
            res.status(500).json(err)
        }
    }
}
module.exports = CheckoutController;