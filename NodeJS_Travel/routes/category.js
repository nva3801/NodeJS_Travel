const router = require("express").Router();
const categoryController = require("../controllers/categoryController");
const middlewareController = require("../controllers/middlewareController");
//
// router.get("/", middlewareController.verifyTokenAndAdminAuth, categoryController.getAllCategories);
// router.post("/", middlewareController.verifyTokenAndAdminAuth, categoryController.addCategory);
// router.put("/:id", middlewareController.verifyTokenAndAdminAuth, categoryController.updateCategory);
// router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, categoryController.deleteCategory);
// router.get("/:id", middlewareController.verifyTokenAndAdminAuth, categoryController.getACategory);

router.get("/", categoryController.getAllCategories);
router.post("/", categoryController.addCategory);
router.put("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);
router.get("/:id", categoryController.getACategory);

module.exports = router;