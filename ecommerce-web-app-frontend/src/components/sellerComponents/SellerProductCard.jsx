import { Button } from "flowbite-react";
import React from "react";

const SellerProductCard = () => {
  return (
    <>
      <div className="dark:bg-slate-900 flex flex-col justify-center items-center shadow-lg rounded-md w-72 h-[440px] transition-transform duration-200 border dark:border-0 hover:scale-105">
        <div className="overflow-hidden">
          <img
            alt="Apple Watch Series 7"
            src="../../temp/appleWatch.jpg"
            className="w-52 h-52 object-cover"
          />
        </div>
        <div onClick={() => handleNavigation("/product-view")}>
          <p className="text-md font-semibold tracking-tight text-gray-900 dark:text-white w-56 mt-4 text-center cursor-pointer">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </p>
        </div>
        <div className="flex items-center gap-4 justify-center pt-3">
          <p className="text-xl text-slate-700 font-semibold">Price:</p>
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
        </div>
        <div className="flex items-center gap-2 pt-4 justify-center">
          <Button color="gray">View Details</Button>
          <Button color="gray">Edit</Button>
        </div>
      </div>
    </>
  );
};

export default SellerProductCard;
