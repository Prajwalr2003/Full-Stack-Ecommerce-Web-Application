import { Button } from "flowbite-react";
import React, { useState } from "react";

function Category() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const category = [
    { categoryName: "Electronics" },
    { categoryName: "Fashion" },
    { categoryName: "Home Appliances" },
    { categoryName: "Books" },
    { categoryName: "Sports & Fitness" },
    { categoryName: "Toys & Games" },
  ];
  return (
    <div className="flex justify-center">
      <div className="overflow-x-auto whitespace-nowrap">
        <Button.Group className="m-4">
          <Button
            color={activeCategory === "All Products" ? "blue" : "gray"}
            onClick={() => setActiveCategory("All Products")}
          >
            All Products
          </Button>
          {category.map((item) => (
            <Button
              key={item.categoryName}
              color={activeCategory === item.categoryName ? "blue" : "gray"}
              onClick={() => setActiveCategory(item.categoryName)}
            >
              {item.categoryName}
            </Button>
          ))}
        </Button.Group>
      </div>
    </div>
  );
}

export default Category;
