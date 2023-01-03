const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authControllers = {
    // Register
    registerUser: async(req, res) => {
        try{
            // ma hoa mat khau
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            // create new user
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
            });
            const userDuplicate = await User.findOne({email: req.body.email});
            if(userDuplicate) {
                return res.status(404).json("Email đã tồn tại");
            } else {
                const user = await newUser.save();
                return res.status(200).json(user);
            }
            // save to db
        } catch(err) {
            return res.status(500).json(err);
        }
    },

    // generate access token
    generateAccessToken: (user) => {
        return jwt.sign({id: user.id, admin: user.admin}, process.env.JWT_ACCESS_KEY, {expiresIn: "240h"});
    },

    generateRefreshToken: (user) => {
        return jwt.sign({id: user.id, admin: user.admin}, process.env.JWT_ACCESS_KEY, {expiresIn: "240h"});
    },

    // Login
    loginUser: async (req, res) => {
        try{
            const user = await User.findOne({email: req.body.email});
            if(!user) {
                return res.status(404).json("Email không tồn tại. Bạn vui lòng đăng ký để đăng nhập");
            }
            await bcrypt.compare(req.body.password, user.password, (err, data) => {
                if (err) throw err
                if (data) {
                    const accessToken = authControllers.generateAccessToken(user);
                    const refreshToken = authControllers.generateRefreshToken(user);
                    res.cookie("refreshToken", refreshToken, {
                        httpOnly: true,
                        path: "/",
                        sameSite: "strict",
                        secure: false,
                    });
                    const {password, ...others} = user._doc;
                    return res.status(200).json({...others, accessToken, refreshToken});
                } else {
                    return res.status(401).json("Password không đúng. Bạn vui lòng nhập lại ");
                }
            });
        }catch(err) {
            res.status(500).json(err);
        }
    },
    //log out
    logoutUser: async (req, res) => {
        res.clearCookie("refreshToken");
        return res.status(200).json("Logout successfully");
    }
};


module.exports = authControllers;