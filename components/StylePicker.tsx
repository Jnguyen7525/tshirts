import { useStore } from "@/store/store";
import React from "react";

// Define the type for each style option
type StyleOption = string;

const styles: StyleOption[] = [
  "T-Shirt",
  "Oversized T-Shirt",
  "Cropped",
  "Tank Top",
  "Sweater",
  "Hoodie",
];

const StylePicker: React.FC = () => {
  const { selectedStyles, setSelectedStyles } = useStore();

  const handleCheckboxChange = (style: string) => {
    setSelectedStyles(
      selectedStyles.includes(style)
        ? selectedStyles.filter((s) => s !== style)
        : [...selectedStyles, style]
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Select Styles</h2>
      <div className="flex flex-col gap-2">
        {styles.map((style) => (
          <label key={style} className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedStyles.includes(style)}
              onChange={() => handleCheckboxChange(style)}
            />
            {style}
          </label>
        ))}
      </div>
    </div>
  );
};

export default StylePicker;
