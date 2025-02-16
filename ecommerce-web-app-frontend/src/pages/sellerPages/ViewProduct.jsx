import React from "react";
import BreadCrumb from "../../components/customerComponents/BreadCrumb";
import ProductCarousel from "../../components/customerComponents/ProductCarousel";
import ProductDetails from "../../components/customerComponents/ProductDetails";
import Review from "../../components/customerComponents/Review";

const ViewProduct = () => {
  return (
    <>
      <div className="pt-10 flex justify-center items-center w-[800px] h-[500px] p-4 pb-20 m-auto">
        <ProductCarousel />
      </div>
      <div className="flex justify-center items-center">
        <div className="pt-3 lg:mx-12 md:mx-4 sm:mx-2 p-3">
          <ProductDetails />
          <h5 className="text-xl mt-8 my-2 font-semibold">
            Ratings and Reviews
          </h5>
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
