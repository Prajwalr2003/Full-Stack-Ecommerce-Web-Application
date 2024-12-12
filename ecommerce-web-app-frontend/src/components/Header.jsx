import React, { useEffect, useState } from "react";
import { Avatar, Dropdown, Navbar, Tabs } from "flowbite-react";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdLogin, MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
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

  return (
    <>
      <Navbar className="fixed w-full top-0 left-0 z-50 p-4 shadow-lg">
        <Link to="/home">
          <Navbar.Brand>
            <img
              src="../../temp/logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="E-COMMERCE Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              E-COMMERCE
            </span>
          </Navbar.Brand>
        </Link>
        <div className="flex md:order-2">
          <div className="mt-2 mr-5">
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
          >
            <Dropdown.Header>
              <span className="block text-sm">Prajwal Rangari</span>
              <span className="block truncate text-sm font-medium">
                prajwalrangari@gmail.com
              </span>
            </Dropdown.Header>
            <Link to="/profile">
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Link to="/cart">
              <Dropdown.Item>Cart</Dropdown.Item>
            </Link>
            <Link to="/orders">
              <Dropdown.Item>Orders</Dropdown.Item>
            </Link>
            <Link to="/wishlist">
              <Dropdown.Item>Wishlist</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to="/home">
            <Navbar.Link active>Home</Navbar.Link>
          </Link>
          <Link to="/cart">
            <Navbar.Link>
              <IoCartOutline className="inline-block mr-2" size={24} />
              Cart
            </Navbar.Link>
          </Link>
          <Link to="/become-a-seller">
            <Navbar.Link>
              <FaRegHeart className="inline-block mr-2" size={20} />
              Become a seller
            </Navbar.Link>
          </Link>
          <Link to="/login">
            <Navbar.Link href="/login">
              <MdLogin className="inline-block mr-2" size={20} />
              Login
            </Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
