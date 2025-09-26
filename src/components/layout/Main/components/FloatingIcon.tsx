import { memo } from "react";
import type { FloatingIconProps } from "../types/hero.types";

const FloatingIcon = memo(({
  Icon,
  delay = 0,
  duration = 3000,
}: FloatingIconProps) => {
  return (
    <div
      className="absolute opacity-10 text-blue-500"
      style={{
        animation: `float ${duration}ms ease-in-out infinite`,
        animationDelay: `${delay}ms`,
      }}
    >
      <Icon size={24} />
    </div>
  );
});

FloatingIcon.displayName = "FloatingIcon";

export default FloatingIcon;
