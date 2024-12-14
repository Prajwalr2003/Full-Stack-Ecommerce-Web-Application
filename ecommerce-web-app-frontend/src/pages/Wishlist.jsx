import { Button, TextInput } from "flowbite-react";

const Wishlist = () => {
  return (
    <>
      <h2 className="text-center pt-28 text-3xl text-gray-500 font-bold mb-8">
        WishList
      </h2>
      <div className="flex flex-wrap justify-center gap-4 px-2">
        <div className="flex flex-wrap justify-center p-4 border-b border-blue-400 rounded-lg mb-6">
          <div className="">
            <img
              src="../../temp/shirt.jpg"
              alt="productName"
              className="w-48 h-48"
            />
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
                Price: <span className="text-green-500 text-xl pt-1">$700</span>
              </span>
              <p className="text-green-500 pt-1">75% Off</p>
            </div>

            <div className="flex justify-start gap-4 my-5">
              <Button color="yellow" className="">
                Add to Cart
              </Button>
              <Button color="red">Remove</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-10 lg:pb-44"></div>
    </>
  );
};

export default Wishlist;
