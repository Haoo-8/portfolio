import { useState, useEffect, useCallback } from "react";
import type { UseHeroVisibilityReturn } from "../types";
import { ANIMATION_CONFIG } from "../constants";

export const useHeroVisibility = (): UseHeroVisibilityReturn => {
  const [isVisible, setIsVisible] = useState(false);

  const setVisible = useCallback((visible: boolean) => {
    setIsVisible(visible);
  }, []);

  useEffect(() => {
    // Use requestAnimationFrame for better performance
    const animationFrame = requestAnimationFrame(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, ANIMATION_CONFIG.ENTRANCE_DELAY);

      return () => clearTimeout(timer);
    });

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return { isVisible, setVisible };
};
