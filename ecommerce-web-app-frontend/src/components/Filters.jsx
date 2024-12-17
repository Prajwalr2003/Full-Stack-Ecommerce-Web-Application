import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import { FaFilter } from "react-icons/fa6";
import FilterDrawer from "./FilterDrawer";

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <div className={`${isOpen ? "hidden" : ""}`}>
        <Button
          color="gray"
          className="bg-transparent fixed rounded-none rounded-br-lg rounded-tr-lg p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaFilter className="h-5 w-5" />
        </Button>
      </div>
      <FilterDrawer isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};

export default Filters;
