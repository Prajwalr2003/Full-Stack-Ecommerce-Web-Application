import { RiDashboard3Fill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaCartPlus, FaShippingFast, FaStore } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleNavigation = (link) => {
    navigate(link);
  };
  return (
    <>
      <div
        className="flex justify-start gap-2 items-center hover:bg-slate-700 p-2 cursor-pointer mt-4"
        onClick={() => handleNavigation("/seller/dashboard")}
      >
        <RiDashboard3Fill size={30} />
        Dashboard
      </div>
      <div
        className="flex justify-start gap-2 items-center hover:bg-slate-700 p-2 cursor-pointer mt-3"
        onClick={() => handleNavigation("/seller/your-products")}
      >
        <FaCartPlus size={30} />
        Your Products
      </div>
      <div
        className="flex justify-start gap-2 items-center hover:bg-slate-700 p-2 cursor-pointer mt-3"
        onClick={() => handleNavigation("/seller/product-management")}
      >
        <FaStore size={30} />
        Product Management
      </div>
      <div
        className="flex justify-start gap-2 items-center hover:bg-slate-700 p-2 cursor-pointer mt-3"
        onClick={() => handleNavigation("/seller/order-management")}
      >
        <FaShippingFast size={30} />
        Order Management
      </div>
      <div
        className="flex justify-start gap-2 items-center hover:bg-slate-700 p-2 cursor-pointer mt-3"
        onClick={() => handleNavigation("/seller/customer-management")}
      >
        <RiCustomerServiceFill size={30} />
        Customer Management
      </div>
      <div
        className="flex justify-start gap-2 items-center hover:bg-slate-700 p-2 cursor-pointer mt-3"
        onClick={() => handleNavigation("/seller/account-settings")}
      >
        <IoSettings size={30} />
        Account Settings
      </div>
    </>
  );
};

export default Sidebar;
