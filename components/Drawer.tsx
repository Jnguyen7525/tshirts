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
          position === "right" ? "-right-5" : "left-0"
        } h-full w-[330px] sm:w-[350px] bg-white shadow-lg transition-transform duration-300 z-50 ${
          isOpen
            ? "translate-x-0"
            : position === "right"
            ? "translate-x-full"
            : "-translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-lg font-semibold hover:opacity-80 cursor-pointer z-50"
        >
          Close
        </button>
        <div className="h-full">{children}</div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0  opacity-30 z-30" onClick={onClose} />
      )}
    </>
  );
};

export default Drawer;
