import { memo, useMemo } from "react";
import type { FloatingIconProps } from "../types";
import { ANIMATION_CONFIG } from "../constants";

const FloatingIcon = memo(({
  Icon,
  delay = 0,
  duration = ANIMATION_CONFIG.FLOAT_DURATION,
  size = 24,
  opacity = 0.1,
  className,
  style,
  ...props
}: FloatingIconProps) => {
  // Memoize the animation style to prevent unnecessary recalculations
  const animationStyle = useMemo(() => ({
    animation: `float ${duration}ms ease-in-out infinite`,
    animationDelay: `${delay}ms`,
    opacity,
    ...style,
  }), [duration, delay, opacity, style]);

  return (
    <div
      className={`absolute text-blue-500 ${className || ""}`}
      style={animationStyle}
      {...props}
    >
      <Icon size={size} />
    </div>
  );
});

FloatingIcon.displayName = "FloatingIcon";

export default FloatingIcon;
