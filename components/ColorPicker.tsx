"use client";

import { productsData } from "@/products";
import { useStore } from "@/store/store";
import React from "react";

const ColorPicker = () => {
  const { selectedColors, setSelectedColors } = useStore();

  // Extract all unique colors from productsData
  const allColors = Array.from(
    new Map(
      productsData
        .flatMap((product) => product.color || []) // Combine all color arrays
        .map((color) => [color.color, color]) // Use Map to ensure uniqueness by "color" key
    ).values()
  );

  const handleColorClick = (color: { color: string; code: string }) => {
    setSelectedColors(
      selectedColors.some((c) => c.color === color.color)
        ? selectedColors.filter((c) => c.color !== color.color)
        : [...selectedColors, color]
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-9 sm:grid-cols-5 gap-1">
        {allColors.map((color) => (
          <button
            key={color.color}
            className={`w-8 h-8 rounded  cursor-pointer hover:opacity-80 ${
              selectedColors.some((c) => c.color === color.color)
                ? "border-blue-500  border-2"
                : "border-gray-500  border-1"
            }`}
            style={{ backgroundColor: color.code }}
            onClick={() => handleColorClick(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
