const router = require("express").Router();
const ProductController = require("../controllers/productController");
const middlewareController = require("../controllers/middlewareController");
const {upload} = require("../helpers/filehelper");
//
// router.get("/", middlewareController.verifyTokenAndAdminAuth, ProductController.getAllProduct);
// router.post("/", middlewareController.verifyTokenAndAdminAuth, upload.single("image"), ProductController.addProduct);
// router.put("/:id", middlewareController.verifyTokenAndAdminAuth, upload.single("image"), ProductController.updateProduct);
// router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, ProductController.deleteProduct);
// router.get("/:id", middlewareController.verifyTokenAndAdminAuth, ProductController.getAProduct);

router.get("/", ProductController.getAllProduct);
router.post("/", upload.single("image"), ProductController.addProduct);
router.put("/:id", upload.single("image"), ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);
router.get("/:slug", ProductController.getAProduct);

module.exports = router;