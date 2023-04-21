const express = require("express");
const router = express.Router();
const hospitalCtrl = require("../controllers/hospital");

router.post("/add-hospital", hospitalCtrl.createHospital);
router.get("/all-hospitals", hospitalCtrl.getAllHospital);
router.get("/a-hospitals/:id", hospitalCtrl.getOneHospital);

module.exports = router;
