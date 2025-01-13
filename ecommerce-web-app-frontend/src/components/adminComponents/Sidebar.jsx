import { RiDashboard3Fill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {
  FaCartPlus,
  FaShippingFast,
  FaStore,
  FaUser,
  FaStar,
} from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleNavigation = (link) => {
    navigate(link);
  };
  return (
    <>
      <div
        className="flex justify-start gap-2 items-center hover:bg-slate-700 p-2 cursor-pointer mt-4"
        onClick={() => handleNavigation("/admin/dashboard")}
      >
        <RiDashboard3Fill size={30} />
        Dashboard
      </div>
      <div
        className="flex justify-start gap-2 items-center hover:bg-slate-700 p-2 cursor-pointer mt-3"
        onClick={() => handleNavigation("/admin/user-management")}
      >
        <FaUser size={30} />
        User Management
      </div>
      <div
        className="flex justify-start gap-2 items-center hover:bg-slate-700 p-2 cursor-pointer mt-3"
        onClick={() => handleNavigation("/admin/product-management")}
      >
        <FaStore size={30} />
        Product Management
      </div>
      <div
        className="flex justify-start gap-2 items-center hover:bg-slate-700 p-2 cursor-pointer mt-3"
        onClick={() => handleNavigation("/admin/order-management")}
      >
        <FaShippingFast size={30} />
        Order Management
      </div>
      <div
        className="flex justify-start gap-2 items-center hover:bg-slate-700 p-2 cursor-pointer mt-3"
        onClick={() => handleNavigation("/admin/discounts-offers")}
      >
        <BiSolidOffer size={30} />
        Discount & Offers
      </div>
      <div
        className="flex justify-start gap-2 items-center hover:bg-slate-700 p-2 cursor-pointer mt-3"
        onClick={() => handleNavigation("/admin/ratings-reviews")}
      >
        <FaStar size={30} />
        Ratings and Reviews
      </div>
      <div
        className="flex justify-start gap-2 items-center hover:bg-slate-700 p-2 cursor-pointer mt-3"
        onClick={() => handleNavigation("/admin/payment-transactions")}
      >
        <MdOutlinePayment size={30} />
        Payment and Transactions
      </div>
      <div
        className="flex justify-start gap-2 items-center hover:bg-slate-700 p-2 cursor-pointer mt-3"
        onClick={() => handleNavigation("/admin/account-settings")}
      >
        <IoSettings size={30} />
        Account Settings
      </div>
    </>
  );
};

export default Sidebar;
