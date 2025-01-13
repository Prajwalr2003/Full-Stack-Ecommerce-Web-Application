import React from "react";

function Container({ children }) {
  return (
    <div className="pt-16 w-auto lg:w-[86%] mx-auto dark:bg-[#000000] dark:text-white">
      {children}
    </div>
  );
}

export default Container;
