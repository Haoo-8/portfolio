import { memo } from "react";
import { ExternalLink } from "lucide-react";
import TypingText from "../../../components/common/TypingText/TypingText";
import type { HeroContentProps } from "../types";
import { HERO_CONFIG, CSS_CLASSES } from "../constants";

const HeroContent = memo(({ isVisible, className }: HeroContentProps) => {

  const { greeting, name, typingTexts, description, quote, techStack, actionButtons } = HERO_CONFIG;

  return (
    <div
      className={`lg:w-1/2 mb-16 lg:mb-0 ${
        isVisible ? CSS_CLASSES.SLIDE_IN_LEFT : "opacity-0"
      } text-left ${className || ""}`}
    >
      {/* Greeting */}
      <div className="mb-6">
        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
          {greeting}
        </span>
        <h1 className="text-5xl lg:text-6xl font-black mb-4 text-slate-800 leading-tight">
          {name.split(' ').map((word, index) => (
            <span key={word} className={index === 1 ? `ml-4 ${CSS_CLASSES.GRADIENT_TEXT} inline-block` : ""}>
              {word}{index === 0 ? ' ' : ''}
            </span>
          ))}
        </h1>
      </div>

      {/* Dynamic Title */}
      <div className="mb-8">
        <h2 className="text-2xl lg:text-3xl text-slate-600 mb-2 font-light">
          <TypingText
            texts={typingTexts}
            speed={100}
            deleteSpeed={50}
            pauseTime={2000}
          />
        </h2>
      </div>

      {/* Description */}
      <div
        className={`mb-10 ${
          isVisible ? CSS_CLASSES.FADE_IN_UP : "opacity-0"
        }`}
        style={{ animationDelay: "0.3s" }}
      >
        <p className="text-slate-600 text-lg leading-relaxed mb-3">
          {description}
        </p>
        {quote && (
          <blockquote className="border-l-4 mb-3 border-blue-600 pl-4 italic text-slate-500">
            "{quote}"
          </blockquote>
        )}

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <span
              key={tech.name}
              className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200"
              style={{ animationDelay: `${tech.delay || 0.5 + index * 0.1}s` }}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div
        className={`flex flex-col sm:flex-row gap-4 ${
          isVisible ? CSS_CLASSES.FADE_IN_UP : "opacity-0"
        }`}
        style={{ animationDelay: "0.6s" }}
      >
        {actionButtons.map((button) => {
          const Icon = button.icon;
          const baseClasses = "group px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center";
          const variantClasses = {
            primary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg",
            secondary: `${CSS_CLASSES.GLASS_EFFECT} text-slate-800 hover:bg-white/20`,
            tertiary: "text-slate-600 hover:text-blue-600"
          };

          return (
            <a
              key={button.href}
              href={button.href}
              className={`${baseClasses} ${variantClasses[button.variant]}`}
              {...(button.external && { target: "_blank", rel: "noopener noreferrer" })}
            >
              <Icon size={20} className="mr-2" />
              {button.label}
              {button.variant === 'primary' && (
                <ExternalLink
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
});

HeroContent.displayName = "HeroContent";

export default HeroContent;
