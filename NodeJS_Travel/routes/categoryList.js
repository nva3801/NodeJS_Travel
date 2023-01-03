const router = require("express").Router();
const categoryListController = require("../controllers/categoryListController");
const middlewareController = require("../controllers/middlewareController");

// router.get("/", middlewareController.verifyTokenAndAdminAuth, categoryListController.getAllCategoryList);
// router.post("/", middlewareController.verifyTokenAndAdminAuth, categoryListController.addCategoryList);
// router.put("/:id", middlewareController.verifyTokenAndAdminAuth, categoryListController.updateCategoryList);
// router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, categoryListController.deleteCategoryList);
// router.get("/:id", middlewareController.verifyTokenAndAdminAuth, categoryListController.getACategory);

router.get("/", categoryListController.getAllCategoryList);
router.post("/", categoryListController.addCategoryList);
router.put("/:id", categoryListController.updateCategoryList);
router.delete("/:id", categoryListController.deleteCategoryList);
router.get("/:id", categoryListController.getACategory);

module.exports = router;