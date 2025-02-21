const { Router } = require('express');
const router = Router();
const {addProduct} = require("../controllers/product.controller");

router.route("/add").post(addProduct);

module.exports = router;