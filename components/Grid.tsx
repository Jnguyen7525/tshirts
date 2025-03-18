import Link from "next/link";
import React from "react";

interface Product {
  id: string; // Unique identifier for each product
  image: string; // URL of the product image
  description: string; // Description of the product
  colors?: { color: string; code: string }[];
  sizes?: string[];
  info: string; // Additional information about the product
}

const Grid: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div
      className="grid gap-0  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-sm overflow-hidden "
      //   style={{
      //     gridTemplateColumns: "repeat(3, 1fr)", // Maximum 3 columns
      //   }}
    >
      {products.map((product) => (
        <Link
          href={`/product/${product.id}`}
          key={product.id}
          className="bg-gradient-to-b from-[#e1e1e1] to-[#effaf9]  p-4 flex flex-col items-center cursor-pointer hover:opacity-80 "
        >
          <img
            src={product.image}
            alt={`Product ${product.id}`}
            className="w-full h-66 object-cover rounded-md mb-3 "
          />
          <h3 className="text-lg font-semibold mb-2">{product.description}</h3>
          {/* <p className="text-sm text-gray-600">
            {product.colors.map((color) => (
              <span>{color.color}</span>
            ))}
          </p>
          <p className="text-sm text-gray-600">
            {product.sizes.map((size) => (
              <span>{size}</span>
            ))}
          </p> */}
          <p className="text-sm text-gray-600">{product.info}</p>
        </Link>
      ))}
    </div>
  );
};

export default Grid;
