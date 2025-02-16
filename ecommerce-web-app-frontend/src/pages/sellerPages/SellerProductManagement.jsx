import { Button, Pagination, Table, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { MdLocalMall } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";

const SellerProductManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <>
      {/* Product Actions  */}
      <div className="flex justify-center flex-wrap gap-4 pt-8">
        <div className="flex gap-10 shadow-lg p-6 border">
          <div>
            <FaHandHoldingHeart size={50} />
          </div>
          <div>
            <p className="text-3xl font-bold">0</p>
            <p className="text-slate-600">Total Products</p>
          </div>
        </div>
        <div
          className="flex gap-6 justify-center items-center shadow-lg p-6 border cursor-pointer"
          onClick={() => handleNavigate("/seller/add-product")}
        >
          <div>
            <IoMdAddCircle size={50} />
          </div>
          <div>
            <p className="text-2xl font-bold">Add Product</p>
          </div>
        </div>
      </div>

      {/* Search Input  */}
      {/* <div className="pt-8">
        <TextInput
          id="search"
          type="search"
          placeholder="Search Your Product"
          shadow
          className="w-[90%] mx-auto"
        />
      </div> */}

      <div className="flex flex-wrap justify-center items-center min-h-[50vh] gap-5">
        <p className="text-2xl font-bold">No Products Added Yet!</p>
        <Button
          color="gray"
          onClick={() => handleNavigate("/seller/add-product")}
        >
          Add Products
        </Button>
      </div>

      {/* All Products  */}
      {/* <div className="p-8">
        <div className="flex flex-col justify-center shadow-lg border dark:border-none p-5">
          <div className="flex gap-3 justify-start">
            <MdLocalMall size={30} />
            <p className="text-xl font-bold uppercase">All Products</p>
          </div>
          <div className="overflow-x-auto mt-3">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell>Product Name</Table.HeadCell>
                <Table.HeadCell>Category</Table.HeadCell>
                <Table.HeadCell>Size</Table.HeadCell>
                <Table.HeadCell>Color</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>Stocks</Table.HeadCell>
                <Table.HeadCell>Action</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Iphone 16
                  </Table.Cell>
                  <Table.Cell>Electronics</Table.Cell>
                  <Table.Cell>No Size</Table.Cell>
                  <Table.Cell>Black</Table.Cell>
                  <Table.Cell>$500</Table.Cell>
                  <Table.Cell>100</Table.Cell>
                  <Table.Cell>
                    <Button
                      color="gray"
                      onClick={() => handleNavigate("/seller/update/product")}
                    >
                      Update
                    </Button>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Casual Formal Wear Tshirt
                  </Table.Cell>
                  <Table.Cell>Clothing</Table.Cell>
                  <Table.Cell>Large</Table.Cell>
                  <Table.Cell>Blue</Table.Cell>
                  <Table.Cell>$50</Table.Cell>
                  <Table.Cell>300</Table.Cell>
                  <Table.Cell>
                    <Button
                      color="gray"
                      onClick={() => handleNavigate("/seller/update/product")}
                    >
                      Update
                    </Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination currentPage={currentPage} totalPages={10} />
      </div> */}
    </>
  );
};

export default SellerProductManagement;
