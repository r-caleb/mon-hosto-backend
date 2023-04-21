const express = require("express");
const router = express.Router();
const managerCtrl = require("../controllers/manager");

router.post("/manage-login", managerCtrl.login);
router.post("/manage-signup", managerCtrl.signup);

module.exports = router;
