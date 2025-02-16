import React from "react";
import { MdPendingActions } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import { FaHandHoldingHeart } from "react-icons/fa";
import { Button, Table } from "flowbite-react";
import { FaCarRear } from "react-icons/fa6";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const SellerDashboard = () => {
  const navigate = useNavigate();
  const handleNavigation = (link) => {
    navigate(link);
  };
  return (
    <>
      {/* Analytics Cards  */}
      <div className="flex justify-center flex-wrap gap-4 pt-8">
        <div className="flex gap-10 shadow-lg p-6 border">
          <div>
            <FaHandHoldingHeart size={50} />
          </div>
          <div>
            <p className="text-3xl font-bold">0</p>
            <p className="text-slate-600">Total Sold Products</p>
          </div>
        </div>
        <div className="flex gap-10 shadow-lg p-6 border">
          <div>
            <IoIosHeart size={50} />
          </div>
          <div>
            <p className="text-3xl font-bold">0</p>
            <p className="text-slate-600">Total Revenue</p>
          </div>
        </div>
        <div className="flex gap-10 shadow-lg p-6 border">
          <div>
            <MdPendingActions size={50} />
          </div>
          <div>
            <p className="text-3xl font-bold">0</p>
            <p className="text-slate-600">Total Pending Orders</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center min-h-[50vh] gap-5">
        <p className="text-2xl font-bold">No Products Added Yet!</p>
        <Button
          color="gray"
          onClick={() => handleNavigation("/seller/add-product")}
        >
          Add Products
        </Button>
      </div>

      {/* Recent Orders  */}
      {/* <div className="p-8">
        <div className="flex flex-col justify-center shadow-lg dark:border-none border p-5">
          <div className="flex gap-3 justify-start">
            <RxCounterClockwiseClock size={30} />
            <p className="text-xl font-bold uppercase">Recent Orders</p>
          </div>
          <div className="overflow-x-auto mt-3">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell>OrderId</Table.HeadCell>
                <Table.HeadCell>Product Name</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>Orderby</Table.HeadCell>
                <Table.HeadCell>Date</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
                <Table.HeadCell>Action</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>230732</Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Iphone 16
                  </Table.Cell>
                  <Table.Cell>$500</Table.Cell>
                  <Table.Cell>Prajwal Rangari</Table.Cell>
                  <Table.Cell>25/12/2024</Table.Cell>
                  <Table.Cell>Processing</Table.Cell>
                  <Table.Cell>
                    <Button
                      color="gray"
                      onClick={() => handleNavigation("/seller/product")}
                    >
                      View
                    </Button>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>234323</Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Casual Formal Wear Tshirt
                  </Table.Cell>
                  <Table.Cell>$50</Table.Cell>
                  <Table.Cell>Prashik Rangari</Table.Cell>
                  <Table.Cell>03/01/2025</Table.Cell>
                  <Table.Cell>Out for Delivery</Table.Cell>
                  <Table.Cell>
                    <Button
                      color="gray"
                      onClick={() => handleNavigation("/seller/product")}
                    >
                      View
                    </Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      </div> */}

      {/* Your Products  */}
      {/* <div className="px-8 pb-8">
        <div className="flex flex-col justify-center shadow-lg border dark:border-none p-5">
          <div className="flex gap-3 justify-start">
            <FaCarRear size={30} />
            <p className="text-xl font-bold uppercase">Your Products</p>
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
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Casual Formal Wear Tshirt
                  </Table.Cell>
                  <Table.Cell>Clothing</Table.Cell>
                  <Table.Cell>Large</Table.Cell>
                  <Table.Cell>Blue</Table.Cell>
                  <Table.Cell>$50</Table.Cell>
                  <Table.Cell>150</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SellerDashboard;
