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
  selectedGender: string; // Added selectedGender state
  setSelectedGender: (gender: string) => void; // Setter for selectedGender
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
  selectedGender: "", // Initialize selectedGender as an empty string
  setSelectedGender: (gender) => set({ selectedGender: gender }), // Setter for gender
}));

export { useStore, sizeOptions, colorOptions, styleOptions };
