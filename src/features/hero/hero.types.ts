import type { LucideIcon } from "lucide-react";

export interface FloatingIconProps {
  Icon: LucideIcon;
  delay?: number;
  duration?: number;
}

export interface HeroContentProps {
  isVisible: boolean;
}

export interface HeroAvatarProps {
  isVisible: boolean;
}

export interface ScrollIndicatorProps {
  isVisible: boolean;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface TechStackItem {
  name: string;
  delay: number;
}

export interface ActionButton {
  href: string;
  label: string;
  icon: LucideIcon;
  variant: 'primary' | 'secondary' | 'tertiary';
  external?: boolean;
}
