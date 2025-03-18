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
