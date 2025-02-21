const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const { Product } = require("../models/product.model");
const ProductVariant = require("../models/productVariant.model");

const addProduct = asyncHandler(async (req, res) => {
  console.log("add product is called");
  const data={name: "chutiya"};
  res.status(200).json(new ApiResponse(200, data, "Product is added"));
});

module.exports = {
  addProduct
}