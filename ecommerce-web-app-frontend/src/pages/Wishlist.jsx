import { Button, TextInput } from "flowbite-react";
import ProfileSidebar from "../components/ProfileSidebar";
import ProfileTabBar from "../components/ProfileTabBar";

const Wishlist = () => {
  return (
    <>
      <div className="flex justify-center">
        <ProfileTabBar />
      </div>
      <h2 className="text-center pt-12 text-3xl text-gray-500 font-bold mb-8">
        WishList
      </h2>
      <div className="min-h-[70vh] p-4">
        {Array(4)
          .fill(null)
          .map((index) => {
            return (
              <div className="flex justify-center transition-transform duration-300 hover:scale-105">
                <div className="flex flex-wrap gap-5 justify-center p-4 items-center border rounded-lg mb-6">
                  <div>
                    <img
                      src="../../temp/shirt.jpg"
                      alt="productName"
                      className="w-48 h-48"
                    />
                  </div>
                  <div>
                    <p className="text-lg mt-5">
                      VeBNoR Printed Men Polo Neck Navy Blue T-Shirt
                    </p>
                    <p className="text-gray-600 ">Size: XXL</p>
                    <p className="text-gray-600">Size: Color</p>
                    <p className="text-gray-600">Seller: VeBNoR</p>
                    <div className="flex gap-4 mt-4">
                      <span>
                        Price:{" "}
                        <span className="text-green-500 text-xl pt-1">
                          $700
                        </span>
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
            );
          })}
      </div>
    </>
  );
};

export default Wishlist;
