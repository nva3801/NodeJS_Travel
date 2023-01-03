const router = require("express").Router();
const TourCodeController = require("../controllers/tourCodeController");
const middlewareController = require("../controllers/middlewareController");
//
// router.get("/", middlewareController.verifyTokenAndAdminAuth, TourCodeController.getAllTourCode);
// router.post("/", middlewareController.verifyTokenAndAdminAuth, TourCodeController.addTourCode);
// router.put("/:id", middlewareController.verifyTokenAndAdminAuth, TourCodeController.updateTourCode);
// router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, TourCodeController.deleteTourCode);
// router.get("/:id", middlewareController.verifyTokenAndAdminAuth, TourCodeController.getATourCode);

router.get("/", TourCodeController.getAllTourCode);
router.post("/", TourCodeController.addTourCode);
router.put("/:id", TourCodeController.updateTourCode);
router.delete("/:id", TourCodeController.deleteTourCode);
router.get("/:id", TourCodeController.getATourCode);
module.exports = router;