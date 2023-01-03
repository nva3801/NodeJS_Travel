const router = require("express").Router();
const ProductImageController = require("../controllers/productImageController");
const middlewareController = require("../controllers/middlewareController");
const {upload} = require("../helpers/filehelper");
//
// router.get("/", middlewareController.verifyTokenAndAdminAuth, ProductImageController.getAllProductImage);
// router.post("/", middlewareController.verifyTokenAndAdminAuth, upload.single("image"), ProductImageController.addProductImage);
// router.put("/:id", middlewareController.verifyTokenAndAdminAuth, upload.single("image"), ProductImageController.updateProductImage);
// router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, ProductImageController.deleteProductImage);
// router.get("/:id", middlewareController.verifyTokenAndAdminAuth, ProductImageController.getAProductImage);

router.get("/", ProductImageController.getAllProductImage);
router.post("/", upload.single("image"), ProductImageController.addProductImage);
router.put("/:id", upload.single("image"), ProductImageController.updateProductImage);
router.delete("/:id", ProductImageController.deleteProductImage);
router.get("/:id", ProductImageController.getAProductImage);

module.exports = router;