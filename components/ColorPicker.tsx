"use client";

import { useStore } from "@/store/store";
import React from "react";

const colorOptions = [
  { color: "Black", code: "#0b0b0b" },
  { color: "Military Green", code: "#6a6c54" },
  { color: "Storm", code: "#746e72" },
  { color: "Peach", code: "#f8bc9f" },
];

const ColorPicker = () => {
  const { selectedColors, setSelectedColors } = useStore();

  const handleColorClick = (color: { color: string; code: string }) => {
    setSelectedColors(
      selectedColors.some((c) => c.color === color.color)
        ? selectedColors.filter((c) => c.color !== color.color)
        : [...selectedColors, color]
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 gap-4">
        {colorOptions.map((color) => (
          <button
            key={color.color}
            className={`w-12 h-12 rounded border-2 ${
              selectedColors.some((c) => c.color === color.color)
                ? "border-black"
                : "border-transparent"
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
