"use client";

import React, { useState } from "react";
import { useCartStore } from "@/store/cartStore"; // Import Zustand store
import Drawer from "./Drawer"; // Import the reusable Drawer component

const CartDrawer: React.FC = () => {
  const [isCartOpen, setCartOpen] = useState(false); // State to control drawer visibility
  const cart = useCartStore((state) => state.cart); // Access cart items
  const removeFromCart = useCartStore((state) => state.removeFromCart); // Access removal function
  const updateQuantity = useCartStore((state) => state.updateQuantity); // Access quantity update function

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId); // Remove item if quantity is 0 or less
    } else {
      updateQuantity(productId, quantity);
    }
  };

  return (
    <div>
      {/* Cart button */}
      <div
        className="flex items-center justify-center space-x-1 cursor-pointer hover:opacity-80 relative"
        onClick={() => setCartOpen(true)} // Open the cart drawer
      >
        <span className="text-lg">🛒</span>
        <span className="hidden sm:block">Cart</span>
        {cart.length > 0 && (
          <div className="absolute -top-1 -left-2 bg-blue-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </div>
        )}
      </div>

      {/* Drawer */}
      <Drawer
        isOpen={isCartOpen}
        onClose={() => setCartOpen(false)}
        position="right"
      >
        <h2 className="font-bold text-lg mb-5">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="flex flex-col space-y-5">
            {cart.map((item) => (
              <div
                key={item.productId}
                className="flex items-center space-x-4 border p-3 rounded"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    Size: {item.selectedSize || "N/A"}
                  </p>
                  <p className="text-sm text-gray-600">
                    Color: {item.selectedColor || "N/A"}
                  </p>
                  <p className="text-sm text-gray-600">Price: {item.price}</p>
                </div>
                {/* Quantity and Remove */}
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="0"
                    value={item.quantity}
                    onChange={(e) =>
                      handleUpdateQuantity(
                        item.productId,
                        Number(e.target.value)
                      )
                    }
                    className="w-16 text-center border rounded"
                  />
                  <button
                    className="px-2 py-1 text-red-500 hover:text-red-600"
                    onClick={() => handleRemoveItem(item.productId)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default CartDrawer;
