"use client";

import Filter from "@/components/Filter";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { BsX } from "react-icons/bs";
import { useStore } from "@/store/store";

const productsData = [
  // mens
  {
    id: "1",
    image: "/mens/unisexpremiumtshirt/unisexpremiumtshirt.png",
    name: "T-Shirts",
    color: [
      { color: "Black", code: "#191919" },
      { color: "Charcoal", code: "#686a64" },
      { color: "Navy", code: "#1b1f25" },
      { color: "Natural", code: "#fff8e6" },
      { color: "White", code: "#ffffff" },
    ],
    size: ["S", "M", "L", "2XL", "3XL"],
    info: "Price: $17.50, Shipping: $4.69, Total: $35",
    description: [
      "100% combed cotton",
      "Marles color is 85% cotton and 15% viscose",
      "Fabric weight: 5.3 oz./yd.² (150.25 g/m²)",
      "Yarn diameter: 28 singles",
      "Pre-shrunk",
      "Regular fit",
      "Crew neck",
      "Side-seamed construction",
      "Double-needle topstitch on the sleeves and hem",
      "Ribbed collar",
      "Shoulder-to-shoulder taping",
      "Tear-away label",
      "Blank product sourced from Bangladesh",
    ],
    shipping: [{ Location: "United States", Delivery: "6–9 business days" }],
    gender: "Men",
    style: ["T-Shirt"],
  },
  {
    id: "2",
    image: "/mens/oversizedTShirt/oversizetshirt.png",
    name: "Oversized T-Shirts",
    color: [
      { color: "Black", code: "#191919" },
      { color: "White", code: "#ffffff" },
    ],
    size: ["L", "2XL", "3XL", "4XL"],
    info: "Price: $20.95, Shipping: $4.69, Total: $40",
    description: [
      "100% combed cotton",
      "Marles color is 85% cotton and 15% viscose",
      "Fabric weight: 5.3 oz./yd.² (150.25 g/m²)",
      "Yarn diameter: 28 singles",
      "Pre-shrunk",
      "Regular fit",
      "Crew neck",
      "Side-seamed construction",
      "Double-needle topstitch on the sleeves and hem",
      "Ribbed collar",
      "Shoulder-to-shoulder taping",
      "Tear-away label",
      "Blank product sourced from Bangladesh",
    ],
    shipping: [{ Location: "United States", Delivery: "6–9 business days" }],
    gender: "Men",
    style: ["Oversized", "T-Shirt"],
  },
  {
    id: "3",
    image:
      "/mens/unisexorganicoversizedsweatshirtstanleystella/unisexorganicoversizedsweatshirtstanleystella2.png",
    name: "Oversized Sweatshirts",
    color: [
      { color: "Black", code: "#0b0b0b" },
      { color: "White", code: "#ffffff" },
      { color: "Frendh Navy", code: "#071429" },
      { color: "Heather Grey", code: "#e5e5e1" },
    ],
    size: ["S", "M", "L", "XL"],
    info: "Price: $40.99, Shipping: $8.49, Total: $65",
    description: [
      "100% combed cotton",
      "Marles color is 85% cotton and 15% viscose",
      "Fabric weight: 5.3 oz./yd.² (150.25 g/m²)",
      "Yarn diameter: 28 singles",
      "Pre-shrunk",
      "Regular fit",
      "Crew neck",
      "Side-seamed construction",
      "Double-needle topstitch on the sleeves and hem",
      "Ribbed collar",
      "Shoulder-to-shoulder taping",
      "Tear-away label",
      "Blank product sourced from Bangladesh",
    ],
    shipping: [{ Location: "United States", Delivery: "6–9 business days" }],
    gender: "Men",
    style: ["Sweater, Oversized"],
  },
  {
    id: "4",
    image:
      "/mens/unisexorganicrelaxedhoodistanleystella/unisexorganicrelaxedhoodistanleystella6.png",
    name: "Relaxed Hoodie",
    color: [
      { color: "Black", code: "#0b0b0b" },
      { color: "White", code: "#ffffff" },
      { color: "Frendh Navy", code: "#071429" },
      { color: "Heather Grey", code: "#e5e5e1" },
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    info: "Price: $44.99, Shipping: $8.49, Total: $65",
    description: [
      "100% combed cotton",
      "Marles color is 85% cotton and 15% viscose",
      "Fabric weight: 5.3 oz./yd.² (150.25 g/m²)",
      "Yarn diameter: 28 singles",
      "Pre-shrunk",
      "Regular fit",
      "Crew neck",
      "Side-seamed construction",
      "Double-needle topstitch on the sleeves and hem",
      "Ribbed collar",
      "Shoulder-to-shoulder taping",
      "Tear-away label",
      "Blank product sourced from Bangladesh",
    ],
    shipping: [{ Location: "United States", Delivery: "6–9 business days" }],
    gender: "Men",
    style: ["Hoodie"],
  },
  {
    id: "5",
    image:
      "/mens/unisexorganicsweatshirtstanleystella/unisexorganicsweatshirtstanleystella2.png",
    name: "Sweatshirt",
    color: [
      { color: "Black", code: "#0b0b0b" },
      { color: "White", code: "#ffffff" },
      { color: "French Navy", code: "#071429" },
      { color: "Heather Grey", code: "#e5e5e1" },
      { color: "Desert Dust", code: "#dcccb4" },
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    info: "Price: $33.99, Shipping: $8.49, Total: $65",
    description: [
      "100% combed cotton",
      "Marles color is 85% cotton and 15% viscose",
      "Fabric weight: 5.3 oz./yd.² (150.25 g/m²)",
      "Yarn diameter: 28 singles",
      "Pre-shrunk",
      "Regular fit",
      "Crew neck",
      "Side-seamed construction",
      "Double-needle topstitch on the sleeves and hem",
      "Ribbed collar",
      "Shoulder-to-shoulder taping",
      "Tear-away label",
      "Blank product sourced from Bangladesh",
    ],
    shipping: [{ Location: "United States", Delivery: "6–9 business days" }],
    gender: "Men",
    style: ["Sweater"],
  },
  {
    id: "6",

    image:
      "/mens/classicfitknittedcrewnecksweater/classicfitknittedcrewnecksweater.png",
    name: "Classic Fit Knitted Crew Neck Sweater",
    color: [
      { color: "Black", code: "#090909" },
      { color: "Charcoal", code: "#404040" },
      { color: "Soil", code: "#563c33" },
      { color: "Chili", code: "#d52213" },
      { color: "Toffee", code: "#6e5242" },
      { color: "Peanut", code: "#7f6a53" },
      { color: "Burnt Orange", code: "#cd5e38" },
      { color: "Rust", code: "#b57648" },
      { color: "Orange", code: "#d1773b" },
      { color: "Coral", code: "#d68785" },
      { color: "Coco", code: "#c6b5a7" },
      { color: "Taupe", code: "#d6c6b4" },
      { color: "Sand", code: "#dcd3cc" },
      { color: "Light Pink", code: "#edd9d9" },
      { color: "Bone", code: "#e2dfdc" },
      { color: "Bleach", code: "#fdfafa" },
      { color: "Grey", code: "#999996" },
      { color: "Mustard", code: "#dda032" },
      { color: "Beige", code: "#d1c6ae" },
      { color: "Mellow", code: "#eddea4" },
      { color: "Olive", code: "#48542e" },
      { color: "Grass", code: "#6e8c4b" },
      { color: "Light Grey", code: "#c0c1bd" },
      { color: "Pine", code: "#243f33" },
      { color: "Powder", code: "#c5d1d0" },
      { color: "Yale Blue", code: "#175387" },
      { color: "Cyan", code: "#237d96" },
      { color: "Dark Grey", code: "#787979" },
      { color: "Navy", code: "#343d55" },
      { color: "Royal", code: "#4e59be" },
      { color: "Denim", code: "#566e99" },
      { color: "Violet", code: "#504372" },
      { color: "Burgundy", code: "#4c1c29" },
      { color: "Hot Pink", code: "#f66274" },
      { color: "Pink", code: "#eda6b4" },
      { color: "Lilac", code: "#ddabc8" },
    ],
    size: ["3XS", "2XS", "XS", "S", "M", "L", "2XL", "3XL"],
    info: "Price: $43, Shipping: $10.49, Total: $70",
    description: [
      "100% combed cotton",
      "Marles color is 85% cotton and 15% viscose",
      "Fabric weight: 5.3 oz./yd.² (150.25 g/m²)",
      "Yarn diameter: 28 singles",
      "Pre-shrunk",
      "Regular fit",
      "Crew neck",
      "Side-seamed construction",
      "Double-needle topstitch on the sleeves and hem",
      "Ribbed collar",
      "Shoulder-to-shoulder taping",
      "Tear-away label",
      "Blank product sourced from Bangladesh",
    ],
    shipping: [{ Location: "United States", Delivery: "6–9 business days" }],
    gender: "Men",
    style: ["Sweater"],
  },
  {
    id: "7",
    image: "/mens/unisexpremiumsweatshirt/unisexpremiumsweatshirt.png",
    name: "Sweatshirt",
    color: [
      { color: "Black", code: "#101010" },
      { color: "Navy Blazer", code: "#171f2c" },
      { color: "Charcoal Heather", code: "#3a3a38" },
      { color: "Team Royal", code: "#2d407d" },
      { color: "Vintage Black", code: "#43413D" },
      { color: "Forest Green", code: "#335231" },
      { color: "Team Red", code: "#FF2D41" },
      { color: "Dusty Rose", code: "#f59382" },
      { color: "Carbon Grey", code: "#b2afaa" },
      { color: "White", code: "#ffffff" },
      { color: "Bone", code: "#f5e8ce" },
    ],
    size: ["S", "M", "L", "XL", "2XL", "3XL"],
    info: "Price: $22.50, Shipping: $10.49, Total: $45",
    description: [
      "100% combed cotton",
      "Marles color is 85% cotton and 15% viscose",
      "Fabric weight: 5.3 oz./yd.² (150.25 g/m²)",
      "Yarn diameter: 28 singles",
      "Pre-shrunk",
      "Regular fit",
      "Crew neck",
      "Side-seamed construction",
      "Double-needle topstitch on the sleeves and hem",
      "Ribbed collar",
      "Shoulder-to-shoulder taping",
      "Tear-away label",
      "Blank product sourced from Bangladesh",
    ],
    shipping: [{ Location: "United States", Delivery: "6–9 business days" }],
    gender: "Men",
    style: ["Sweater"],
  },
  // womens
  {
    id: "8",
    image: "/women/alloverprintcroptop/alloverprintcroptop.png",
    name: "Crop Top",
    color: [{ color: "White", code: "#ffffff" }],
    size: ["XS", "S", "M", "L", "XL"],
    info: "Price: $17.95, Shipping: $3.99, Total: $30",
    description: [
      "100% combed cotton",
      "Marles color is 85% cotton and 15% viscose",
      "Fabric weight: 5.3 oz./yd.² (150.25 g/m²)",
      "Yarn diameter: 28 singles",
      "Pre-shrunk",
      "Regular fit",
      "Crew neck",
      "Side-seamed construction",
      "Double-needle topstitch on the sleeves and hem",
      "Ribbed collar",
      "Shoulder-to-shoulder taping",
      "Tear-away label",
      "Blank product sourced from Bangladesh",
    ],
    shipping: [{ Location: "United States", Delivery: "6–9 business days" }],
    gender: "Women",
    style: ["T-Shirt", "Cropped"],
  },
  {
    id: "9",
    image:
      "/women/womensclassicfitknittedcrewnecksweater/womensclassicfitknittedcrewnecksweater.png",
    name: "Classic Fit Knitted Crew Neck Sweater",
    color: [
      { color: "Black", code: "#090909" },
      { color: "Charcoal", code: "#404040" },
      { color: "Soil", code: "#563c33" },
      { color: "Chili", code: "#d52213" },
      { color: "Toffee", code: "#6e5242" },
      { color: "Peanut", code: "#7f6a53" },
      { color: "Burnt Orange", code: "#cd5e38" },
      { color: "Rust", code: "#b57648" },
      { color: "Orange", code: "#d1773b" },
      { color: "Coral", code: "#d68785" },
      { color: "Coco", code: "#c6b5a7" },
      { color: "Taupe", code: "#d6c6b4" },
      { color: "Sand", code: "#dcd3cc" },
      { color: "Light Pink", code: "#edd9d9" },
      { color: "Bone", code: "#e2dfdc" },
      { color: "Bleach", code: "#fdfafa" },
      { color: "Grey", code: "#999996" },
      { color: "Mustard", code: "#dda032" },
      { color: "Beige", code: "#d1c6ae" },
      { color: "Mellow", code: "#eddea4" },
      { color: "Olive", code: "#48542e" },
      { color: "Grass", code: "#6e8c4b" },
      { color: "Light Grey", code: "#c0c1bd" },
      { color: "Pine", code: "#243f33" },
      { color: "Powder", code: "#c5d1d0" },
      { color: "Yale Blue", code: "#175387" },
      { color: "Cyan", code: "#237d96" },
      { color: "Dark Grey", code: "#787979" },
      { color: "Navy", code: "#343d55" },
      { color: "Royal", code: "#4e59be" },
      { color: "Denim", code: "#566e99" },
      { color: "Violet", code: "#504372" },
      { color: "Burgundy", code: "#4c1c29" },
      { color: "Hot Pink", code: "#f66274" },
      { color: "Pink", code: "#eda6b4" },
      { color: "Lilac", code: "#ddabc8" },
    ],
    size: ["3XS", "2XS", "XS", "S", "M", "L", "2XL", "3XL"],
    info: "Price: $43, Shipping: $10.49, Total: $70",
    description: [
      "100% combed cotton",
      "Marles color is 85% cotton and 15% viscose",
      "Fabric weight: 5.3 oz./yd.² (150.25 g/m²)",
      "Yarn diameter: 28 singles",
      "Pre-shrunk",
      "Regular fit",
      "Crew neck",
      "Side-seamed construction",
      "Double-needle topstitch on the sleeves and hem",
      "Ribbed collar",
      "Shoulder-to-shoulder taping",
      "Tear-away label",
      "Blank product sourced from Bangladesh",
    ],
    shipping: [{ Location: "United States", Delivery: "6–9 business days" }],
    gender: "Women",
    style: ["Sweater"],
  },
  {
    id: "10",
    image:
      "/women/womenscroppedsweatshirtbellacanvas/womenscroppedsweatshirtbellacanvas2.png",
    name: "Cropped Sweatshirt",
    color: [
      { color: "Black", code: "#080808" },
      { color: "Mauve", code: "#ec978" },
      { color: "Dusty Blue", code: "#bed5cc" },
    ],
    size: ["S", "M", "L"],
    info: "Price: $32.95, Shipping: $8.49, Total: $55",
    description: [
      "100% combed cotton",
      "Marles color is 85% cotton and 15% viscose",
      "Fabric weight: 5.3 oz./yd.² (150.25 g/m²)",
      "Yarn diameter: 28 singles",
      "Pre-shrunk",
      "Regular fit",
      "Crew neck",
      "Side-seamed construction",
      "Double-needle topstitch on the sleeves and hem",
      "Ribbed collar",
      "Shoulder-to-shoulder taping",
      "Tear-away label",
      "Blank product sourced from Bangladesh",
    ],
    shipping: [{ Location: "United States", Delivery: "6–9 business days" }],
    gender: "Women",
    style: ["Sweater", "Cropped"],
  },
  {
    id: "11",
    image: "/women/womenscroptopas/womenscroptopas3.png",
    name: "Crop Top T-Shirt",
    color: [
      { color: "Black", code: "#151515" },
      { color: "Mineral", code: "#8fa7a6" },
      { color: "Hazy Pink", code: "#cba59b" },
      { color: "Bubblegum", code: "#ffc5d4" },
      { color: "Pale Pink", code: "#ffd4c5" },
      { color: "Bone", code: "#ebe0d2" },
      { color: "Orchid", code: "#fff2f4" },
      { color: "Natural", code: "#fffaed" },
      { color: "Ecru", code: "#fffbf2" },
      { color: "White", code: "#ffffff" },
    ],
    size: ["XS", "S", "M", "L", "XL"],
    info: "Price: $17.95, Shipping: $4.69, Total: $30",
    description: [
      "100% combed cotton",
      "Marles color is 85% cotton and 15% viscose",
      "Fabric weight: 5.3 oz./yd.² (150.25 g/m²)",
      "Yarn diameter: 28 singles",
      "Pre-shrunk",
      "Regular fit",
      "Crew neck",
      "Side-seamed construction",
      "Double-needle topstitch on the sleeves and hem",
      "Ribbed collar",
      "Shoulder-to-shoulder taping",
      "Tear-away label",
      "Blank product sourced from Bangladesh",
    ],
    shipping: [{ Location: "United States", Delivery: "6–9 business days" }],
    gender: "Women",
    style: ["T-Shirt", "Cropped"],
  },
  {
    id: "12",
    image:
      "/women/womensmicroribtanktopbellacanvas/womensmicroribtanktopbellacanvas2.png",
    name: "Micro-Rib Tank Top",
    color: [
      { color: "Solid Black Blend", code: "#151515" },
      { color: "Solid Navy Blend", code: "#243048" },
      { color: "Athletic Heather", code: "#9e9e9e" },
      { color: "Solid Baby Blue Blend", code: "#c3dbf0" },
      { color: "Solid Pink Blend", code: "#ffd7de" },
      { color: "Solid White Blend", code: "#ffffff" },
    ],
    size: ["XS", "S", "M", "L", "XL", "2XL"],
    info: "Price: $17.50, Shipping: $4.69, Total: $30",
    description: [
      "100% combed cotton",
      "Marles color is 85% cotton and 15% viscose",
      "Fabric weight: 5.3 oz./yd.² (150.25 g/m²)",
      "Yarn diameter: 28 singles",
      "Pre-shrunk",
      "Regular fit",
      "Crew neck",
      "Side-seamed construction",
      "Double-needle topstitch on the sleeves and hem",
      "Ribbed collar",
      "Shoulder-to-shoulder taping",
      "Tear-away label",
      "Blank product sourced from Bangladesh",
    ],
    shipping: [{ Location: "United States", Delivery: "6–9 business days" }],
    gender: "Women",
    style: ["T-Shirt", "Cropped"],
  },
  {
    id: "13",

    image:
      "/women/womensrelaxedvnecktshirtbellacanvas/womensrelaxedvnecktshirtbellacanvas.png",
    name: "Relaxed V-Neck T-Shirt",
    color: [
      { color: "Solid Black Blend", code: "#0c0c0c" },
      { color: "Heather Navy", code: "#0e1d42" },
      { color: "Dary Grey Heather", code: "#2b2b2b" },
      { color: "Heather Slate", code: "#557589" },
      { color: "Heather Mauve", code: "#b2736f" },
      { color: "Solid White Blend", code: "#ffffff" },
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    info: "Price: $15.95, Shipping: $4.69, Total: $30",
    description: [
      "100% combed cotton",
      "Marles color is 85% cotton and 15% viscose",
      "Fabric weight: 5.3 oz./yd.² (150.25 g/m²)",
      "Yarn diameter: 28 singles",
      "Pre-shrunk",
      "Regular fit",
      "Crew neck",
      "Side-seamed construction",
      "Double-needle topstitch on the sleeves and hem",
      "Ribbed collar",
      "Shoulder-to-shoulder taping",
      "Tear-away label",
      "Blank product sourced from Bangladesh",
    ],
    shipping: [{ Location: "United States", Delivery: "6–9 business days" }],
    gender: "Women",
    style: ["T-Shirt"],
  },
  {
    id: "14",
    image: "/women/womensunisexecosweatshirt/womensunisexecosweatshirt.png",
    name: "Sweatshirt",
    color: [
      { color: "Black", code: "#0b0b0b" },
      { color: "French Navy", code: "#071429" },
      { color: "White", code: "#ffffff" },
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    info: "Price: $31.25, Shipping: $8.49, Total: $55",
    description: [
      "100% combed cotton",
      "Marles color is 85% cotton and 15% viscose",
      "Fabric weight: 5.3 oz./yd.² (150.25 g/m²)",
      "Yarn diameter: 28 singles",
      "Pre-shrunk",
      "Regular fit",
      "Crew neck",
      "Side-seamed construction",
      "Double-needle topstitch on the sleeves and hem",
      "Ribbed collar",
      "Shoulder-to-shoulder taping",
      "Tear-away label",
      "Blank product sourced from Bangladesh",
    ],
    shipping: [{ Location: "United States", Delivery: "6–9 business days" }],
    gender: "Women",
    style: ["Sweater"],
  },
  {
    id: "15",
    image:
      "/women/womensunisexorganicoversizedsweatshirtstanleystella/womensunisexorganicoversizedsweatshirtstanleystella.png",
    name: "Oversized Sweatshirt",
    color: [
      { color: "Black", code: "#0b0b0b" },
      { color: "White", code: "#ffffff" },
      { color: "French Navy", code: "#071429" },
      { color: "Heather Grey", code: "#e5e5e1" },
      { color: "Desert Dust", code: "#dcccb4" },
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    info: "Price: $35.99, Shipping: $8.49, Total: $55",
    description: [
      "100% combed cotton",
      "Marles color is 85% cotton and 15% viscose",
      "Fabric weight: 5.3 oz./yd.² (150.25 g/m²)",
      "Yarn diameter: 28 singles",
      "Pre-shrunk",
      "Regular fit",
      "Crew neck",
      "Side-seamed construction",
      "Double-needle topstitch on the sleeves and hem",
      "Ribbed collar",
      "Shoulder-to-shoulder taping",
      "Tear-away label",
      "Blank product sourced from Bangladesh",
    ],
    shipping: [{ Location: "United States", Delivery: "6–9 business days" }],
    gender: "Women",
    style: ["Sweater", "Oversized"],
  },
  {
    id: "16",
    image:
      "/women/womensunisexoversizedhoodieas/womensunisexoversizedhoodieas.png",
    name: "Oversized Hoodie",
    color: [
      { color: "Black", code: "#060606" },
      { color: "Pine Green", code: "#113433" },
      { color: "Cobalt", code: "#30478a" },
      { color: "Athletic Heather", code: "#dddde7" },
      { color: "Desert Dust", code: "#dcccb4" },
    ],
    size: ["S", "M", "L", "XL", "2XL", "3XL"],
    info: "Price: $36.50, Shipping: $8.49, Total: $55",
    description: [
      "100% combed cotton",
      "Marles color is 85% cotton and 15% viscose",
      "Fabric weight: 5.3 oz./yd.² (150.25 g/m²)",
      "Yarn diameter: 28 singles",
      "Pre-shrunk",
      "Regular fit",
      "Crew neck",
      "Side-seamed construction",
      "Double-needle topstitch on the sleeves and hem",
      "Ribbed collar",
      "Shoulder-to-shoulder taping",
      "Tear-away label",
      "Blank product sourced from Bangladesh",
    ],
    shipping: [{ Location: "United States", Delivery: "6–9 business days" }],
    gender: "Women",
    style: ["Sweater", "Hoodie"],
  },
  {
    id: "17",
    image: "/women/womenunisexpremiumtshirtas/womenunisexpremiumtshirtas.png",
    name: "T-Shirt",
    color: [
      { color: "Black", code: "#191919" },
      { color: "Navy", code: "#1b1f25" },
      { color: "Charcoal", code: "#686a64" },
      { color: "Natural", code: "#fff8e6" },
      { color: "White", code: "#ffffff" },
    ],
    size: ["S", "M", "L", "XL", "2XL", "3XL"],
    info: "Price: $17.50, Shipping: $4.69, Total: $30",
    description: [
      "100% combed cotton",
      "Marles color is 85% cotton and 15% viscose",
      "Fabric weight: 5.3 oz./yd.² (150.25 g/m²)",
      "Yarn diameter: 28 singles",
      "Pre-shrunk",
      "Regular fit",
      "Crew neck",
      "Side-seamed construction",
      "Double-needle topstitch on the sleeves and hem",
      "Ribbed collar",
      "Shoulder-to-shoulder taping",
      "Tear-away label",
      "Blank product sourced from Bangladesh",
    ],
    shipping: [{ Location: "United States", Delivery: "6–9 business days" }],
    gender: "Women",
    style: ["T-Shirt"],
  },
  {
    id: "18",
    image:
      "/women/womenscroppedhoodiebellacanvas/womenscroppedhoodiebellacanvas.png",
    name: "Cropped Hoodie",
    color: [
      { color: "Black", code: "#0b0b0b" },
      { color: "Military Green", code: "#6a6c54" },
      { color: "Storm", code: "#746e72" },
      { color: "Peach", code: "#f8bc9f" },
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    info: "Price: $34.50, Shipping: $8.49, Total: $55",
    description: [
      "100% combed cotton",
      "Marles color is 85% cotton and 15% viscose",
      "Fabric weight: 5.3 oz./yd.² (150.25 g/m²)",
      "Yarn diameter: 28 singles",
      "Pre-shrunk",
      "Regular fit",
      "Crew neck",
      "Side-seamed construction",
      "Double-needle topstitch on the sleeves and hem",
      "Ribbed collar",
      "Shoulder-to-shoulder taping",
      "Tear-away label",
      "Blank product sourced from Bangladesh",
    ],
    shipping: [{ Location: "United States", Delivery: "6–9 business days" }],
    gender: "Women",
    style: ["Hoodie", "Cropped"],
  },
];

export default function Home() {
  const {
    selectedSizes,
    setSelectedSizes,
    selectedColors,
    setSelectedColors,
    selectedStyles,
    setSelectedStyles,
  } = useStore();

  // Remove a size from selectedSizes
  const handleRemoveSize = (size: string) => {
    setSelectedSizes(selectedSizes.filter((s) => s !== size));
  };

  // Remove a color from selectedColors
  const handleRemoveColor = (color: string) => {
    setSelectedColors(selectedColors.filter((c) => c.color !== color));
  };

  // Remove a style from selectedStyles
  const handleRemoveStyle = (style: string) => {
    setSelectedStyles(selectedStyles.filter((s) => s !== style));
  };

  return (
    <main className="bg-[white] px-5  max-w-[100vw] w-[100vw] min-h-[100vh] max-h-[100vh] h-auto flex flex-col relative overflow-y-scroll overflow-x-hidden space-y-10 text-[#272343] text-sm ">
      <div className="sticky top-0 z-50 ">
        <Header />
      </div>

      <Navbar />
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between">
        <div className="">
          <Filter />
        </div>
        <div className="flex flex-col flex-1">
          <div className="p-5 flex items-center space-x-1 flex-wrap">
            {selectedSizes && (
              <div className="rounded-sm   flex items-center space-x-1 justify-center ">
                {selectedStyles.map((style) => (
                  <div
                    key={style}
                    className="flex items-center space-x-1 rounded-sm px-3 py-[1px] justify-center cursor-pointer hover:opacity-80 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9]"
                  >
                    <span className="flex items-center space-x-1 justify-center ">
                      {style}
                    </span>
                    <BsX onClick={() => handleRemoveStyle(style)} />
                  </div>
                ))}
              </div>
            )}
            {selectedColors && (
              <div className="rounded-sm  flex items-center space-x-1 justify-center ">
                {selectedColors.map((color) => (
                  <div
                    key={color.color}
                    className="flex items-center space-x-1 rounded-sm px-3 py-[1px] justify-center cursor-pointer hover:opacity-80 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9]"
                  >
                    <span
                      className="rounded-sm  py-[1px] flex items-center space-x-1 justify-center cursor-pointer hover:opacity-80 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9]"
                      style={{ backgroundColor: color.code }}
                    >
                      {color.color}
                    </span>
                    <BsX onClick={() => handleRemoveColor(color.color)} />
                  </div>
                ))}
              </div>
            )}
            {selectedStyles && (
              <div className="rounded-sm  flex items-center space-x-1 justify-center ">
                {selectedSizes.map((size) => (
                  <div
                    key={size}
                    className="flex items-center space-x-1 rounded-sm px-3 py-[1px] justify-center cursor-pointer hover:opacity-80 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9]"
                  >
                    <span className="rounded-sm px-3 py-[1px] flex items-center space-x-1 justify-center cursor-pointer hover:opacity-80 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9]">
                      {size}
                    </span>{" "}
                    <BsX onClick={() => handleRemoveSize(size)} />
                  </div>
                ))}
              </div>
            )}
          </div>
          <Grid products={productsData} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
