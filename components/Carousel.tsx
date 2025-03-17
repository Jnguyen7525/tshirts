// carousel.tsx
"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";

const Carousel = ({
  data,
}: {
  data: {
    image: string;
  }[];
}) => {
  // State and Ref initialization
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const carouselRef = useRef(null);

  // useEffect to get the initial carousel size
  useEffect(() => {
    let elem = carouselRef.current as unknown as HTMLDivElement;
    let { width, height } = elem.getBoundingClientRect();
    if (carouselRef.current) {
      setCarouselSize({
        width,
        height,
      });
    }
  }, []);

  const imagesToShow = 3; // Number of images to display at once
  const step = imagesToShow; // Number of images to step on button click

  return (
    <div className="flex items-center justify-center p-5">
      {/* Navigation buttons */}
      <div className="mt-3 flex justify-center absolute z-20 left-5 text-4xl">
        <button
          disabled={currentImg === 0}
          onClick={() => setCurrentImg((prev) => prev - 1)}
          className={`font-extrabold cursor-pointer ${
            currentImg === 0 && "opacity-50"
          }`}
        >
          <RxChevronLeft />
        </button>
      </div>
      {/* Carousel container */}
      <div className="relative h-80 w-[80%] overflow-hidden rounded-md">
        {/* Image container */}
        <div
          ref={carouselRef}
          style={{
            left: -currentImg * carouselSize.width,
          }}
          //   style={{
          //     left: -currentImg * (carouselSize.width / imagesToShow), // Adjust slide by 1/3 width
          //   }}
          className="absolute flex h-full w-full transition-all duration-300"
        >
          {/* Map through data to render images */}
          {data.map((v, i) => (
            <div key={i} className="relative h-full w-full shrink-0">
              <Image
                className="cursor-pointer hover:opacity-80"
                alt={`carousel-image-${i}`}
                fill
                quality={100}
                src={v.image || "https://random.imagecdn.app/500/500"}
                style={{
                  objectFit: "cover", // Ensures the image fills the container
                  objectPosition: "center", // Centers the image within the container
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="mt-3 flex justify-center absolute right-5 z-40 text-4xl ">
        <button
          disabled={currentImg === data.length - 1}
          onClick={() => setCurrentImg((prev) => prev + 1)}
          className={` font-extrabold cursor-pointer ${
            currentImg === data.length - 1 && "opacity-50"
          }`}
        >
          <RxChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
