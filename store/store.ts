// import { create } from "zustand";

// // Define the types for Size, Color, and Style options
// type SizeOption = string;

// type ColorOption = {
//   color: string;
//   code: string;
// };

// type StyleOption = string;

// // Define the Zustand store state
// type StoreState = {
//   selectedSize: SizeOption | null;
//   setSelectedSize: (size: SizeOption) => void;
//   selectedColor: ColorOption | null;
//   setSelectedColor: (color: ColorOption) => void;
//   selectedStyle: StyleOption | null;
//   setSelectedStyle: (style: StyleOption) => void;
// };

// // Options for sizes, colors, and styles
// const sizeOptions: SizeOption[] = [
//   "3XS",
//   "2XS",
//   "XS",
//   "S",
//   "M",
//   "L",
//   "XL",
//   "2XL",
//   "3XL",
// ];

// const colorOptions: ColorOption[] = [
//   { color: "Black", code: "#090909" },
//   { color: "Charcoal", code: "#404040" },
//   { color: "Soil", code: "#563c33" },
//   { color: "Chili", code: "#d52213" },
//   { color: "Toffee", code: "#6e5242" },
//   { color: "Peanut", code: "#7f6a53" },
//   { color: "Burnt Orange", code: "#cd5e38" },
//   { color: "Rust", code: "#b57648" },
//   { color: "Orange", code: "#d1773b" },
//   { color: "Coral", code: "#d68785" },
//   { color: "Coco", code: "#c6b5a7" },
//   { color: "Taupe", code: "#d6c6b4" },
//   { color: "Sand", code: "#dcd3cc" },
//   { color: "Light Pink", code: "#edd9d9" },
//   { color: "Bone", code: "#e2dfdc" },
//   { color: "Bleach", code: "#fdfafa" },
//   { color: "Grey", code: "#999996" },
//   { color: "Mustard", code: "#dda032" },
//   { color: "Beige", code: "#d1c6ae" },
//   { color: "Mellow", code: "#eddea4" },
//   { color: "Olive", code: "#48542e" },
//   { color: "Grass", code: "#6e8c4b" },
//   { color: "Light Grey", code: "#c0c1bd" },
//   { color: "Pine", code: "#243f33" },
//   { color: "Powder", code: "#c5d1d0" },
//   { color: "Yale Blue", code: "#175387" },
//   { color: "Cyan", code: "#237d96" },
//   { color: "Dark Grey", code: "#787979" },
//   { color: "Navy", code: "#343d55" },
//   { color: "Royal", code: "#4e59be" },
//   { color: "Denim", code: "#566e99" },
//   { color: "Violet", code: "#504372" },
//   { color: "Burgundy", code: "#4c1c29" },
//   { color: "Hot Pink", code: "#f66274" },
//   { color: "Pink", code: "#eda6b4" },
//   { color: "Lilac", code: "#ddabc8" },
// ];

// const styleOptions: StyleOption[] = [
//   "T-Shirt",
//   "Oversized T-Shirt",
//   "Cropped",
//   "Tank Top",
//   "Sweater",
//   "Hoodie",
// ];

// // Create the Zustand store
// const useStore = create<StoreState>((set) => ({
//   selectedSize: null,
//   setSelectedSize: (size: string) => set({ selectedSize: size }),
//   selectedColor: null,
//   setSelectedColor: (color: { color: string; code: string }) =>
//     set({ selectedColor: color }),
//   selectedStyle: null,
//   setSelectedStyle: (style: string) => set({ selectedStyle: style }),
// }));

// export { useStore, sizeOptions, colorOptions, styleOptions };

"use client";

import { create } from "zustand";

// Define types
type SizeOption = string;

type ColorOption = {
  color: string;
  code: string;
};

type StyleOption = string;

type StoreState = {
  selectedSizes: SizeOption[];
  setSelectedSizes: (sizes: SizeOption[]) => void;
  selectedColors: ColorOption[];
  setSelectedColors: (colors: ColorOption[]) => void;
  selectedStyles: StyleOption[];
  setSelectedStyles: (styles: StyleOption[]) => void;
};

// Options for each category
const sizeOptions: SizeOption[] = [
  "3XS",
  "2XS",
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "2XL",
  "3XL",
];

const colorOptions: ColorOption[] = [
  { color: "Black", code: "#090909" },
  { color: "Charcoal", code: "#404040" },
  { color: "Soil", code: "#563c33" },
  { color: "Chili", code: "#d52213" },
  { color: "Toffee", code: "#6e5242" },
  { color: "Peanut", code: "#7f6a53" },
];

const styleOptions: StyleOption[] = [
  "T-Shirt",
  "Oversized T-Shirt",
  "Cropped",
  "Tank Top",
  "Sweater",
  "Hoodie",
];

// Create Zustand store
const useStore = create<StoreState>((set) => ({
  selectedSizes: [],
  setSelectedSizes: (sizes) => set({ selectedSizes: sizes }),
  selectedColors: [],
  setSelectedColors: (colors) => set({ selectedColors: colors }),
  selectedStyles: [],
  setSelectedStyles: (styles) => set({ selectedStyles: styles }),
}));

export { useStore, sizeOptions, colorOptions, styleOptions };
