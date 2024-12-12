import { Sidebar } from "flowbite-react";
import { FaLocationDot } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { FaShoppingCart, FaComments } from "react-icons/fa";
import { IoIosStar, IoIosLogOut } from "react-icons/io";

const ProfileSidebar = () => {
  return (
    <div>
      <Sidebar aria-label="Profile Sidebar">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={MdManageAccounts}>
              Profile Information
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={FaLocationDot} labelColor="dark">
              Manage Addresses
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={FaShoppingCart} label="3">
              Orders
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={FaComments}>
              Reviews and Ratings
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={IoIosStar}>
              My Wishlist
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={IoIosLogOut}>
              Sign Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default ProfileSidebar;
