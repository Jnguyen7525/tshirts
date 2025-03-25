import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

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
      <div className="flex w-full border-b pb-2 border-gray-300 items-center justify-start mt-5 pl-5">
        <Link
          href={"/"}
          className="relative cursor-pointer hover:opacity-80  bg-white text-black "
        >
          {/* <div className="font-bold  text-lg  ">Rêve d'Audace</div> */}
          <div className="font-bold text-lg">Rêve d&apos;Audace</div>
          {/* <div className="w-20 h-20 absolute -top-6 left-10 opacity-30  z-50">
          <Image
            className=" "
            alt={`carousel-image-`}
            fill
            quality={100}
            src={"/mylogo.svg"}
          />
        </div> */}
        </Link>
        <div className="flex space-x-2 mx-3 w-[200px] h-full">
          <div className=" flex w-[1px] bg-black" />
          <div className="text-xs">Login to Account</div>
        </div>
      </div>
      <div className="flex h-full flex-1 w-full justify-center items-center mt-20 mb-40">
        <div className="flex flex-col w-[400] h-[400]  rounded-lg border-gray-200 items-center justify-start pt-16 ">
          <div className="flex flex-col w-full items-center justify-start space-y-5">
            <div className="flex flex-col space-y-3 w-full items-center justify-center">
              <span className="font-semibold flex justify-start w-3/4 mb-6  opacity-80 text-black ">
                Welcome Back
              </span>
              <div className=" flex space-x-2 items-center justify-center border rounded-sm w-3/4 cursor-pointer hover:opacity-80">
                <FcGoogle />
                <p>Sign in with Google</p>
              </div>
              <div>or</div>
              <div>Sign in with Your email and password.</div>
            </div>
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

            <button className="bg-[#191919] text-white w-3/4 rounded-sm border-gray-200 cursor-pointer hover:opacity-80">
              Sign In
            </button>

            <div className="w-3/4 flex flex-col justify-start text-xs space-y-2">
              <p>Don't have an account?</p>
              <Link href={"/"} className="underline hover:opacity-80">
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
