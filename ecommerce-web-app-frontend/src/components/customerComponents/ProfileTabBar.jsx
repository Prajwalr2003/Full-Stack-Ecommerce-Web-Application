import { Button } from "flowbite-react";
import { FaLocationDot } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { FaShoppingCart, FaComments } from "react-icons/fa";
import { IoIosStar, IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ProfileTabBar = () => {
  const navigate = useNavigate();
  const handleNavigation = (link) => {
    navigate(link);
  };
  return (
    <>
      <div className="pt-8">
        <Button.Group>
          <Button color="gray" onClick={() => handleNavigation("/profile")}>
            <MdManageAccounts size={30} />
          </Button>
          <Button
            color="gray"
            onClick={() => handleNavigation("/manage-addresses")}
          >
            <FaLocationDot size={30} />
          </Button>
          <Button color="gray" onClick={() => handleNavigation("/orders")}>
            <FaShoppingCart size={30} />
          </Button>
          <Button
            color="gray"
            onClick={() => handleNavigation("/product-view")}
          >
            <FaComments size={30} />
          </Button>
          <Button color="gray" onClick={() => handleNavigation("/wishlist")}>
            <IoIosStar size={30} />
          </Button>
          <Button color="gray" onClick={() => handleNavigation("/sign-out")}>
            <IoIosLogOut size={30} />
          </Button>
        </Button.Group>
      </div>
    </>
  );
};

export default ProfileTabBar;
