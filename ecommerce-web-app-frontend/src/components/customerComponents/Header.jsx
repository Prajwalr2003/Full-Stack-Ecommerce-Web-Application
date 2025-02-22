import React, { useEffect, useState } from "react";
import { Avatar, Dropdown, Navbar, Tabs } from "flowbite-react";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdLogin, MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";

function Header() {
  const { isLoggedIn, user } = useAuth();

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme !== "undefined" ? savedTheme : "light";
  });

  const changeTheme = (themeMode) => {
    setTheme(themeMode);
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navigate = useNavigate();
  const handleNavigation = (link) => {
    navigate(link);
  };

  return (
    <>
      <Navbar className="fixed w-full top-0 left-0 z-50 p-4 shadow-lg dark:bg-slate-900">
        <Navbar.Brand
          onClick={() => handleNavigation("/home")}
          className="cursor-pointer"
        >
          <img
            src="../../temp/logo.png"
            className="mr-3 h-6 sm:h-9"
            alt="E-COMMERCE Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            E-COMMERCE
          </span>
        </Navbar.Brand>
        <div className="flex justify-center items-center gap-5 md:order-2">
          <div className="cursor-pointer">
            {/* Theme Toggle */}
            {theme === "light" ? (
              <MdDarkMode
                className="cursor-pointer text-black"
                size={24}
                onClick={() => changeTheme("dark")}
              />
            ) : (
              <MdOutlineLightMode
                className="cursor-pointer text-white"
                size={24}
                onClick={() => changeTheme("light")}
              />
            )}
          </div>
          {isLoggedIn && (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="../../temp/profileimage.jpg"
                  rounded
                />
              }
              className="cursor-pointer"
            >
              <Dropdown.Header>
                <span className="block text-sm">Prajwal Rangari</span>
                <span className="block truncate text-sm font-medium">
                  prajwalrangari@gmail.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item onClick={() => handleNavigation("/profile")}>
                Profile
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleNavigation("/cart")}>
                Cart
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleNavigation("/orders")}>
                Orders
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleNavigation("/wishlist")}>
                Wishlist
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => handleNavigation("/sign-out")}>
                Sign out
              </Dropdown.Item>
            </Dropdown>
          )}
          {!isLoggedIn && (
            <a
              onClick={() => handleNavigation("/login")}
              className="cursor-pointer text-gray-700 font-semibold dark:text-white"
            >
              <MdLogin className="inline-block mr-2" size={20} />
              Login
            </a>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            active
            onClick={() => handleNavigation("/home")}
            className="cursor-pointer"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            onClick={() => handleNavigation("/cart")}
            className="cursor-pointer"
          >
            <IoCartOutline className="inline-block mr-2" size={24} />
            Cart
          </Navbar.Link>
          <Navbar.Link
            onClick={() => handleNavigation("/seller/registration")}
            className="cursor-pointer"
          >
            <FaRegHeart className="inline-block mr-2" size={20} />
            Become a seller
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
