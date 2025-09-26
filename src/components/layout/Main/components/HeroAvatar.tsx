import { memo } from "react";
import { Code2, Zap, Layers } from "lucide-react";
import type { HeroAvatarProps } from "../types/hero.types";

const HeroAvatar = memo(({ isVisible }: HeroAvatarProps) => {
  return (
    <div
      className={`lg:w-1/2 flex justify-center lg:justify-end ${
        isVisible ? "animate-slide-in-right" : "opacity-0"
      }`}
    >
      <div className="relative group">
        {/* Pulse Ring Effect */}
        <div className="absolute inset-0 bg-blue-400 rounded-full pulse-ring"></div>
        <div
          className="absolute inset-0 bg-blue-300 rounded-full pulse-ring"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Main Avatar Container */}
        <div className="relative w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex justify-center items-center shadow-2xl transition-transform duration-300 group-hover:scale-105">
          {/* Avatar Image */}
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-inner">
            <img
              src="/avatar.png"
              alt="Võ Nhật Hào - Full Stack Developer"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjM0I4MkY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSI0OCIgZm9udC1mYW1pbHk9IkFyaWFsIj5WSDwvdGV4dD4KPC9zdmc+";
              }}
            />
          </div>

          {/* Floating Code Symbols */}
          <div
            className="absolute top-4 right-8 text-blue-500 opacity-70 animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            <Code2 size={20} />
          </div>
          <div
            className="absolute bottom-8 left-4 text-blue-400 opacity-70 animate-bounce"
            style={{ animationDelay: "1.5s" }}
          >
            <Zap size={16} />
          </div>
          <div
            className="absolute top-1/2 left-0 text-blue-600 opacity-70 animate-bounce"
            style={{ animationDelay: "2.5s" }}
          >
            <Layers size={18} />
          </div>
        </div>
      </div>
    </div>
  );
});

HeroAvatar.displayName = "HeroAvatar";

export default HeroAvatar;
