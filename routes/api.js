// TODO 2: SETUP ROUTING (ROUTER)
const express = require("express");
const router = express.Router();
const PatientController = require("../controllers/PatientController");

router.get("/patients", PatientController.index);
router.post("/patient", PatientController.store);
router.put("/patient/:id", PatientController.update);
router.delete("/patient/:id", PatientController.destroy);
router.get("/patient/:id", PatientController.show);
router.get("/patient/search/:name", PatientController.search);
router.get("/patient/status/positive", PatientController.positive);
router.get("/patient/status/recovery", PatientController.recovery);
router.get("/patient/status/dead", PatientController.dead);

module.exports = router;
