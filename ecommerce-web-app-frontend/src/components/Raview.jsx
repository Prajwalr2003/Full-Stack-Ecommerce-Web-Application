import { Banner, Button } from "flowbite-react";
import { BiLike, BiDislike } from "react-icons/bi";

function Review() {
  return (
    <>
      <div className="w-full border-b border-gray-600 bg-gray-50 p-4 sm:p-4 md:p-4 dark:border-gray-200 dark:bg-gray-700 mb-4">
        <div className="flex sm:flex-row justify-center items-center">
          <div className="rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
            <p>4.0</p>
          </div>
          <p className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left text-sm  max-w-full sm:max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            odio enim ea porro nemo sequi voluptates blanditiis recusandae iusto
            obcaecati.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 sm:gap-0">
          <div className="mt-2">
            <p className="text-base sm:text-lg font-medium">Prajwal Rangari</p>
            <p className="text-slate-300 text-sm sm:text-base">24 Nov 2025</p>
          </div>
          <div className="flex gap-2">
            <Button color="gray" className="flex items-center">
              <BiLike className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <p className="text-sm sm:text-base">101</p>
            </Button>
            <Button color="gray" className="flex items-center">
              <BiDislike className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <p className="text-sm sm:text-base">10</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
