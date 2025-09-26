import { memo } from "react";
import { ChevronDown } from "lucide-react";
import type { ScrollIndicatorProps } from "../types";

const ScrollIndicator = memo(({ isVisible }: ScrollIndicatorProps) => {
  return (
    <div
      className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: "1s" }}
    >
      <div className="flex flex-col items-center text-slate-400">
        <span className="text-sm mb-2 font-medium">Khám phá thêm</span>
        <ChevronDown size={24} className="animate-bounce" />
      </div>
    </div>
  );
});

ScrollIndicator.displayName = "ScrollIndicator";

export default ScrollIndicator;
