import { Button, Pagination, TextInput } from "flowbite-react";
import React, { useState } from "react";
import SellerProductCard from "../../components/sellerComponents/SellerProductCard";
import { useNavigate } from "react-router-dom";

const SellerProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const onPageChange = setCurrentPage(1);
  const navigate = useNavigate();
  const handleNavigation = (link) => {
    navigate(link);
  };
  return (
    <>
      <div className="flex flex-wrap justify-center items-center min-h-[70vh] gap-5">
        <p className="text-2xl font-bold">No Products Added Yet!</p>
        <Button
          color="gray"
          onClick={() => handleNavigation("/seller/add-product")}
        >
          Add Products
        </Button>
      </div>
      {/* <div className="mt-2">
        <TextInput
          id="search"
          type="search"
          placeholder="Search Your Product"
          shadow
          className="w-[90%] mx-auto"
        />
      </div>
      <div className="flex justify-center flex-wrap gap-4 pt-8">
        {Array(4)
          .fill(null)
          .map((index) => {
            return <SellerProductCard></SellerProductCard>;
          })}
      </div>
      <div className="flex overflow-x-auto sm:justify-center pt-10">
        <Pagination currentPage={currentPage} totalPages={100} />
      </div> */}
    </>
  );
};

export default SellerProducts;
