"use client";

import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import Drawer from "./Drawer";
import { RiDeleteBin6Line } from "react-icons/ri";

function Header() {
  const cart = useCartStore((state) => state.cart); // Access the cart state
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0); // Calculate total items in the cart

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
  };
  const [isCartOpen, setCartOpen] = useState(false); // State to control drawer visibility
  const updateQuantity = useCartStore((state) => state.updateQuantity); // Access quantity update function
  const removeFromCart = useCartStore((state) => state.removeFromCart); // Access removal function
  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId); // Remove item if quantity is 0 or less
    } else {
      updateQuantity(productId, quantity);
    }
  };
  // Calculate total price of all items in the cart
  const totalPrice = cart.reduce((total, item) => {
    const priceNumber = parseFloat(item.price.replace("$", "")); // Remove "$" and parse as number
    return total + priceNumber * item.quantity;
  }, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpenToggle = () => {
    setMenuOpen(!menuOpen);
  };
  // const handleMenuOpenClose = () => {
  //   setMenuOpen(false);
  // };

  const genericHamburgerLine = `h-1 w-5 my-[1.5px] rounded-full bg-black transition ease transform duration-300`;

  const user = true;

  return (
    <div className="flex items-center justify-between  p-5 z-50 bg-white -mx-5 px-10">
      <Link href={"/"} className="relative cursor-pointer hover:opacity-80">
        <div className="font-bold text-lg">Rêve d&apos;Audace</div>
      </Link>

      <div className="flex items-center justify-center space-x-5 ">
        <Link
          href={"/signIn"}
          className="flex items-center justify-center space-x-1 cursor-pointer hover:opacity-80"
        >
          <IoPersonOutline className="text-lg" />
          <span className="hidden sm:block">Sign In</span>
        </Link>

        {/* Cart */}
        <div
          className="flex items-center justify-center space-x-1 cursor-pointer hover:opacity-80 relative"
          onClick={() => setCartOpen(true)} // Open the cart drawer when clicking the cart icon
        >
          <HiOutlineShoppingBag className="text-lg" />
          <span className="hidden sm:block">Cart</span>
          {/* Cart count bubble */}
          {cartItemCount > 0 && (
            <div className="absolute -top-1 -left-2 bg-blue-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {cartItemCount}
            </div>
          )}
        </div>

        {/* Drawer for the Cart */}
        <Drawer
          isOpen={isCartOpen}
          onClose={() => setCartOpen(false)}
          position="right"
        >
          <div className={"h-full flex flex-col p-5"}>
            {/* Cart Content (Scrollable Area) */}
            <div className="flex-1 overflow-y-auto scrollbar-hide space-y-5">
              <h2 className="font-semibold text-lg mb-5">Your Cart</h2>
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.productId}
                    className="flex items-center w-full"
                  >
                    {/* Product Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-30 h-30 object-cover mr-2"
                    />
                    <div className=" items-start justify- ml-5 flex flex-col">
                      <h3 className="font-semibold">{item.name}</h3>

                      {/* <p className="text-sm text-gray-600">Price: {item.price}</p> */}
                      <p className="text-sm text-gray-600"> {"$50"}</p>
                      <div className="flex space-x-1">
                        <p className="text-sm text-gray-600">
                          {item.selectedSize || "N/A"}
                        </p>
                        <span>/</span>
                        <p className="text-sm text-gray-600">
                          {item.selectedColor || "N/A"}
                        </p>
                      </div>
                      {/* Quantity and Remove */}
                      <div className="flex space-x-2 justify-between">
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
                          className="w-10 text-center border rounded"
                        />
                        <button
                          className=" py-1 cursor-pointer hover:text-red-600 flex items-center justify-center space-x-0.5"
                          onClick={() => handleRemoveItem(item.productId)}
                        >
                          <span className="underline text-xs">Remove</span>
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Sticky Footer */}
            <div className=" py-3 w-full border-t border-gray-400 sticky bottom-0">
              <div className="flex justify-between px-4">
                <h3 className="font-semibold ">Total:</h3>
                <h3 className="font-semibold ">${totalPrice.toFixed(2)}</h3>
              </div>
              <div className="px-4 mt-3">
                <button
                  className="w-full  py-1 bg-[#191919] text-white rounded hover:bg-blue-600"
                  onClick={() => alert("Proceed to Checkout")}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </Drawer>
        {/* )} */}

        {/* SUPER COOL ANIMATED HAMBURGER=>X CLOSE ICON HEHEHE */}
        {/* Drawer for the Menu */}
        <Drawer
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          position="right"
        >
          {/* Menu Content */}
          <div className="flex flex-col space-y-5 p-5 ">
            {user && (
              <div className="cursor-pointer hover:opacity-80">Account</div>
            )}
            <div className="cursor-pointer hover:opacity-80">Men</div>
            <div className="cursor-pointer hover:opacity-80">Women</div>
            <div className="cursor-pointer hover:opacity-80">Track Order</div>
            <div className="cursor-pointer hover:opacity-80">
              Shipping and Returns
            </div>
          </div>
        </Drawer>
        <button
          className="h-8 w-8 rounded flex flex-col justify-center items-center group pl-2 py-2 sm:pl-0"
          onPointerDown={handleMenuOpenToggle}
        >
          <div
            className={`${genericHamburgerLine} bg-[#272343] ${
              menuOpen
                ? "rotate-45 translate-y-1 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} bg-[#272343] ${
              menuOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} bg-[#272343] ${
              menuOpen
                ? "-rotate-45 -translate-y-[6px] opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100 "
            }`}
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
