import React from "react";

const CartPriceCard = () => {
  return (
    <>
      <div className="h-80 p-4 border rounded-lg mb-8 transition-transform duration-300 hover:scale-105">
        <h5 className="text-xl text-gray-500 my-2">Price Details</h5>
        <hr />
        <div className="flex justify-between mt-4">
          <p>Price (2 items)</p>
          <p>$1029</p>
        </div>
        <div className="flex justify-between mt-4">
          <p>Discount</p>
          <p className="text-green-600">75% Off</p>
        </div>
        <div className="flex justify-between mt-4">
          <p>Delivery Charges</p>
          <p className="text-green-500">Free</p>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-xl font-bold">Total Amount</p>
          <p className="text-xl font-bold">$1000</p>
        </div>
        <p className="text-green-500 my-4">You will save $102 on this order</p>
      </div>
    </>
  );
};

export default CartPriceCard;
