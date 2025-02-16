import { Button } from "flowbite-react";
import React from "react";
import { IoIosFlash } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const AddBuyBtn = () => {
  return (
    <div className="flex gap-4 justify-center mt-4">
      <Button color="gray">
        <IoCartOutline className="mr-3 h-4 w-4" /> Add to Cart
      </Button>
      <Button color="gray">
        <IoIosFlash className="mr-3 h-4 w-4" />
        Buy Now
      </Button>
    </div>
  );
};

export default AddBuyBtn;
