"use client";

import { useStore, sizeOptions } from "@/store/store";
import React from "react";

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
      <div className="grid grid-cols-3 gap-4">
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
