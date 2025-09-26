import type { LucideIcon } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

// Base component props
export interface BaseComponentProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

// Animation related types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
}

export interface MousePosition {
  x: number;
  y: number;
}

// Component specific props
export interface FloatingIconProps extends BaseComponentProps, AnimationConfig {
  Icon: LucideIcon;
  size?: number;
  opacity?: number;
}

export interface HeroContentProps extends BaseComponentProps {
  isVisible: boolean;
  animationDelay?: number;
}

export interface HeroAvatarProps extends BaseComponentProps {
  isVisible: boolean;
  avatarSrc?: string;
  avatarAlt?: string;
  onImageError?: (error: Event) => void;
}

export interface ScrollIndicatorProps extends BaseComponentProps {
  isVisible: boolean;
  text?: string;
  onClick?: () => void;
}

// Data types
export interface TechStackItem {
  name: string;
  delay?: number;
  color?: string;
  icon?: LucideIcon;
}

export interface ActionButton {
  href: string;
  label: string;
  icon: LucideIcon;
  variant: 'primary' | 'secondary' | 'tertiary';
  external?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  disabled?: boolean;
  loading?: boolean;
}

export interface TypingTextConfig {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  loop?: boolean;
}

// Hero section configuration
export interface HeroConfig {
  greeting?: string;
  name: string;
  title: string;
  typingTexts: string[];
  description: string;
  quote?: string;
  techStack: TechStackItem[];
  actionButtons: ActionButton[];
  avatar: {
    src: string;
    alt: string;
    fallback?: string;
  };
}

// Hook return types
export interface UseHeroVisibilityReturn {
  isVisible: boolean;
  setVisible: (visible: boolean) => void;
}

export interface UseMouseTrackingReturn extends MousePosition {
  isTracking: boolean;
  startTracking: () => void;
  stopTracking: () => void;
}
