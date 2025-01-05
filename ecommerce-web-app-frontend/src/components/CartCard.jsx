import { Button, TextInput } from "flowbite-react";
import React from "react";

const CartCard = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center border p-4 rounded-lg mb-6 transition-transform duration-300 hover:scale-105">
        <div className="flex flex-col justify-center items-center">
          <img
            src="../../temp/shirt.jpg"
            alt="productName"
            className="w-36 h-36"
          />
          <div className="flex gap-2 my-4 justify-center">
            <Button color="gray">-</Button>
            <TextInput
              id="quantity"
              type="text"
              value={0}
              required
              shadow
              className="w-16"
            />
            <Button color="gray">+</Button>
          </div>
        </div>
        <div className="ml-4">
          <p className="lg:text-lg">
            VeBNoR Printed Men Polo Neck Navy Blue T-Shirt
          </p>
          <div className="flex gap-2">
            <p className="text-gray-600 ">Size: XXL</p>
            <p className="text-gray-600">Size: Color</p>
            <p className="text-gray-600">Seller: VeBNoR</p>
          </div>
          <div className="flex gap-4 mt-4">
            <span>
              Price: <span className="text-green-500 text-xl pt-1">$700</span>
            </span>
            <p className="text-green-500 pt-1">75% Off</p>
          </div>

          <div className="flex justify-start gap-4 mt-4">
            <Button color="yellow" className="">
              Buy Now
            </Button>
            <Button color="red">Remove</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
