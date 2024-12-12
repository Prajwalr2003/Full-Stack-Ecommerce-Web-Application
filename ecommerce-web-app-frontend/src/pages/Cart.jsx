import { Button, Card, TextInput } from "flowbite-react";

const Cart = () => {
  return (
    <>
      <h2 className="text-center pt-28 text-3xl text-gray-500 font-bold mb-8">
        Cart
      </h2>
      <div className="flex flex-wrap justify-center gap-4 px-2">
        <div>
          <div className="flex flex-wrap justify-center p-4 border rounded-lg mb-6">
            <div className="">
              <img
                src="../../temp/shirt.jpg"
                alt="productName"
                className="w-48 h-48"
              />
              <div className="flex gap-4 my-4 justify-center">
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
              <h5 className="text-lg">
                VeBNoR Printed Men Polo Neck Navy Blue T-Shirt
              </h5>
              <p className="text-gray-600 ">Size: XXL</p>
              <p className="text-gray-600">Size: Color</p>
              <p className="text-gray-600">Seller: VeBNoR</p>
              <div className="flex gap-4 mt-4">
                <span>
                  Price:{" "}
                  <span className="text-green-500 text-xl pt-1">$700</span>
                </span>
                <p className="text-green-500 pt-1">75% Off</p>
              </div>

              <div className="flex justify-start gap-4 mt-4">
                <Button color="yellow" className="">
                  Save for later
                </Button>
                <Button color="red">Remove</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-80 p-4 border rounded-lg lg:mb-36 mb-8">
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
          <p className="text-green-500 my-4">
            You will save $102 on this order
          </p>
        </div>
      </div>
    </>
  );
};

export default Cart;
