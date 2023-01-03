const User = require("../models/User");
const bcrypt = require("bcrypt");

const userController = {
    // get all users
    getAllUsers: async(req, res) => {
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    // delete user
    deleteUser: async(req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete Successfully");
        } catch(err) {
            res.status(500).json(err);
        }
    },
    registerAdmin: async(req, res) => {
        try{
            // ma hoa mat khau
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            // create new user
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
                admin: true,
            });
            // save to db
            const user = await newUser.save();
            res.status(200).json(user);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    getAnUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    resetPassword: async (req, res) => {
        try{
            const user = await User.findById(req.params.id);
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.new_password, salt);
            await bcrypt.compare(req.body.current_password, user.password, async (err, data) => {
                if (data) {
                    await user.updateOne({
                        $set: {
                            password: hashed
                        }
                    })
                    res.status(200).json("Update success")
                } else {
                    return res.status(401).json("Password không đúng. Bạn vui lòng nhập lại ");
                }
            });
        } catch(err) {
            res.status(500).json(err)
        }
    },
    getOrderManagement: async (req, res) => {
        try {
            const user = await Checkout.find({email: req.body.email})
            return res.status(200).json(user)
            
        } catch(err) {
            res.status(500).json(err)
        }
    }
}

module.exports = userController;