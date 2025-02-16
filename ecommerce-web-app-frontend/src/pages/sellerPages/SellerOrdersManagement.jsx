import { Button, Select, Table } from "flowbite-react";
import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { MdPendingActions } from "react-icons/md";
import { MdPending } from "react-icons/md";
import { FcShipped } from "react-icons/fc";
import { MdFlightTakeoff } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaRoute } from "react-icons/fa6";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineDirectionsTransitFilled } from "react-icons/md";
import { FcCancel } from "react-icons/fc";

const SellerOrdersManagement = () => {
  return (
    <>
      <div className="flex justify-start items-center flex-wrap gap-4 py-8">
        {/* Received  */}
        <div className="flex gap-6 shadow-lg p-6 border">
          <div>
            <MdFlightTakeoff size={50} />
          </div>
          <div>
            <p className="text-3xl font-bold">0</p>
            <p className="text-slate-600 dark:text-white">
              Total Order Received
            </p>
          </div>
        </div>

        {/* Processing  */}
        <div className="flex gap-6 shadow-lg p-6 border">
          <div>
            <MdPending size={50} />
          </div>
          <div>
            <p className="text-3xl font-bold">0</p>
            <p className="text-slate-600 dark:text-white">
              Total Processing Orders
            </p>
          </div>
        </div>

        {/* Shipped  */}
        <div className="flex gap-6 shadow-lg p-6 border">
          <div>
            <FaShippingFast size={50} />
          </div>
          <div>
            <p className="text-3xl font-bold">0</p>
            <p className="text-slate-600 dark:text-white">
              Total Shipped Orders
            </p>
          </div>
        </div>

        {/* Cancelled  */}
        <div className="flex gap-6 shadow-lg p-6 border">
          <div>
            <MdCancel size={50} />
          </div>
          <div>
            <p className="text-3xl font-bold">0</p>
            <p className="text-slate-600 dark:text-white">Cancelled Orders</p>
          </div>
        </div>

        {/* Out for Delivery */}
        <div className="flex gap-6 shadow-lg p-6 border">
          <div>
            <FaRoute size={50} />
          </div>
          <div>
            <p className="text-3xl font-bold">0</p>
            <p className="text-slate-600 dark:text-white">
              Total Out for Delivery Orders
            </p>
          </div>
        </div>

        {/* Delivered  */}
        <div className="flex gap-6 shadow-lg p-6 border">
          <div>
            <IoCheckmarkDoneCircle size={50} />
          </div>
          <div>
            <p className="text-3xl font-bold">0</p>
            <p className="text-slate-600 dark:text-white">
              Total Delivered Orders
            </p>
          </div>
        </div>

        {/* Returned  */}
        <div className="flex gap-6 shadow-lg p-6 border">
          <div>
            <GiReturnArrow size={50} />
          </div>
          <div>
            <p className="text-3xl font-bold">0</p>
            <p className="text-slate-600 dark:text-white">Returned Orders</p>
          </div>
        </div>

        {/* In-Transit  */}
        <div className="flex gap-6 shadow-lg p-6 border">
          <div>
            <MdOutlineDirectionsTransitFilled size={50} />
          </div>
          <div>
            <p className="text-3xl font-bold">0</p>
            <p className="text-slate-600 dark:text-white">In-Transit Orders</p>
          </div>
        </div>

        {/* Failed  */}
        <div className="flex gap-6 shadow-lg p-6 border">
          <div>
            <FcCancel size={50} />
          </div>
          <div>
            <p className="text-3xl font-bold">0</p>
            <p className="text-slate-600 dark:text-white">
              Failed Delivery Orders
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Select id="orderStatus" className="w-[300px]" required>
          <option>Select Order Status</option>
          <option>Order Received</option>
          <option>Processing</option>
          <option>Shipped</option>
          <option>Out for Delivery</option>
          <option>Delivered</option>
          <option>Failed Delivery</option>
          <option>Returned</option>
          <option>In Transit</option>
          <option>Cancelled</option>
        </Select>
      </div>

      {/* All Orders  */}
      <div className="flex flex-wrap justify-center items-center min-h-32 gap-5">
        <p className="text-2xl font-bold">No Orders Made Yet!</p>
      </div>
      {/* <div className="p-8">
        <div className="flex flex-col justify-center shadow-lg dark:border-none border p-5">
          <div className="flex gap-3 justify-start">
            <FcShipped size={30} />
            <p className="text-xl font-bold uppercase">All Orders</p>
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
                    <Button color="gray">View</Button>
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
                    <Button color="gray">View</Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SellerOrdersManagement;
