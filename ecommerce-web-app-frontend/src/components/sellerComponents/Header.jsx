import { Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

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

  const handleNavigation = (link) => {
    navigate(link);
  };

  return (
    <Navbar className="shadow-lg fixed justify-between w-full z-40 dark:bg-slate-900">
      <Navbar.Brand>
        <img
          src="../temp/logo.png"
          className="h-6 sm:h-9"
          alt="Firewall Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          E-COMMERCE
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
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
        <Navbar.Link
          href="#"
          className="flex gap-1 justify-center items-center"
          onClick={() => handleNavigation("/login")}
        >
          <IoMdLogOut size={20} />
          Logout
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
