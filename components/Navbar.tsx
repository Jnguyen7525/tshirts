import { useStore } from "@/store/store";

import React from "react";
import Filter from "./Filter";

function Navbar() {
  const selectedGender = useStore((state) => state.selectedGender); // Get selected gender from store
  const setSelectedGender = useStore((state) => state.setSelectedGender); // Access setter
  return (
    <div className="flex items-center justify-start sm:justify-between  px-5 py-1 my-5 -mx-5 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] text-sm">
      <div className="flex space-x-2 sm:space-x-5 mr-2">
        <button
          onClick={() => setSelectedGender("")}
          className={`cursor-pointer hover:opacity-80 bg-white rounded-sm px-3 py-[1px] ${
            selectedGender === "" ? "opacity-80 text-blue-500" : ""
          }`}
        >
          All
        </button>

        <button
          onClick={() => setSelectedGender("Men")}
          className={`cursor-pointer hover:opacity-80 bg-white rounded-sm px-3 py-[1px] ${
            selectedGender === "Men" ? "opacity-80 text-blue-500" : ""
          }`}
        >
          Men
        </button>

        {/* Women Button */}
        <button
          onClick={() => setSelectedGender("Women")}
          className={`cursor-pointer hover:opacity-80 bg-white rounded-sm px-3 py-[1px] ${
            selectedGender === "Women" ? "opacity-80 text-blue-500" : ""
          }`}
        >
          Women
        </button>
      </div>
      <div className=" z-40  -translate-x-8 sm:translate-0 flex items-center justify-end h-full  w-full">
        <Filter />
      </div>
    </div>
  );
}

export default Navbar;
