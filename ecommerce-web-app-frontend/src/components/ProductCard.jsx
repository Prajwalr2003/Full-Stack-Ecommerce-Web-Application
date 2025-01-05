import { Button, Rating } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const navigate = useNavigate();
  const handleNavigation = (link) => {
    navigate(link);
  };
  return (
    <>
      <div className="dark:bg-slate-900 flex flex-col justify-center items-center shadow-lg rounded-md w-72 h-[440px] transition-transform duration-200 border dark:border-0 hover:scale-105">
        <div className="overflow-hidden">
          <img
            alt="Apple Watch Series 7"
            src="../../temp/shirt.jpg"
            className="w-52 h-52 object-cover"
          />
        </div>
        <div onClick={() => handleNavigation("/product-view")}>
          <p className="text-md font-semibold tracking-tight text-gray-900 dark:text-white w-56 mt-4 text-center cursor-pointer">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </p>
        </div>
        <div className="mb-5 mt-2.5 flex justify-start">
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
          </Rating>
          <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
            4.0
          </span>
        </div>
        <div className="flex items-center gap-4 justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <Button color="dark" onClick={() => handleNavigation("/cart")}>
            Add to cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
