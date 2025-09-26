import { useState, useEffect, useRef } from "react";
import type { SkillIconProps } from "./types";

export default function SkillIcon({ src, alt, name, level, index }: SkillIconProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const iconRef = useRef<HTMLDivElement | null>(null);

  const getLevelColor = (level?: string) => {
    switch (level) {
      case "Expert": return "bg-blue-600";
      case "Advanced": return "bg-blue-500";
      case "Intermediate": return "bg-blue-400";
      case "Beginner": return "bg-gray-400";
      default: return "bg-blue-500";
    }
  };

  const getLevelWidth = (level?: string) => {
    switch (level) {
      case "Expert": return "w-full";
      case "Advanced": return "w-4/5";
      case "Intermediate": return "w-3/5";
      case "Beginner": return "w-2/5";
      default: return "w-4/5";
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 60);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      ref={iconRef}
      className={`
        relative group transition-all duration-500 ease-out
        ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"}
      `}
      style={{ transitionDelay: `${index * 60}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-white rounded-xl border transition-all duration-300 ease-out
          flex items-center justify-center cursor-pointer relative overflow-hidden
          ${isHovered
            ? "border-blue-600 shadow-lg shadow-blue-100 -translate-y-1"
            : "border-gray-200 shadow-sm hover:border-gray-300"}
        `}
      >
        <img
          src={src}
          alt={alt}
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain transition-all duration-300 filter"
          style={{ filter: isHovered ? "none" : "grayscale(0.3)" }}
        />

        {/* Level bar */}
        {level && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
            <div
              className={`
                h-full transition-all duration-700 ease-out
                ${getLevelColor(level)} ${getLevelWidth(level)}
                ${isVisible ? "scale-x-100" : "scale-x-0"}
              `}
              style={{
                transformOrigin: "left",
                transitionDelay: `${index * 60 + 200}ms`,
              }}
            />
          </div>
        )}
      </div>

      {/* Tooltip */}
      <div
        className={`
          absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 sm:px-3 sm:py-2
          bg-gray-900 text-white text-xs sm:text-sm rounded-lg pointer-events-none
          transition-all duration-300 ease-out z-20 whitespace-nowrap
          ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
        `}
      >
        <div className="font-medium">{name}</div>
        {level && (
          <div className="text-xs text-gray-300 mt-0.5 hidden sm:block">{level}</div>
        )}
        <div
          className="absolute top-full left-1/2 transform -translate-x-1/2 
                     border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"
        />
      </div>
    </div>
  );
}
