import { Card, Rating, Tabs, TextInput } from "flowbite-react";
import Filter from "../components/Filter";
import Category from "../components/Category";

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
      <div className="grid gap-4 grid-flow-col grid-rows-1 mt-8">
        <Filter />
        <div className="flex flex-wrap">
          {Array(6)
            .fill(null)
            .map((index) => {
              return (
                <Card className="max-w-sm mx-5 mb-5">
                  <img
                    alt="Apple Watch Series 7 in colors pink, silver, and black"
                    src="../../temp/shirt.jpg"
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <a href="#">
                      <p className="text-xs md:text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight
                        Sport
                      </p>
                    </a>
                    <div className="mb-5 mt-2.5 flex items-center">
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
                    <div className="flex items-center justify-between">
                      <span className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                        $599
                      </span>
                      <a
                        href="#"
                        className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </Card>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Home;
