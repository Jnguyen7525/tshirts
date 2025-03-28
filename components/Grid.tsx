import Link from "next/link";
import React, { useRef, useState } from "react";
import { productsData } from "@/products";
import { useStore } from "@/store/store";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Grid: React.FC = () => {
  // Zustand states
  const selectedSizes = useStore((state) => state.selectedSizes);
  const selectedColors = useStore((state) => state.selectedColors);
  const selectedStyles = useStore((state) => state.selectedStyles);
  const selectedGender = useStore((state) => state.selectedGender);

  // Filtering Logic
  const filteredProducts = productsData.filter((product) => {
    // Match gender if selected, otherwise allow all
    const matchesGender = selectedGender
      ? product.gender === selectedGender
      : true;

    // Match at least one selected style if styles are selected
    const matchesStyle = selectedStyles.length
      ? product.style.some((style) => selectedStyles.includes(style))
      : true;

    // Match at least one selected size if sizes are selected
    const matchesSize = selectedSizes.length
      ? product.size.some((size) => selectedSizes.includes(size))
      : true;

    // Match at least one selected color if colors are selected
    const matchesColor = selectedColors.length
      ? product.color.some((colorOption) =>
          selectedColors.some(
            (selectedColor) => selectedColor.color === colorOption.color
          )
        )
      : true;

    // Return true if the product matches all filters
    return matchesGender && matchesStyle && matchesSize && matchesColor;
  });

  const scrollRefs = useRef<{ [key: string]: HTMLDivElement | null }>({}); // Dynamic refs for each style
  const [scrollProgress, setScrollProgress] = useState<{
    [key: string]: number;
  }>({}); // Dynamic progress for each style

  const handleScroll = (style: string) => {
    const ref = scrollRefs.current[style];
    if (ref) {
      const { scrollLeft, scrollWidth, clientWidth } = ref;
      const maxScrollableWidth = scrollWidth - clientWidth;
      const progress = (scrollLeft / maxScrollableWidth) * 100;
      setScrollProgress((prev) => ({ ...prev, [style]: progress || 0 })); // Update progress for this style
    }
  };

  const scrollLeft = (style: string) => {
    const ref = scrollRefs.current[style];
    if (ref) {
      ref.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = (style: string) => {
    const ref = scrollRefs.current[style];
    if (ref) {
      ref.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    // !just a vertical grid mainly with everything together
    // <div className="grid gap-0  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-sm overflow-hidden ">
    //   {filteredProducts.map((product) => (
    //     <Link
    //       href={`/product/${product.id}`}
    //       key={product.id}
    //       className="bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] p-4 flex flex-col items-center cursor-pointer hover:opacity-80"
    //     >
    //       <img
    //         src={product.image}
    //         alt={`Product ${product.id}`}
    //         className="w-full h-66 object-cover rounded-md mb-3"
    //       />
    //       <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
    //       <p className="text-sm text-gray-600">{product.info}</p>
    //     </Link>
    //   ))}
    // </div>

    // !each style has own section
    // <div className="space-y-10 flex flex-col overflow-hidden">
    //   {styles.map((style) => {
    //     const productsForStyle = filteredProducts.filter((product) =>
    //       product.style.includes(style)
    //     );

    //     if (productsForStyle.length === 0) return null;

    //     return (
    //       <div key={style} className="z-0">
    //         {/* Style Header */}
    //         <h2 className="text-xl font-bold mb-4 z-0">{style}</h2>

    //         {/* Scrollable Section */}
    //         <div className="relative z-0 flex flex-col space-y-2">
    //           {/* Horizontal Scroller */}
    //           <div
    //             ref={(el) => {
    //               scrollRefs.current[style] = el; // Correctly assign ref without returning any value
    //             }}
    //             onScroll={() => handleScroll(style)}
    //             className="flex overflow-x-hidden w-[95vw] space-x-4 z-0 "
    //           >
    //             {productsForStyle.map((product) => (
    //               <Link
    //                 href={`/product/${product.id}`}
    //                 key={product.id}
    //                 className="flex-none w-64 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] p-4 flex flex-col items-center cursor-pointer hover:opacity-80 rounded-md"
    //               >
    //                 <img
    //                   src={product.image}
    //                   alt={`Product ${product.id}`}
    //                   className="w-full h-52 object-cover rounded-md mb-3"
    //                 />
    //                 <h3 className="text-lg font-semibold mb-2">
    //                   {product.name}
    //                 </h3>
    //                 <p className="text-sm text-gray-600">{product.info}</p>
    //               </Link>
    //             ))}
    //           </div>

    //           <div className="flex justify-between items-center relative">
    //             {/* Scroll Indicator */}
    //             <div className=" right-0 h-[2px] bg-gray-300 rounded-full mt-2 w-[75vw]">
    //               <div
    //                 className="h-full bg-black rounded-full"
    //                 style={{ width: `${scrollProgress[style] || 0}%` }}
    //               ></div>
    //             </div>
    //             <div className="flex space-x-5 items-center justify-center w-[90px]">
    //               {/* Left Arrow */}

    //               <GoChevronLeft
    //                 onClick={() => scrollLeft(style)}
    //                 className="  bg-white  text-gray-400 text-3xl cursor-pointer hover:bg-opacity-80"
    //               />

    //               {/* Right Arrow */}

    //               <GoChevronRight
    //                 onClick={() => scrollRight(style)}
    //                 className="  bg-white  text-gray-400   text-3xl  cursor-pointer hover:bg-opacity-80"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>

    // !combines tshirts w cropped, sweaters w hoddies, and oversized alone
    <div className="space-y-10 flex flex-col overflow-hidden">
      {[
        {
          label: "T-Shirts",
          styles: ["T-Shirt"],
          isTshirt: true,
        },
        {
          label: "Trending Oversized Fashion",
          styles: ["Oversized"],
          isFeatured: true,
        },
        { label: "Sweaters & Hoodies", styles: ["Sweater", "Hoodie"] },
      ].map((category) => {
        const productsForCategory = filteredProducts.filter((product) =>
          category.styles.some((style) => product.style.includes(style))
        );

        if (productsForCategory.length === 0) return null;

        return (
          <div key={category.label}>
            {category.label == "Sweaters & Hoodies" && (
              <div className="w-screen flex justify-center items-center bg-[#191919] -mx-5 -my-5 mb-5">
                {/* Large Banner for Large Screens */}
                <img
                  src={"sweaterbig.png"}
                  alt="sale"
                  className="hidden lg:block w-full h-auto object-cover"
                />

                {/* Medium Banner for Medium Screens */}
                <img
                  src={"sweatermedium.png"}
                  alt="sale"
                  className="hidden md:block lg:hidden w-full h-auto object-cover"
                />

                {/* Small Banner for Small Screens */}
                <img
                  src={"sweatersmall.png"}
                  alt="sale"
                  className="block md:hidden w-full h-[auto] object-cover"
                />
              </div>
            )}
            <div className="z-0">
              {/* Style Header */}
              <h2 className="text-xl font-bold mb-4 z-0">{category.label}</h2>

              {/* Scrollable Section */}
              <div className="relative z-0 flex flex-col space-y-2">
                {/* Horizontal Scroller */}
                <div
                  ref={(el) => {
                    scrollRefs.current[category.label] = el; // Correctly assign ref without returning any value
                  }}
                  onScroll={() => handleScroll(category.label)}
                  className="flex overflow-x-scroll scrollbar-hide w-[95vw] space-x-4 z-0 "
                >
                  {productsForCategory.map((product) => (
                    <Link
                      href={`/product/${product.id}`}
                      key={product.id}
                      // className="flex-none w-64 bg-gradient-to-b from-[#e1e1e1] to-[#effaf9] p-4 flex flex-col items-center cursor-pointer hover:opacity-80 rounded-md"
                      className={`flex-none ${
                        category.isFeatured
                          ? "w-96 bg-gradient-to-r from-[#e1e1e1] to-[#effaf9]"
                          : category.isTshirt && !category.isFeatured
                          ? "w-40 bg-gradient-to-r from-[#e1e1e1] to-[#effaf9]"
                          : "w-64 bg-gradient-to-r from-[#e1e1e1] to-[#effaf9]"
                      } p-4 flex flex-col items-center cursor-pointer hover:opacity-80 rounded-md`}
                    >
                      <img
                        src={product.image}
                        alt={`Product ${product.id}`}
                        // className="w-full h-52 object-cover rounded-md mb-3"
                        className={`w-full ${
                          category.isFeatured
                            ? "h-72"
                            : category.isTshirt && !category.isFeatured
                            ? "h-40"
                            : "h-52"
                        } object-cover rounded-md mb-3`}
                      />
                      <h3 className="text-lg font-semibold mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600">{product.info}</p>
                    </Link>
                  ))}
                </div>

                <div className="flex justify-between items-center relative">
                  {/* Scroll Indicator */}
                  <div className=" right-0 h-[2px] bg-gray-300 rounded-full mt-2 w-[75vw]">
                    <div
                      className="h-full bg-black rounded-full"
                      style={{
                        width: `${scrollProgress[category.label] || 0}%`,
                      }}
                    ></div>
                  </div>
                  <div className="flex space-x-5 items-center justify-center w-[90px]">
                    {/* Left Arrow */}

                    <GoChevronLeft
                      onClick={() => scrollLeft(category.label)}
                      className="  bg-white  text-gray-400 text-3xl cursor-pointer hover:bg-opacity-80"
                    />

                    {/* Right Arrow */}

                    <GoChevronRight
                      onClick={() => scrollRight(category.label)}
                      className="  bg-white  text-gray-400   text-3xl  cursor-pointer hover:bg-opacity-80"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
