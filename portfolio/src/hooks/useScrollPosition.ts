import { useState, useEffect } from "react";

interface ScrollPosition {
  x: number;
  y: number;
  direction: "up" | "down" | null;
}

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: null,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updatePosition = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";

      setScrollPosition({
        x: window.scrollX,
        y: currentScrollY,
        direction: lastScrollY != currentScrollY ? direction : null,
      });
      lastScrollY = currentScrollY;
    };

    const handleScroll = () => {
      requestAnimationFrame(updatePosition);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return scrollPosition;
};
