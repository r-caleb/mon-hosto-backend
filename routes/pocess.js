const express = require("express");
const router = express.Router();
const pocessCtrl = require("../controllers/pocess");

router.post("/add-pocess", pocessCtrl.createPocess);
router.get("/all-pocess", pocessCtrl.getAllPocess);
router.get("/a-pocess", pocessCtrl.getOnePocess);

module.exports = router;
