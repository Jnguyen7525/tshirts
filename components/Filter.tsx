"use client";

import React, { useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { RxChevronDown } from "react-icons/rx";
import ColorPicker from "./ColorPicker";
import SizeSelector from "./SizePicker";
import StylePicker from "./StylePicker";

function Filter() {
  const [openFilter, setOpenFilter] = useState(false);
  const [openStyle, setOpenStyle] = useState(false);
  const [openSize, setOpenSize] = useState(false);
  const [openColor, setOpenColor] = useState(false);

  return (
    <div className="p-5 sm:w-60 flex flex-col space-y-5  rounded-sm font-semibold text-sm">
      <div
        className="flex justify-center space-x-5 items-center border-b p-3 cursor-pointer hover:opacity-80"
        onClick={() => setOpenFilter(!openFilter)}
      >
        {openFilter ? (
          <IoFilterOutline className="rotate-180 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] rounded-full text-3xl p-2" />
        ) : (
          <IoFilterOutline className=" bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] rounded-full text-3xl p-2" />
        )}
        <div>Filters</div>
        {openFilter ? (
          <RxChevronDown className="rotate-180 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] rounded-full text-3xl p-2" />
        ) : (
          <RxChevronDown className=" bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] rounded-full text-3xl p-2" />
        )}
      </div>

      <div className={`${openFilter ? "flex flex-col space-y-5" : "hidden"} `}>
        <div className="flex flex-col space-y-3 border-b p-3">
          <div
            className="flex justify-between cursor-pointer hover:opacity-80 "
            onClick={() => setOpenStyle(!openStyle)}
          >
            <div>Style</div>
            {openStyle ? (
              <RxChevronDown className="rotate-180 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] rounded-full text-3xl p-2" />
            ) : (
              <RxChevronDown className=" bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] rounded-full text-3xl p-2" />
            )}
          </div>
          {openStyle && <StylePicker />}
        </div>
        {/* <div className="flex justify-between cursor-pointer hover:opacity-80 border-b p-3">
          <div>Category</div>
          <RxChevronDown className="bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] rounded-full text-3xl p-2" />
        </div> */}
        <div className="flex flex-col space-y-3 border-b p-3">
          <div
            className="flex justify-between cursor-pointer hover:opacity-80 "
            onClick={() => setOpenColor(!openColor)}
          >
            <div>Colour</div>
            {openColor ? (
              <RxChevronDown className="rotate-180 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] rounded-full text-3xl p-2" />
            ) : (
              <RxChevronDown className=" bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] rounded-full text-3xl p-2" />
            )}
          </div>
          {openColor && <ColorPicker />}
        </div>
        <div className="flex flex-col space-y-3 border-b p-3">
          <div
            className="flex justify-between cursor-pointer hover:opacity-80 "
            onClick={() => setOpenSize(!openSize)}
          >
            <div>Size</div>
            {openSize ? (
              <RxChevronDown className="rotate-180 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] rounded-full text-3xl p-2" />
            ) : (
              <RxChevronDown className=" bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] rounded-full text-3xl p-2" />
            )}
          </div>
          {openSize && <SizeSelector />}
        </div>
        {/* <div className="flex justify-between cursor-pointer hover:opacity-80 border-b p-3">
          <div>Men</div>
          <div>
            <ToggleBar />
          </div>
          <div>Women</div>
        </div> */}
        {/* <div className="flex justify-between cursor-pointer hover:opacity-80 border-b p-3">
          <div>In stock only</div>
          <RxChevronDown className="bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] rounded-full text-3xl p-2" />
        </div> */}
      </div>
    </div>
  );
}

export default Filter;
