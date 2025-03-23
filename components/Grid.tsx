import Link from "next/link";
import React from "react";
import { productsData } from "@/products";
import { useStore } from "@/store/store";

interface Product {
  id: string; // Unique identifier for each product
  image: string; // URL of the product image
  description: string[]; // Description of the product
  colors?: { color: string; code: string }[];
  sizes?: string[];
  info: string; // Additional information about the product
  style: string[];
  gender: string;
  name: string;
}

const Grid: React.FC = () => {
  // Zustand states
  const selectedSizes = useStore((state) => state.selectedSizes);
  const selectedColors = useStore((state) => state.selectedColors);
  const selectedStyles = useStore((state) => state.selectedStyles);
  const selectedGender = useStore((state) => state.selectedGender);

  // Filtering Logic
  const filteredProducts = productsData.filter((product) => {
    // Match gender if selected, otherwise allow all
    const matchesGender = selectedGender
      ? product.gender === selectedGender
      : true;

    // Match at least one selected style if styles are selected
    const matchesStyle = selectedStyles.length
      ? product.style.some((style) => selectedStyles.includes(style))
      : true;

    // Match at least one selected size if sizes are selected
    const matchesSize = selectedSizes.length
      ? product.size.some((size) => selectedSizes.includes(size))
      : true;

    // Match at least one selected color if colors are selected
    const matchesColor = selectedColors.length
      ? product.color.some((colorOption) =>
          selectedColors.some(
            (selectedColor) => selectedColor.color === colorOption.color
          )
        )
      : true;

    // Return true if the product matches all filters
    return matchesGender && matchesStyle && matchesSize && matchesColor;
  });
  return (
    <div className="grid gap-0  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-sm overflow-hidden ">
      {filteredProducts.map((product) => (
        <Link
          href={`/product/${product.id}`}
          key={product.id}
          className="bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] p-4 flex flex-col items-center cursor-pointer hover:opacity-80"
        >
          <img
            src={product.image}
            alt={`Product ${product.id}`}
            className="w-full h-66 object-cover rounded-md mb-3"
          />
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.info}</p>
        </Link>
      ))}
    </div>
  );
};

export default Grid;
