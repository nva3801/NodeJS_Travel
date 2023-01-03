const router = require("express").Router();
const getListController = require("../controllers/getListController");
const getCheckout = require("../controllers/CheckoutController");
const middlewareController = require("../controllers/middlewareController");
const getTourCode = require("../controllers/tourCodeController");

router.get("/category/:slug", getListController.getListCategory);
router.get("/checkout/:tour_code", getCheckout.Checkout);
router.post("/checkout-store", getCheckout.AddCheckout);
router.get("/list-order/:email", getCheckout.getCheckout);
router.get("/list-order/detail/:id", getCheckout.getDetailCheckout);
router.put("/update-checkout/:id", getCheckout.updateCheckout);
router.get("/product/:id", getListController.getProductById);
router.delete("/:id", getCheckout.deleteCheckout);
router.get("/checkout", getCheckout.getAllCheckout)

module.exports = router;