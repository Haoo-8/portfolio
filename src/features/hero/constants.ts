import { Mail, Download, Layers } from "lucide-react";
import type { HeroConfig } from "./types";

// Hero section configuration
export const HERO_CONFIG: HeroConfig = {
  greeting: "👋 Xin chào! Tôi là",
  name: "VÕ NHẬT HÀO",
  title: "Full Stack Developer",
  typingTexts: [
    "Full Stack Developer 🚀",
    "Chuyên React, Next.js & Flutter 📱",
    "Không chỉ code, tôi thiết kế trải nghiệm 🎨",
    "Luôn học hỏi & chia sẻ 📚",
    "Code sạch, UI gọn, user luôn happy ✨",
  ],
  description: `Tôi thích xây dựng web và mobile app bằng TypeScript/JavaScript. 
    Đơn giản thôi: code phải sạch, chạy phải mượt, và giao diện phải đủ đẹp để user "wow" ngay từ lần đầu.`,
  quote: "Code mượt, user cười, dev ngủ ngon.",
  techStack: [
    { name: "React", delay: 0.5 },
    { name: "Next.js", delay: 0.6 },
    { name: "Node.js", delay: 0.7 },
    { name: "TypeScript", delay: 0.8 },
    { name: "Tailwind CSS", delay: 0.9 },
    { name: "MongoDB", delay: 1.0 },
  ],
  actionButtons: [
    {
      href: "#contact",
      label: "Liên Hệ Ngay",
      icon: Mail,
      variant: "primary",
    },
    {
      href: "#projects",
      label: "Xem Dự Án",
      icon: Layers,
      variant: "secondary",
    },
    {
      href: "/VoNhatHao_CV_FullStackDeveloper.pdf",
      label: "Tải CV",
      icon: Download,
      variant: "tertiary",
      external: true,
    },
  ],
  avatar: {
    src: "/avatar.png",
    alt: "Võ Nhật Hào - Full Stack Developer",
    fallback: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjM0I4MkY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSI0OCIgZm9udC1mYW1pbHk9IkFyaWFsIj5WSDwvdGV4dD4KPC9zdmc+",
  },
};

// Animation constants
export const ANIMATION_CONFIG = {
  ENTRANCE_DELAY: 100,
  TYPING_SPEED: 100,
  DELETE_SPEED: 50,
  PAUSE_TIME: 2000,
  FLOAT_DURATION: 3000,
  PULSE_DURATION: 2000,
} as const;

// CSS class names
export const CSS_CLASSES = {
  SLIDE_IN_LEFT: "animate-slide-in-left",
  SLIDE_IN_RIGHT: "animate-slide-in-right",
  FADE_IN_UP: "animate-fade-in-up",
  PULSE_RING: "pulse-ring",
  GRADIENT_TEXT: "gradient-text",
  GLASS_EFFECT: "glass-effect",
  CURSOR_GLOW: "cursor-glow",
} as const;

// Responsive breakpoints
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
} as const;
