import { Button, Card, TextInput } from "flowbite-react";

const Cart = () => {
  return (
    <>
      <h2 className="text-center pt-28 text-3xl text-gray-500 font-bold mb-8">
        Cart
      </h2>
      <div className="min-h-[78vh]">
        <div className="flex flex-wrap justify-center gap-10 px-4">
          <div>
            {Array(5)
              .fill(null)
              .map((index) => (
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
                        Price:{" "}
                        <span className="text-green-500 text-xl pt-1">
                          $700
                        </span>
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
              ))}
          </div>
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
            <p className="text-green-500 my-4">
              You will save $102 on this order
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
