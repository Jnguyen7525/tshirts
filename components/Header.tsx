"use client";

import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";

import ClickOutsideWrapper from "./ClickOutsideWrapper";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpenToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const handleMenuOpenClose = () => {
    setMenuOpen(false);
  };

  const genericHamburgerLine = `h-1 w-5 my-[1.5px] rounded-full bg-black transition ease transform duration-300`;

  const user = true;

  return (
    <div className="flex items-center justify-between  p-5 z-50 bg-white -mx-5 px-10">
      <Link href={"/"} className="relative cursor-pointer hover:opacity-80">
        {/* <div className="font-bold  text-lg  ">Rêve d'Audace</div> */}
        <div className="font-bold text-lg">Rêve d&apos;Audace</div>
        <div className="w-20 h-20 absolute -top-6 left-7 opacity-30">
          <Image
            className=" "
            alt={`carousel-image-`}
            fill
            quality={100}
            src={"/mylogo.svg"}
            // style={{
            //   objectFit: "cover", // Ensures the image fills the container
            //   objectPosition: "center", // Centers the image within the container
            // }}
          />
        </div>
      </Link>

      {/* <div className="flex flex-1 mx-5 space-x-1 items-center justify-start bg-white border p-1 rounded-sm w-1/2">
        <BsSearch className="" />
        <input
          // value={searchTerm}
          type="text"
          // placeholder="ticker"
          // placeholder={`${selectedTicker.symbol}`}
          className=" outline-none"
          // onChange={handleSearch}
        />
      </div> */}

      <div className="flex items-center justify-center space-x-5 ">
        <div className="flex items-center justify-center space-x-1 cursor-pointer hover:opacity-80">
          <IoPersonOutline className="text-lg" />
          <span className="hidden sm:block">Sign In</span>
        </div>

        <div className="flex items-center justify-center space-x-1 cursor-pointer  hover:opacity-80">
          <HiOutlineShoppingBag className="text-lg" />
          <span className="hidden sm:block">Cart</span>
        </div>

        {/* SUPER COOL ANIMATED HAMBURGER=>X CLOSE ICON HEHEHE */}
        <ClickOutsideWrapper isOpen={menuOpen} onClose={handleMenuOpenClose}>
          {menuOpen && (
            <div className="absolute right-0 -bottom-[220px] w-48 z-50 border-[0.25px]  bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] rounded-md flex flex-col space-y-2 ">
              {user && (
                <div className=" w-full p-2 cursor-pointer hover:opacity-80">
                  Account
                </div>
              )}
              <div className=" w-full p-2 cursor-pointer hover:opacity-80">
                Men
              </div>
              <div className=" w-full p-2 cursor-pointer hover:opacity-80">
                Women
              </div>
              <div className=" w-full p-2 cursor-pointer hover:opacity-80">
                Track Order
              </div>
              <div className=" w-full p-2 cursor-pointer hover:opacity-80">
                Shipping and Returns
              </div>
            </div>
          )}
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
        </ClickOutsideWrapper>
      </div>
    </div>
  );
}

export default Header;
