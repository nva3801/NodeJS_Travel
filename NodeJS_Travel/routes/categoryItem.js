const router = require("express").Router();
const categoryItemController = require("../controllers/categoryItemController");
const middlewareController = require("../controllers/middlewareController");
const {upload} = require("../helpers/filehelper");

// router.get("/", middlewareController.verifyTokenAndAdminAuth, categoryItemController.getAllCategoryItem);
// router.post("/", middlewareController.verifyTokenAndAdminAuth, upload.single("image"), categoryItemController.addCategoryItem);
// router.put("/:id", middlewareController.verifyTokenAndAdminAuth, upload.single("image"), categoryItemController.updateCategoryItem);
// router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, categoryItemController.deleteCategoryItem);
// router.get("/:id", middlewareController.verifyTokenAndAdminAuth, categoryItemController.getACategoryItem);

router.get("/", categoryItemController.getAllCategoryItem);
router.post("/", upload.single("image"), categoryItemController.addCategoryItem);
router.put("/:id", upload.single("image"), categoryItemController.updateCategoryItem);
router.delete("/:id", categoryItemController.deleteCategoryItem);
router.get("/:slug", categoryItemController.getACategoryItem);

module.exports = router;