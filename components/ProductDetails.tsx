"use client";

import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

interface ProductDetailsProps {
  name: string;
  info: string;
  color: { color: string; code: string }[];
  size: string[];
  description: string[]; // Array of description items
  shipping: { Location: string; Delivery: string }[]; // Array of shipping info
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  name,
  info,
  color,
  size,
  description,
  shipping,
}) => {
  const [openDescription, setOpenDescription] = useState(false);
  const [openShipping, setOpenShipping] = useState(false);

  return (
    <div className="flex flex-col items-start justify-start space-y-4">
      <h1 className="text-lg font-semibold">{name}</h1>
      <p className="text-gray-600">{info}</p>

      {color && (
        <div>
          <h3 className="font-semibold mb-2">Available Colors:</h3>
          <div className="flex space-x-2">
            {color.map((color) => (
              <span
                key={color.color}
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: color.code }}
              />
            ))}
          </div>
        </div>
      )}

      {size && (
        <div>
          <h3 className="font-semibold mb-2">Available Sizes:</h3>
          <div className="flex space-x-2">
            {size.map((size) => (
              <span
                key={size}
                className="border rounded px-3 py-1 bg-gray-200 text-sm"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      )}

      {description && (
        <div className="flex flex-col w-[300px]">
          <div
            className="font-semibold flex justify-between items-center w-full"
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
            className="font-semibold flex justify-between items-center"
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
