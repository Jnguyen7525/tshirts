import React from "react";
import { FaApplePay, FaCcPaypal, FaGooglePay } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col space-y-16 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] -mx-5 px-10 py-20">
      <div className="flex flex-wrap justify-between sm:justify-start sm:space-x-20 ">
        <div className="flex flex-col space-y-1">
          <div className="font font-semibold">Help</div>
          <div className="cursor-pointer hover:opacity-80">
            Shipping and Delivery
          </div>
          <div className="cursor-pointer hover:opacity-80">
            Track Your Order
          </div>
          <div className="cursor-pointer hover:opacity-80">Your Account</div>
          <div className="cursor-pointer hover:opacity-80">FAQs</div>
          <div className="cursor-pointer hover:opacity-80">Policies</div>
          <div className="cursor-pointer hover:opacity-80">Contact Us</div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="font font-semibold">About</div>
          <div className="cursor-pointer hover:opacity-80">
            WholeSale Enquiries
          </div>
          <div className="cursor-pointer hover:opacity-80">WholeSale Login</div>
          <div className="cursor-pointer hover:opacity-80">Bulk Custom</div>
        </div>
      </div>

      <div className="flex text-3xl space-x-3 justify-end items-center">
        <FaApplePay />
        <FaGooglePay />
        <FaCcPaypal />
      </div>
    </div>
  );
}

export default Footer;
