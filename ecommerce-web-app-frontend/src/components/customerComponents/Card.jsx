import { Button } from "flowbite-react";
import React from "react";

function Card() {
  const product = {
    name: "Classic Leather Sneakers",
    price: 120,
    description:
      "Step into timeless style with our Classic Leather Sneakers. Designed for comfort and durability.",
    images: [
      {
        src: "../temp/shirt.jpg",
        alt: "A pair of white leather sneakers on a plain background",
      },
    ],
  };
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden">
      {/* Product Image */}
      <img
        src={product.images[0].src}
        alt={product.images[0].alt}
        className="w-full h-48 object-cover"
      />
      {/* Product Info */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900 truncate">
          {product.name}
        </h2>
        <p className="text-gray-600 text-sm mt-2">{product.description}</p>
        <p className="text-indigo-600 font-bold text-xl mt-4">
          ${product.price}
        </p>
      </div>
      {/* Button */}
      <div className="p-4 border-t border-gray-200">
        <Button>View Details</Button>
      </div>
    </div>
  );
}

export default Card;
