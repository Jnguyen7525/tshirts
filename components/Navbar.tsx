import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-center space-x-10 px-5 py-3 -mx-5 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] text-sm">
      <Link
        href={""}
        className="hover:opacity-80 bg-white rounded-sm px-3 py-[1px]"
      >
        Men
      </Link>
      <Link
        href={""}
        className="hover:opacity-80 bg-white rounded-sm px-3 py-[1px]"
      >
        Women
      </Link>
      {/* <Link
        href={""}
        className="hover:opacity-80 bg-white rounded-sm px-3 py-[1px]"
      >
        Kids
      </Link>
      <Link
        href={""}
        className="hover:opacity-80 bg-white rounded-sm px-3 py-[1px]"
      >
        T-Shirts
      </Link>
      <Link
        href={""}
        className="hover:opacity-80 bg-white rounded-sm px-3 py-[1px]"
      >
        Hoodies
      </Link>
      <Link
        href={""}
        className="hover:opacity-80 bg-white rounded-sm px-3 py-[1px]"
      >
        Sweatshirts
      </Link> */}
    </div>
  );
}

export default Navbar;
