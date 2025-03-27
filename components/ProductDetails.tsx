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
    <div className="flex flex-col items-start justify-start space-y-3 p-5 mb-5 w-screen md:w-full">
      <h1 className="text-lg font-semibold">{name}</h1>
      <p className="text-gray-600">{info}</p>

      {color && (
        <div>
          <h3 className="font-semibold mb-2">Color:</h3>
          <div className="flex flex-wrap space-x-2">
            {color.map((c) => (
              <div
                key={c.color}
                className={`w-8 h-8 flex items-center justify-center rounded-full border-1 ${
                  selectedColor === c.color
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full  cursor-pointer hover:opacity-80 `}
                  style={{ backgroundColor: c.code }}
                  onClick={() => setSelectedColor(c.color)}
                />
              </div>
            ))}
          </div>
          {selectedColor && (
            <p className="mt-2 -mb-2 text-sm text-gray-600">{selectedColor}</p>
          )}
        </div>
      )}

      {size && (
        <div>
          <h3 className="font-semibold mb-2">Size:</h3>
          <div className="flex flex-wrap space-x-2">
            {size.map((s) => (
              <span
                key={s}
                className={`border bg-white rounded-sm px-3 py-[1px] text-sm cursor-pointer hover:opacity-80 ${
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
            <p className="mt-2 -mb-2 text-sm text-gray-600">{selectedSize}</p>
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
          className="border rounded px-2 py-[1px] w-16 text-center"
        />
      </div>

      {/* Add to Cart Button */}
      <button
        className="w-full justify-center items-center py-[1px] text-white rounded-sm bg-[#272343] cursor-pointer hover:opacity-80"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>

      {description && (
        <div className="flex flex-col w-full ">
          <div
            className="font-semibold flex justify-between items-center w-full cursor-pointer hover:opacity-80"
            onClick={() => setOpenDescription(!openDescription)}
          >
            <span>Product Description:</span>
            {openDescription ? (
              <RxChevronDown className="rotate-180  rounded-full text-3xl p-2" />
            ) : (
              <RxChevronDown className="  rounded-full text-3xl p-2" />
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
        <div className="flex flex-col w-full">
          <div
            className="font-semibold flex justify-between items-center cursor-pointer hover:opacity-80"
            onClick={() => setOpenShipping(!openShipping)}
          >
            <span>Shipping & Returns:</span>
            {openShipping ? (
              <RxChevronDown className="rotate-180  rounded-full text-3xl p-2" />
            ) : (
              <RxChevronDown className=" rounded-full text-3xl p-2" />
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
