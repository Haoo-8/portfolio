# Hero Feature

This is the Hero section feature of the portfolio website, organized using a feature-based architecture.

## Structure

```
hero/
├── Hero.tsx              # Main Hero component
├── index.ts              # Barrel exports
├── types.ts              # TypeScript interfaces
├── README.md             # This file
├── components/           # Hero-specific components
│   ├── FloatingIcon.tsx
│   ├── HeroAvatar.tsx
│   ├── HeroContent.tsx
│   ├── ScrollIndicator.tsx
│   └── index.ts
├── hooks/                # Hero-specific hooks
│   ├── useHeroVisibility.ts
│   ├── useMouseTracking.ts
│   └── index.ts
└── styles/               # Hero-specific styles
    └── hero.styles.css
```

## Components

### Hero
Main component that orchestrates all hero sub-components and handles the overall layout.

### HeroContent
Contains the main text content, typing animation, tech stack tags, and action buttons.

### HeroAvatar
Displays the avatar image with floating animations and pulse effects.

### FloatingIcon
Reusable component for animated floating icons in the background.

### ScrollIndicator
Shows the scroll down indicator at the bottom of the hero section.

## Hooks

### useHeroVisibility
Manages the visibility state for entrance animations.

### useMouseTracking
Tracks mouse position for the cursor glow effect.

## Features

- **Responsive Design**: Adapts to different screen sizes
- **Smooth Animations**: CSS animations for entrance effects
- **Interactive Elements**: Hover effects and mouse tracking
- **Typing Animation**: Dynamic text typing effect
- **Performance Optimized**: Memoized components and efficient re-renders

## Usage

```tsx
import { Hero } from '@/features/hero';

function App() {
  return (
    <div>
      <Hero />
    </div>
  );
}
```
