// !this version opens and closes based on whether we click outside the wrapper
// import React, { useRef, useEffect } from "react";

// interface ClickOutsideWrapperProps {
//   children: React.ReactNode;
//   onClickOutside: () => void;
// }

// const ClickOutsideWrapper: React.FC<ClickOutsideWrapperProps> = ({
//   children,
//   onClickOutside,
// }) => {
//   const wrapperRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         wrapperRef.current &&
//         !wrapperRef.current.contains(event.target as Node)
//       ) {
//         onClickOutside();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [onClickOutside]);

//   return <div ref={wrapperRef}>{children}</div>;
// };

// export default ClickOutsideWrapper;

// ClickOutsideWrapper.tsx

// ! this version is modified from above to only be responsible for closing the wrapper if isOpen and a separate component such as a button is responsible for opening it. this avoids any conflicts from before where when attempting to close the wrapper by clicking on said button would cause the onclick handler of that button to run at the same time as the onClickOutside here.

"use client ";
import React, { useRef, useEffect } from "react";

interface ClickOutsideWrapperProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const ClickOutsideWrapper: React.FC<ClickOutsideWrapperProps> = ({
  children,
  isOpen,
  onClose,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return <div ref={wrapperRef}>{children}</div>;
};

export default ClickOutsideWrapper;
