"use client";

import React, { useState } from "react";
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
    <div className="w-48 sm:w-72 flex flex-col space-y-5 translate-y-2 rounded-sm font-semibold text-sm relative ">
      <div
        className="flex justify-center space-x-5 items-center cursor-pointer hover:opacity-80"
        onClick={() => setOpenFilter(!openFilter)}
      >
        <div>Filters</div>
        {openFilter ? (
          <RxChevronDown className="rotate-180  rounded-full text-3xl p-2" />
        ) : (
          <RxChevronDown className="  rounded-full text-3xl p-2" />
        )}
      </div>

      <div
        className={`${
          openFilter
            ? "flex flex-col space-y-5 absolute top-12 left-0 bg-white w-full  p-1  sm:p-5 rounded-sm "
            : "hidden "
        } `}
      >
        <div className="flex flex-col space-y-3 border-b p-1 sm:p-3 ">
          <div
            className="flex justify-between cursor-pointer hover:opacity-80 "
            onClick={() => setOpenStyle(!openStyle)}
          >
            <div>Style</div>
            {openStyle ? (
              <RxChevronDown className="rotate-180  rounded-full text-3xl p-2" />
            ) : (
              <RxChevronDown className="  rounded-full text-3xl p-2" />
            )}
          </div>
          {openStyle && <StylePicker />}
        </div>

        <div className="flex flex-col space-y-3 border-b p-1 sm:p-3 ">
          <div
            className="flex justify-between cursor-pointer hover:opacity-80 "
            onClick={() => setOpenColor(!openColor)}
          >
            <div>Colour</div>
            {openColor ? (
              <RxChevronDown className="rotate-180  rounded-full text-3xl p-2" />
            ) : (
              <RxChevronDown className="  rounded-full text-3xl p-2" />
            )}
          </div>
          {openColor && <ColorPicker />}
        </div>
        <div className="flex flex-col space-y-3  p-1 sm:p-3 ">
          <div
            className="flex justify-between cursor-pointer hover:opacity-80 "
            onClick={() => setOpenSize(!openSize)}
          >
            <div>Size</div>
            {openSize ? (
              <RxChevronDown className="rotate-180  rounded-full text-3xl p-2" />
            ) : (
              <RxChevronDown className="  rounded-full text-3xl p-2" />
            )}
          </div>
          {openSize && <SizeSelector />}
        </div>
      </div>
    </div>
  );
}

export default Filter;
