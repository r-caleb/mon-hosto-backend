const express = require("express");
const router = express.Router();
const townCtrl = require("../controllers/town");

router.post("/add-town", townCtrl.createTown);

module.exports = router;
