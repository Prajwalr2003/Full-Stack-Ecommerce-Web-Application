import { Button, Pagination, TextInput } from "flowbite-react";
import React, { useState } from "react";
import SellerProductCard from "../../components/sellerComponents/SellerProductCard";

const SellerProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const onPageChange = setCurrentPage(1);
  return (
    <>
      <div className="mt-2">
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
      </div>
    </>
  );
};

export default SellerProducts;
