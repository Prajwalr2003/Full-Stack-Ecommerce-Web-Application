import { Sidebar } from "flowbite-react";
import { FaLocationDot } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { FaShoppingCart, FaComments } from "react-icons/fa";
import { IoIosStar, IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

const ProfileSidebar = () => {
  return (
    <div>
      <Sidebar aria-label="Profile Sidebar" className="w-full lg:w-auto">
        <Sidebar.Items className="lg:pt-10">
          <Sidebar.ItemGroup>
            <Link to="/profile">
              <Sidebar.Item href="#" icon={MdManageAccounts}>
                Profile Information
              </Sidebar.Item>
            </Link>
            <Link to="/my-addresses">
              <Sidebar.Item href="#" icon={FaLocationDot} labelColor="dark">
                Manage Addresses
              </Sidebar.Item>
            </Link>
            <Link to="/orders">
              <Sidebar.Item href="#" icon={FaShoppingCart} label="3">
                Orders
              </Sidebar.Item>
            </Link>
            <Link to="/my-reviews-ratings">
              <Sidebar.Item href="#" icon={FaComments}>
                Reviews and Ratings
              </Sidebar.Item>
            </Link>
            <Link to="/wishlist">
              <Sidebar.Item href="#" icon={IoIosStar}>
                My Wishlist
              </Sidebar.Item>
            </Link>
            <Link to="/sign-out">
              <Sidebar.Item href="#" icon={IoIosLogOut}>
                Sign Out
              </Sidebar.Item>
            </Link>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default ProfileSidebar;
