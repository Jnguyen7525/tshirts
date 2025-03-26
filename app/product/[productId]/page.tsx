import ProductDetails from "@/components/ProductDetails";
import { productsData } from "@/products";

import React from "react";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  {
    // Await the params promise to resolve
    const resolvedParams = await params;
    const productId = resolvedParams.productId;

    // Find the product
    const product = productsData.find((p) => p.id === productId);

    if (!product) {
      return <div className="text-center">Product not found</div>;
    }

    return (
      <div className="flex flex-col w-full h-full justify-center items-start md:flex-row md:space-x-10   overflow-hidden max-w-4xl">
        {/* Image on the left */}
        <div className="md:w-1/2 h-full  bg-gradient-to-b from-[#e1e1e1] to-[#effaf9]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-md flex justify-start p-16"
          />
        </div>
        {/* Details on the right */}
        <div className="flex flex-col items-start justify-start ">
          <ProductDetails
            productId={product.id}
            name={product.name}
            info={product.info}
            color={product.color}
            size={product.size}
            description={product.description}
            shipping={product.shipping}
            price={product.info}
            image={product.image}
          />
        </div>
      </div>
    );
  }
}
