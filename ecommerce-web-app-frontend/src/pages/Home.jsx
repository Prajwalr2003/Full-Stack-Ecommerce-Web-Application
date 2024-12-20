import { TextInput } from "flowbite-react";
import Filters from "../components/Filters";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <>
      <Category />
      <div className="mt-2">
        <TextInput
          id="search"
          type="search"
          placeholder="Search Your Product"
          shadow
          className="w-[90%] mx-auto"
        />
      </div>
      <Filters />
      <div className="flex flex-wrap gap-4 justify-center py-8 min-h-[78vh]">
        {Array(8)
          .fill(null)
          .map((index) => {
            return <ProductCard></ProductCard>;
          })}
      </div>
    </>
  );
}

export default Home;
