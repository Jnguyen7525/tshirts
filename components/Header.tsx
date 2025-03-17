"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BsCart2, BsSearch } from "react-icons/bs";
import { FaRestroom } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { PiTShirtDuotone } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import ClickOutsideWrapper from "./ClickOutsideWrapper";

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

  const handleLogin = () => {};
  const handleLogout = () => {};
  const handleSignup = () => {};

  return (
    <div className="flex items-center justify-between  p-5 z-50 bg-white -mx-5 px-10">
      <div className="relative cursor-pointer hover:opacity-80">
        <div className="font-bold  text-lg  ">Rêve d'Audace</div>
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
      </div>

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
        {/* <div className="flex items-center justify-center space-x-1 cursor-pointer text-lg hover:opacity-80">
          <PiTShirtDuotone className="text-2xl" />
          <span className="hidden sm:block">AI Design</span>
        </div>

        <div className="flex items-center justify-center space-x-1 cursor-pointer text-lg hover:opacity-80">
          <FaRestroom className="text-2xl" />
          <span className="hidden sm:block">Dressing Room</span>
        </div> */}
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
            <div className="absolute right-0 -bottom-[300px] w-48 z-50 border-[0.25px] shadow-white bg-[#2c2c2c] rounded-md flex flex-col space-y-2 ">
              {user && (
                <div className="hover:bg-white hover:text-[#ff5f5f] w-full p-2 cursor-pointer">
                  Account
                </div>
              )}
              <div className="hover:bg-white hover:text-[#ff5f5f] w-full p-2 cursor-pointer">
                Home
              </div>
              <div className="hover:bg-white hover:text-[#ff5f5f] w-full p-2 cursor-pointer">
                Dark Theme
              </div>
              <div className="hover:bg-white hover:text-[#ff5f5f] w-full p-2 cursor-pointer">
                Drawing Panel
              </div>
              <div className="hover:bg-white hover:text-[#ff5f5f] w-full p-2 cursor-pointer">
                Pricing
              </div>
              <div className="hover:bg-white hover:text-[#ff5f5f] w-full p-2 cursor-pointer">
                Settings
              </div>
              {user ? (
                <button
                  onPointerDown={handleLogout}
                  className="hover:bg-white hover:text-[#ff5f5f] rounded-lg lg:p-2 cursor-pointer z-50 text-sm"
                >
                  Logout
                </button>
              ) : (
                <div className="flex">
                  <button
                    onPointerDown={handleSignup}
                    className="hover:bg-white hover:text-[#ff5f5f] rounded-lg p-2 cursor-pointer"
                  >
                    Sign Up
                  </button>
                  <button
                    onPointerDown={handleLogin}
                    className="hover:bg-white hover:text-[#ff5f5f] rounded-lg p-2 cursor-pointer"
                  >
                    Login
                  </button>
                </div>
              )}
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
