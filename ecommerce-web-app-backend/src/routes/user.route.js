const registerUser = require("../controllers/user.controller")
const { Router } = require('express');
const router = Router();

router.route("/register").get(registerUser);

module.exports = router;