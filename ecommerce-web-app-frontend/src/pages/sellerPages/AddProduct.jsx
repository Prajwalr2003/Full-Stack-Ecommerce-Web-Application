import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const AddProduct = () => {
  return (
    <>
      <div className="p-10">
        <form
          method="POST"
          className="flex flex-col justify-center items-center gap-4"
        >
          <p className="text-2xl text-center font-bold uppercase dark:text-slate-300">
            Add Product to E-COMMERCE
          </p>

          {/* Select Category  */}
          <div className="min-w-[600px] pt-2">
            <div className="mb-2 flex items-center gap-1">
              <Label htmlFor="categoryName" value="Select Category" />
              <p className="text-red-500 text-lg">*</p>
            </div>
            <Select id="categoryName" required>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home Appliances</option>
              <option>Book</option>
              <option>Sport & Fitness</option>
              <option>Toys & Games</option>
            </Select>
          </div>

          {/* Product Title  */}
          <div className="min-w-[600px] pt-2">
            <div className="mb-2 flex items-center gap-1">
              <Label htmlFor="productName" value="Product Title" />
              <p className="text-red-500 text-lg">*</p>
            </div>
            <TextInput
              id="productName"
              type="text"
              placeholder="Product title"
              required
              shadow
            />
          </div>

          {/* Product Description  */}
          <div className="min-w-[600px] pt-2">
            <div className="mb-2 flex items-center gap-1">
              <Label htmlFor="productDescription" value="Product Description" />
              <p className="text-red-500 text-lg">*</p>
            </div>
            <Textarea
              id="productDescription"
              placeholder="Enter product description....."
              required
              rows={4}
            />
          </div>

          {/* Product Sizes  */}
          <div className="min-w-[600px] pt-2">
            <div className="mb-2 flex items-center gap-1">
              <Label htmlFor="productSizes" value="Available Sizes" />
            </div>
            <div
              id="productSizes"
              className="flex items-center gap-4 flex-wrap"
            >
              <div className="flex items-center gap-2">
                <input type="checkbox" id="small" />
                <div className="border p-2 rounded cursor-pointer">Sm</div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="medium" />
                <div className="border p-2 rounded cursor-pointer">Md</div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="large" />
                <div className="border p-2 rounded cursor-pointer">Lg</div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="extraLarge" />
                <div className="border p-2 rounded cursor-pointer">XL</div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="extraExtraLarge" />
                <div className="border p-2 rounded cursor-pointer">XXL</div>
              </div>
            </div>
          </div>

          {/* Product Color and Images  */}
          <div className="min-w-[600px] pt-2">
            <div className="mb-2 flex items-center gap-1">
              <Label
                htmlFor="productImgColors"
                value="Product Color and Image"
              />
              <p className="text-red-500 text-lg">*</p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="">
                <Select id="colors" required>
                  <option value="black">Black</option>
                  <option value="white">White</option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="yellow">Yellow</option>
                  <option value="orange">Orange</option>
                  <option value="purple">Purple</option>
                  <option value="pink">Pink</option>
                  <option value="gray">Gray</option>
                  <option value="teal">Teal</option>
                  <option value="indigo">Indigo</option>
                </Select>
              </div>
              <div>
                <FileInput id="file" />
              </div>
              <div>
                <Button className="bg-sky-900 dark:bg-sky-900">
                  <IoMdAdd />
                </Button>
              </div>
            </div>
          </div>

          {/* Available Product Gender  */}
          <div className="min-w-[600px] pt-2">
            <div className="mb-2 flex items-center gap-1">
              <Label htmlFor="productGender" value="Select Gender" />
            </div>
            <div
              id="productGender"
              className="flex items-center gap-4 flex-wrap"
            >
              <div className="flex items-center gap-2">
                <input type="checkbox" id="male" />
                <div className="border p-2 rounded cursor-pointer">Male</div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="female" />
                <div className="border p-2 rounded cursor-pointer">Female</div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="other" />
                <div className="border p-2 rounded cursor-pointer">Others</div>
              </div>
            </div>
          </div>

          {/* Marked Price  */}
          <div className="min-w-[600px] pt-2">
            <div className="mb-2 flex items-center gap-1">
              <Label htmlFor="productMarkedPrice" value="Marked Price" />
              <p className="text-red-500 text-lg">*</p>
            </div>
            <TextInput
              id="productMarkedPrice"
              type="number"
              placeholder="Enter marked price of product"
              required
              shadow
            />
          </div>

          {/* Discount  */}
          <div className="min-w-[600px] pt-2">
            <div className="mb-2 flex items-center gap-1">
              <Label
                htmlFor="productDiscount"
                value="Discount On Marked Price"
              />
            </div>
            <TextInput
              id="productDiscount"
              type="number"
              placeholder="Enter marked price of product"
              required
              shadow
            />
          </div>

          {/* Product Stocks  */}
          <div className="min-w-[600px] pt-2">
            <div className="mb-2 flex items-center gap-1">
              <Label htmlFor="productStocks" value="Stocks Available" />
              <p className="text-red-500 text-lg">*</p>
            </div>
            <TextInput
              id="productStocks"
              type="number"
              placeholder="Enter stocks available for this product"
              required
              shadow
            />
          </div>

          <Button type="submit" color="gray" className="min-w-[600px] my-8">
            Add Product
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
