"use client";

import { useCartStore } from "@/store/cartStore";
import React, { useEffect, useState } from "react";
import { RxChevronDown } from "react-icons/rx";

interface ProductDetailsProps {
  productId: string;
  name: string;
  info: string;
  color: { color: string; code: string }[];
  size: string[];
  description: string[]; // Array of description items
  shipping: { Location: string; Delivery: string }[]; // Array of shipping info
  price: string;
  image: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  productId,
  name,
  info,
  color,
  size,
  description,
  shipping,
  price,
  image,
}) => {
  const [openDescription, setOpenDescription] = useState(false);
  const [openShipping, setOpenShipping] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1); // Add quantity state

  const addToCart = useCartStore((state) => state.addToCart); // Access the addToCart function
  const cart = useCartStore((state) => state.cart);

  // Handle Add to Cart
  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select a color and size before adding to cart.");
      return;
    }

    addToCart({
      productId,
      name,
      price,
      selectedSize,
      selectedColor,
      quantity,
      image,
    });

    console.log(
      "cart",
      cart,
      {
        productId,
        name,
        price,
        selectedSize,
        selectedColor,
        quantity,
      },
      quantity
    );

    alert("Product added to cart!");
  };

  useEffect(() => {
    console.log("cart", cart);
  }, [cart]);

  return (
    <div className="flex flex-col items-start justify-start space-y-4">
      <h1 className="text-lg font-semibold">{name}</h1>
      <p className="text-gray-600">{info}</p>

      {color && (
        <div>
          <h3 className="font-semibold mb-2">Available Colors:</h3>
          <div className="flex space-x-2">
            {color.map((c) => (
              <span
                key={c.color}
                className={`w-6 h-6 rounded-full border-2 cursor-pointer hover:opacity-80 ${
                  selectedColor === c.color
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: c.code }}
                onClick={() => setSelectedColor(c.color)}
              />
            ))}
          </div>
          {selectedColor && (
            <p className="mt-2 text-sm text-gray-600">
              Selected Color: {selectedColor}
            </p>
          )}
        </div>
      )}

      {size && (
        <div>
          <h3 className="font-semibold mb-2">Available Sizes:</h3>
          <div className="flex space-x-2">
            {size.map((s) => (
              <span
                key={s}
                className={`border-2 rounded px-3 py-1 text-sm cursor-pointer hover:opacity-80 ${
                  selectedSize === s
                    ? "border-blue-500 bg-blue-100"
                    : "border-gray-300 bg-gray-200"
                }`}
                onClick={() => setSelectedSize(s)}
              >
                {s}
              </span>
            ))}
          </div>
          {selectedSize && (
            <p className="mt-2 text-sm text-gray-600">
              Selected Size: {selectedSize}
            </p>
          )}
        </div>
      )}

      {/* Quantity Selector */}
      <div>
        <h3 className="font-semibold mb-2">Quantity:</h3>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border rounded px-2 py-1 w-16 text-center"
        />
      </div>

      {/* Add to Cart Button */}
      <button
        className="w-full py-1 text-white rounded-sm bg-[#272343] cursor-pointer hover:opacity-80"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>

      {description && (
        <div className="flex flex-col w-[300px]">
          <div
            className="font-semibold flex justify-between items-center w-full cursor-pointer hover:opacity-80"
            onClick={() => setOpenDescription(!openDescription)}
          >
            <span>Product Description:</span>
            {openDescription ? (
              <RxChevronDown className="rotate-180 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] rounded-full text-3xl p-2" />
            ) : (
              <RxChevronDown className=" bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] rounded-full text-3xl p-2" />
            )}
          </div>
          {openDescription && (
            <ul className="list-disc list-inside text-gray-600">
              {description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {shipping && (
        <div className="flex flex-col w-[300px]">
          <div
            className="font-semibold flex justify-between items-center cursor-pointer hover:opacity-80"
            onClick={() => setOpenShipping(!openShipping)}
          >
            <span>Shipping & Returns:</span>
            {openShipping ? (
              <RxChevronDown className="rotate-180 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] rounded-full text-3xl p-2" />
            ) : (
              <RxChevronDown className=" bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] rounded-full text-3xl p-2" />
            )}
          </div>
          {openShipping && (
            <ul className="list-disc list-inside text-gray-600">
              {shipping.map((ship, index) => (
                <li key={index}>
                  {ship.Location}: {ship.Delivery}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
