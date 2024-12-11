import { Button, Carousel } from "flowbite-react";
import { IoIosFlash } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const ProductCarousel = () => {
  return (
    <>
      <Carousel>
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
      <div className="flex gap-4 justify-center mt-4">
        <Button color="gray">
          <IoCartOutline className="mr-3 h-4 w-4" /> Add to Cart
        </Button>
        <Button color="gray">
          <IoIosFlash className="mr-3 h-4 w-4" />
          Buy Now
        </Button>
      </div>
    </>
  );
};

export default ProductCarousel;
