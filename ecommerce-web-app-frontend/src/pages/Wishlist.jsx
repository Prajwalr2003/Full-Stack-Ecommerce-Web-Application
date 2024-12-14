import { Button, TextInput } from "flowbite-react";
import ProfileSidebar from "../components/ProfileSidebar";

const Wishlist = () => {
  return (
    <>
      <div className="flex flex-wrap pt-16">
        <ProfileSidebar />
        <div className="mx-auto p-5 lg:ml-72">
          <h2 className="text-center pt-12 text-3xl text-gray-500 font-bold mb-8">
            WishList
          </h2>
          <div className="flex flex-wrap border rounded-lg justify-center gap-4 px-2">
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
                    Price:{" "}
                    <span className="text-green-500 text-xl pt-1">$700</span>
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
        </div>
      </div>
    </>
  );
};

export default Wishlist;
