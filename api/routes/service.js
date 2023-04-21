const express = require("express");
const router = express.Router();
const serviceCtrl = require("../controllers/service");

router.post("/add-service", serviceCtrl.createService);
router.get("/all-services", serviceCtrl.getAllService);

module.exports = router;
