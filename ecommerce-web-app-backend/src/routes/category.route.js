const { Router } = require('express');
const { allCategories, addCategory } = require('../controllers/category.controller');
const router = Router();

router.route("/all").get(allCategories);
router.route("/create-category").post(addCategory);

module.exports = router;