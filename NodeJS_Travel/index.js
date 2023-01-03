const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");
const bodyParser = require("body-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const categoryRoute = require("./routes/category");
const categoryListRoute = require("./routes/categoryList");
const categoryItemRoute = require("./routes/categoryItem");
const productRoute = require("./routes/product");
const productImageRoute = require("./routes/productImage");
const tourCodeRoute = require("./routes/tourCode");
const getList = require("./routes/getList");

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("Connect DB success");
});

app.use(bodyParser.json({limit:"50mb"}))
app.use(cors());
app.use(cookieParser()); // tao cookie gan cookie
app.use(express.json()); // cho duoi dang json
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

// routes
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.use("/v1/category", categoryRoute);
app.use("/v1/category-list", categoryListRoute);
app.use("/v1/category-item", categoryItemRoute);
app.use("/v1/product", productRoute);
app.use("/v1/product-image", productImageRoute);
app.use("/v1/tourcode", tourCodeRoute);
app.use("/v1/list", getList)

app.listen(8000, ()=>{
    console.log("Server is running");
});
