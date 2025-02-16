import { Button, Select, TextInput } from "flowbite-react";
import { FaFilter } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const FilterDrawer = ({ isOpen, handleClose }) => {
  return (
    <>
      <div
        className={`top-16 bottom-40 min-h-screen w-80 bg-gray-50 rounded-lg shadow-xl border-r overflow-y-auto z-40 dark:border-none
          dark:bg-slate-900 dark:text-white
          ${isOpen ? "fixed" : "hidden"}`}
      >
        <div className="flex p-4 justify-between gap-2 border-b border-gray-200 mt-8">
          <div className="flex items-center gap-2">
            <FaFilter className="h-5 w-5 text-gray-600 dark:text-white" />
            <p className="text-lg font-semibold text-gray-700 dark:text-white">
              Filters
            </p>
          </div>
          <IoMdCloseCircle
            size={30}
            className="cursor-pointer"
            onClick={handleClose}
          />
        </div>

        <div className="px-6 py-4 space-y-6">
          {/* Brand */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2 dark:text-white">
              Brand
            </p>
            <Select id="countries" required>
              <option>Nike</option>
              <option>Puma</option>
              <option>Adidas</option>
              <option>Jockey</option>
            </Select>
          </div>

          {/* Price */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2 dark:text-white">
              Price
            </p>
            <div className="flex justify-between items-center">
              <TextInput
                id="quantity"
                type="text"
                value={0}
                required
                shadow
                className="w-28"
                readOnly
              />
              <p>-</p>
              <TextInput
                id="quantity"
                type="text"
                value={0}
                required
                shadow
                className="w-28"
                readOnly
              />
            </div>
          </div>

          {/* Color */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2 dark:text-white">
              Color
            </p>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 bg-red-500 rounded-full cursor-pointer"></div>
              <div className="h-6 w-6 bg-blue-500 rounded-full cursor-pointer"></div>
              <div className="h-6 w-6 bg-green-500 rounded-full cursor-pointer"></div>
              <div className="h-6 w-6 bg-yellow-500 rounded-full cursor-pointer"></div>
            </div>
          </div>

          {/* Size */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2 dark:text-white">
              Size
            </p>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 hover:bg-blue-500 hover:text-white transition duration-200 dark:text-white"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Gender */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2 dark:text-white">
              Gender
            </p>
            <div className="flex gap-3">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  className="text-blue-500 focus:ring-blue-300"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-white">
                  Male
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  className="text-blue-500 focus:ring-blue-300"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-white">
                  Female
                </span>
              </label>
            </div>
          </div>

          <div className="flex gap-4 justify-center items-center ">
            <Button gradientDuoTone="greenToBlue">Apply</Button>
            <Button gradientDuoTone="pinkToOrange">Clear</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterDrawer;
