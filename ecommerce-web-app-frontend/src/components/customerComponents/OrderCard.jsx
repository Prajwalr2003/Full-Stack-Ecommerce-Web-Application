import React from "react";
import { IoIosStar } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const OrderCard = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 border p-5 mx-auto rounded-lg mb-8 transition-transform duration-300 ease-in-out hover:scale-95">
        <div className="flex flex-wrap justify-center lg:mb-6 p-6 border-b border-blue-400 shadow rounded-lg">
          <div className="">
            <img
              src="../../temp/shirt.jpg"
              alt="productName"
              className="w-28 h-28"
            />
          </div>
          <div className="ml-4 mt-4 lg:mt-0">
            <p className="text-gray-600">VeBNoR</p>
            <p className="text-lg">
              VeBNoR Printed Men Polo Neck Navy Blue T-Shirt
            </p>
            <div className="flex gap-3">
              <p className="text-gray-600 ">Size: XXL</p>
              <p className="text-gray-600">Size: Color</p>
            </div>
          </div>
        </div>
        <div className="lg:p-6 lg:mt-2">
          <span className="text-xl pt-1">$700</span>
        </div>
        <div className="lg:p-6">
          <div className="flex">
            <TbPointFilled className="text-green-600" size={30} />
            <p className="text-lg font-bold">Delivered on Nov 11</p>
          </div>
          <p className="ml-7">Your has been delivered</p>
          <div className="flex gap-3 ml-2 mt-3 text-blue-400">
            <IoIosStar className="mt-1" />
            <Link to="/product-view">Rate & Review Product</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
