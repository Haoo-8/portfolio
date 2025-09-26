import { Code2, Zap, Layers } from "lucide-react";
import { FloatingIcon, HeroContent, HeroAvatar, ScrollIndicator } from "./components";
import { useMouseTracking, useHeroVisibility } from "./hooks";
import "./styles/hero.styles.css";

// Main Hero Component
export default function Hero() {
  const isVisible = useHeroVisibility();
  const mousePosition = useMouseTracking();

  return (
    <>
      {/* Cursor Glow Effect */}
      <div
        className="cursor-glow"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />

      <section
        id="about"
        className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10">
            <FloatingIcon Icon={Code2} delay={0} />
          </div>
          <div className="absolute top-32 right-20">
            <FloatingIcon Icon={Zap} delay={1000} />
          </div>
          <div className="absolute bottom-40 left-20">
            <FloatingIcon Icon={Layers} delay={2000} />
          </div>
          <div className="absolute top-1/2 right-10">
            <FloatingIcon Icon={Code2} delay={1500} />
          </div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center min-h-[40vh]">
            <HeroContent isVisible={isVisible} />
            <HeroAvatar isVisible={isVisible} />
          </div>
          <ScrollIndicator isVisible={isVisible} />
        </div>
      </section>
    </>
  );
}
