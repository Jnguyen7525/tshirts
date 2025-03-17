import React from "react";

function Footer() {
  return (
    <div className="bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] flex flex-wrap justify-between -mx-5 px-10 py-20">
      <div className="flex flex-col space-y-1">
        <div className="font font-semibold">Shop</div>
        <div className="cursor-pointer hover:opacity-80">Popular Now</div>
        <div className="cursor-pointer hover:opacity-80">New</div>
        <div className="cursor-pointer hover:opacity-80">Sale</div>
        <div className="cursor-pointer hover:opacity-80">Graphic Tees</div>
        <div className="cursor-pointer hover:opacity-80">Blank Tees</div>
        <div className="cursor-pointer hover:opacity-80">Custom Tees</div>
      </div>
      <div className="flex flex-col space-y-1">
        <div className="font font-semibold">Help</div>
        <div className="cursor-pointer hover:opacity-80">
          Shipping and Delivery
        </div>
        <div className="cursor-pointer hover:opacity-80">Track Your Order</div>
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
      <div></div>
    </div>
  );
}

export default Footer;
