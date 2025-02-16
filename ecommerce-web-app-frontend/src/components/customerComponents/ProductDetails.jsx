import { Button } from "flowbite-react";

const ProductDetails = () => {
  return (
    <>
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
          <p className="text-sm text-green-500">109 ratings and 4 reviews</p>
        </span>
      </div>
      <p className="text-gray-600 my-2">Color</p>
      <div className="flex flex-wrap gap-4">
        <Button color="failure">Red</Button>
        <Button color="blue">Blue</Button>
        <Button color="success">Green</Button>
        <Button color="light" className="dark:bg-white dark:text-black">
          White
        </Button>
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

      <h5 className="mt-8 text-xl font-semibold my-2">Product Description</h5>
      <p className="max-w-3xl dark:text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quo
        dolorem adipisci doloribus quis sequi rem ad? Possimus dolorem eligendi
        ex, quod alias dolores ea nisi repellendus, dolor in doloremque.
        Aspernatur aperiam natus, porro obcaecati culpa illo repellendus
        accusantium modi ex delectus, iusto quo omnis itaque rem eligendi soluta
        voluptate?
      </p>
    </>
  );
};

export default ProductDetails;
