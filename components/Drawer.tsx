"use client";

import React from "react";

interface DrawerProps {
  isOpen: boolean; // Controls whether the drawer is open or closed
  onClose: () => void; // Function to handle closing the drawer
  position?: "left" | "right"; // Drawer position: slide in from the left or right
  children: React.ReactNode; // Content inside the drawer
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  position = "right", // Default position is right
  children,
}) => {
  return (
    <>
      {/* Drawer */}
      <div
        className={`fixed top-0 ${
          position === "right" ? "right-0" : "left-0"
        } h-full w-[300px] bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] shadow-lg transition-transform duration-300 z-50 ${
          isOpen
            ? "translate-x-0"
            : position === "right"
            ? "translate-x-full"
            : "-translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-lg font-semibold hover:opacity-80 cursor-pointer z-50"
        >
          Close
        </button>
        <div className="p-5 h-full">{children}</div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0  opacity-30 z-30" onClick={onClose} />
      )}
    </>
  );
};

export default Drawer;
