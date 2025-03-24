import { useStore } from "@/store/store";
import React from "react";

// Define the type for each style option
type StyleOption = string;

const styles: StyleOption[] = [
  "T-Shirt",
  "Oversized",
  "Cropped",
  // "Tank Top",
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
    <div className="p-1">
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-1">
        {styles.map((style) => (
          <label key={style} className="flex items-center">
            <input
              type="checkbox"
              className="mr-1"
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
