import React, { useEffect, useState } from "react";
import { Avatar, Dropdown, Navbar, Tabs } from "flowbite-react";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdLogin, MdDarkMode, MdOutlineLightMode } from "react-icons/md";

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
        <Navbar.Brand href="/home">
          <img
            src="../../temp/logo.png"
            className="mr-3 h-6 sm:h-9"
            alt="E-COMMERCE Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            E-COMMERCE
          </span>
        </Navbar.Brand>
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
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Item>Cart</Dropdown.Item>
            <Dropdown.Item>Orders</Dropdown.Item>
            <Dropdown.Item>Wishlist</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/home" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/cart">
            <IoCartOutline className="inline-block mr-2" size={24} />
            Cart
          </Navbar.Link>
          <Navbar.Link href="/become-a-seller">
            <FaRegHeart className="inline-block mr-2" size={20} />
            Become a seller
          </Navbar.Link>
          <Navbar.Link href="/login">
            <MdLogin className="inline-block mr-2" size={20} />
            Login
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
