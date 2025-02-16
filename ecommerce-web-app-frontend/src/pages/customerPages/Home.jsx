import { TextInput } from "flowbite-react";
import Filters from "../../components/customerComponents/Filters";
import Category from "../../components/customerComponents/Category";
import ProductCard from "../../components/customerComponents/ProductCard";
import { useAuth } from "../../context/Auth";

function Home() {
  const { user, isLoggedIn } = useAuth();
  console.log(user, isLoggedIn);
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
        {/* <p className="text-2xl mt-40 font-bold text-center">
          Sorry, No products are available for purchase !!!
        </p> */}
        {Array(3)
          .fill(null)
          .map((index, num) => {
            return <ProductCard key={num} defaultValue></ProductCard>;
          })}
      </div>
    </>
  );
}

export default Home;
