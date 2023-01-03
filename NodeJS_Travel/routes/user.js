const router = require("express").Router();
const userController = require("../controllers/userController");
const middlewareController = require("../controllers/middlewareController");

// get all users
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getAnUser);

// delete user
router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, userController.deleteUser);

router.post("/register-admin", middlewareController.verifyTokenAndAdminAuth, userController.registerAdmin);
router.put("/reset-password/:id", userController.resetPassword);

module.exports = router;