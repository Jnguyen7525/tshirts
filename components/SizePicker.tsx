"use client";

import { useStore, sizeOptions } from "@/store/store";
import React, { useState } from "react";

// Define the type for each size option
type SizeOption = {
  label: string;
  value: number;
};

// const sizes: SizeOption[] = [
//   { label: "3XS", value: 59 },
//   { label: "2XS", value: 59 },
//   { label: "XS", value: 59 },
//   { label: "S", value: 75 },
//   { label: "M", value: 75 },
//   { label: "L", value: 75 },
//   { label: "XL", value: 75 },
//   { label: "2XL", value: 70 },
//   { label: "3XL", value: 70 },
// ];

const sizes: string[] = ["3XS", "2XS", "XS", "S", "M", "L", "XL", "2XL", "3XL"];

const SizeSelector: React.FC = () => {
  const { selectedSizes, setSelectedSizes } = useStore();

  const handleCheckboxChange = (size: string) => {
    setSelectedSizes(
      selectedSizes.includes(size)
        ? selectedSizes.filter((s) => s !== size)
        : [...selectedSizes, size]
    );
  };

  return (
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {sizeOptions.map((size) => (
          <label key={size} className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedSizes.includes(size)}
              onChange={() => handleCheckboxChange(size)}
            />
            {size}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
