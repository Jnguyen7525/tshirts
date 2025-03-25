"use client";

import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { BsX } from "react-icons/bs";
import { useStore } from "@/store/store";

export default function Home() {
  const {
    selectedSizes,
    setSelectedSizes,
    selectedColors,
    setSelectedColors,
    selectedStyles,
    setSelectedStyles,
  } = useStore();

  // Remove a size from selectedSizes
  const handleRemoveSize = (size: string) => {
    setSelectedSizes(selectedSizes.filter((s) => s !== size));
  };

  // Remove a color from selectedColors
  const handleRemoveColor = (color: string) => {
    setSelectedColors(selectedColors.filter((c) => c.color !== color));
  };

  // Remove a style from selectedStyles
  const handleRemoveStyle = (style: string) => {
    setSelectedStyles(selectedStyles.filter((s) => s !== style));
  };

  return (
    <main className="bg-[white] px-5  max-w-[100vw] w-[100vw] min-h-[100vh] max-h-[100vh] h-auto flex flex-col relative overflow-y-scroll scrollbar-hide overflow-x-hidden space-y-10 text-[#272343] text-sm ">
      <div className="sticky top-0 z-50 ">
        <Header />
      </div>

      <div className="w-screen flex justify-center items-center bg-[#191919] -mx-5 -my-5">
        {/* Large Banner for Large Screens */}
        <img
          src={"desktop_3840x2160.png"}
          alt="sale"
          className="hidden lg:block w-full h-auto object-cover"
        />

        {/* Medium Banner for Medium Screens */}
        <img
          src={"tablet_2048x1536.png"}
          alt="sale"
          className="hidden md:block lg:hidden w-full h-auto object-cover"
        />

        {/* Small Banner for Small Screens */}
        <img
          src={"mobile2_1500x2668.png"}
          alt="sale"
          className="block md:hidden w-full h-auto object-cover"
        />
      </div>

      <Navbar />
      {/* <div className="flex flex-col sm:flex-row justify-center sm:justify-between"> */}
      <div className="flex flex-col justify-center">
        {/* <Filter /> */}

        <div className="flex flex-col flex-1">
          <div className="p-5 flex items-center space-x-1 flex-wrap">
            {selectedSizes && (
              <div className="rounded-sm   flex items-center space-x-1 justify-center ">
                {selectedStyles.map((style) => (
                  <div
                    key={style}
                    className="flex items-center space-x-1 rounded-sm px-3 py-[1px] justify-center cursor-pointer hover:opacity-80 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9]"
                  >
                    <span className="flex items-center space-x-1 justify-center ">
                      {style}
                    </span>
                    <BsX onClick={() => handleRemoveStyle(style)} />
                  </div>
                ))}
              </div>
            )}
            {selectedColors && (
              <div className="rounded-sm  flex items-center space-x-1 justify-center ">
                {selectedColors.map((color) => (
                  <div
                    key={color.color}
                    className="flex items-center space-x-1 rounded-sm px-3 py-[1px] justify-center cursor-pointer hover:opacity-80 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9]"
                  >
                    <span
                      className="rounded-sm  py-[1px] flex items-center space-x-1 justify-center cursor-pointer hover:opacity-80 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9]"
                      style={{ backgroundColor: color.code }}
                    >
                      {color.color}
                    </span>
                    <BsX onClick={() => handleRemoveColor(color.color)} />
                  </div>
                ))}
              </div>
            )}
            {selectedStyles && (
              <div className="rounded-sm  flex items-center space-x-1 justify-center ">
                {selectedSizes.map((size) => (
                  <div
                    key={size}
                    className="flex items-center space-x-1 rounded-sm px-3 py-[1px] justify-center cursor-pointer hover:opacity-80 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9]"
                  >
                    <span className="rounded-sm px-3 py-[1px] flex items-center space-x-1 justify-center cursor-pointer hover:opacity-80 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9]">
                      {size}
                    </span>{" "}
                    <BsX onClick={() => handleRemoveSize(size)} />
                  </div>
                ))}
              </div>
            )}
          </div>
          <Grid />
        </div>
      </div>
      <Footer />
    </main>
  );
}
