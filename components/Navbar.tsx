import { useStore } from "@/store/store";

import React from "react";

function Navbar() {
  const selectedGender = useStore((state) => state.selectedGender); // Get selected gender from store
  const setSelectedGender = useStore((state) => state.setSelectedGender); // Access setter
  return (
    <div className="flex items-center justify-center space-x-10 px-5 py-3 -mx-5 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] text-sm">
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
  );
}

export default Navbar;
