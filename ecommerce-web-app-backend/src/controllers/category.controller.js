const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

const { Category } = require("../models/category.model");

const allCategories = asyncHandler( async(req, res) => {
    const categories = await Category.find().sort({ categoryName: 1 });

    if (!categories || categories.length === 0) {
        return res.status(200).json(
            new ApiResponse(200, [], "No categories found")
        );
    }

    res.status(200).json(
        new ApiResponse(200, categories, "Fetched all categories")
    );
});

const addCategory = asyncHandler( async(req, res) => {
  const {categoryName, isActive} = req.body;
  const category = await Category({categoryName: categoryName, isActive: isActive});
  const createdCategory = await category.save();
  res.json(new ApiResponse(200, createdCategory, "New category created"));
});

module.exports = {
    allCategories,
    addCategory
};