import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Details - Create Next App",
  description: "View detailed information about our products.",
};

export default function SignInPage() {
  return (
    // <div className="flex flex-col min-h-screen text-sm overflow-y-scroll overflow-x-hidden">
    //   <Header />
    //   <div className="flex flex-1 justify-start items-start bg-[#effaf9] p-5">
    //     {children}
    //   </div>
    //   <Footer />
    // </div>
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Link
        href={"/"}
        className="relative cursor-pointer hover:opacity-80 mt-5 pl-5 bg-[#272343] text-white"
      >
        {/* <div className="font-bold  text-lg  ">Rêve d'Audace</div> */}
        <div className="font-bold text-lg">Rêve d&apos;Audace</div>
        <div className="w-20 h-20 absolute -top-6 left-7 opacity-30 invert-100 z-50">
          <Image
            className=" "
            alt={`carousel-image-`}
            fill
            quality={100}
            src={"/mylogo.svg"}
          />
        </div>
      </Link>
      <div className="flex h-full flex-1 w-full justify-center items-center mt-20 mb-40">
        <div className="flex flex-col w-[400] h-[400] bg-gradient-to-b from-[#e1e1e1] to-[white] rounded-lg border-gray-200 items-center justify-start pt-16 ">
          <div className="flex flex-col w-full items-center justify-start space-y-5">
            <span className="font-semibold flex w-[500px] justify-center pr-66 opacity-80 text-white bg-[#272343]">
              Login
            </span>
            <div className="flex  mx-5 space-x-1 items-center justify-start bg-white border border-gray-200 px-1 py-[1px] rounded-sm w-3/4">
              <input
                // value={searchTerm}
                type="text"
                placeholder="Email"
                // placeholder={`${selectedTicker.symbol}`}
                className=" outline-none"
                // onChange={handleSearch}
              />
            </div>

            <div className="flex  mx-5 space-x-1 items-center justify-start bg-white border border-gray-200 px-1 py-[1px] rounded-sm w-3/4">
              <input
                // value={searchTerm}
                type="text"
                placeholder="Password"
                // placeholder={`${selectedTicker.symbol}`}
                className=" outline-none"
                // onChange={handleSearch}
              />
            </div>

            <button className="bg-[#272343] text-white w-3/4 rounded-sm border-gray-200 cursor-pointer hover:opacity-80">
              Sign In
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
