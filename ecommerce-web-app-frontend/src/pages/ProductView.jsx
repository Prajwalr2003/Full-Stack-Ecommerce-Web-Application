import { Breadcrumb, Button, Carousel } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { IoIosFlash } from "react-icons/io";
import Review from "../components/Raview";

function ProductView() {
  return (
    <>
      <div className="pt-20 mt-2 md:pl-10">
        <Breadcrumb className="p-4">
          <Breadcrumb.Item href="#" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
          <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="lg:flex md:flex-wrap">
        <div className="lg:w-[600px] md:w-full h-[500px] p-4 pb-20 md:pl-14">
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
        </div>
        <div className="pt-3 lg:mx-12 md:mx-4 sm:mx-2 p-3">
          <p className="text-gray-600">Brand</p>
          <h5 id="title" className="lg:text-2xl lg:p-0 md:p-2 md:text-xl">
            Men Printed Polo Neck Polyester Grey T-Shirt
          </h5>
          <p className="text-xl mt-3 text-green-500">Special Price</p>
          <span className="block">
            <p className="inline-block text-2xl">$100</p>
            <p className="inline-block mx-4 text-lg">75% off</p>
          </span>
          <div className="flex my-8">
            <span className="mt-1 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              <p>4.0</p>
            </span>
            <span className="mx-3 mt-1">
              <p className="text-sm text-green-500">
                109 ratings and 4 reviews
              </p>
            </span>
          </div>
          <p className="text-gray-600 my-2">Color</p>
          <div className="flex flex-wrap gap-4">
            <Button color="failure">Red</Button>
            <Button color="blue">Blue</Button>
            <Button color="success">Green</Button>
            <Button color="light">White</Button>
            <Button color="dark">Black</Button>
            <Button color="warning">Yellow</Button>
            <Button gradientMonochrome="pink">Pink</Button>
            <Button color="purple">Purple</Button>
          </div>
          <p className="text-gray-600 mt-8 my-2">Size</p>
          <div className="flex flex-wrap gap-4">
            <Button color="gray">S</Button>
            <Button color="gray">M</Button>
            <Button color="gray">L</Button>
            <Button color="gray">XL</Button>
            <Button color="gray">XLL</Button>
          </div>

          <h5 className="mt-8 text-xl font-semibold my-2">
            Product Description
          </h5>
          <p className="max-w-3xl dark:text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quo
            dolorem adipisci doloribus quis sequi rem ad? Possimus dolorem
            eligendi ex, quod alias dolores ea nisi repellendus, dolor in
            doloremque. Aspernatur aperiam natus, porro obcaecati culpa illo
            repellendus accusantium modi ex delectus, iusto quo omnis itaque rem
            eligendi soluta voluptate?
          </p>
          <h5 className="text-xl mt-8 my-2 font-semibold">
            Ratings and Reviews
          </h5>
          <Review></Review>
          <Review></Review>
          <Review></Review>
          <Review></Review>
          <Review></Review>
        </div>
      </div>
    </>
  );
}

export default ProductView;
