import { useState } from "react";
import "../../../styles/components/header.css";
import { useDarkMode, useLanguage, useScrollPosition } from "../../../hooks";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { isDark, toggle } = useDarkMode();
  const { direction } = useScrollPosition();
  const { t, toggleLang, lang } = useLanguage();

  const links = [
    { id: "about", label: t("about") },
    { id: "skills", label: t("skills") },
    { id: "projects", label: t("projects") },
    { id: "experience", label: t("experience") },
    { id: "education", label: t("education") },
  ];

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md bg-[var(--color-bg)]/90 border-b border-[var(--color-primary)]/10 transition-all duration-300 ease-in-out ${
        direction === "down" ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Enhanced with better typography */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary)]/70 flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold">
              <span className="text-[var(--color-primary)]">Dev</span>
              <span className="text-[var(--color-text)]">Portfolio</span>
            </div>
          </div>

          {/* Desktop Navigation - Improved layout */}
          <div className="hidden lg:flex items-center space-x-1">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="relative px-4 py-2 text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-all duration-200 rounded-lg hover:bg-[var(--color-primary)]/5 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
          </div>

          {/* Action Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggle}
              className="relative w-11 h-11 rounded-xl bg-[var(--color-bg)] hover:bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/30 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md group"
              aria-label="Toggle Dark Mode"
            >
              <div className="relative w-5 h-5">
                {isDark ? (
                  <i className="fas fa-sun text-yellow-500 text-lg group-hover:rotate-12 transition-transform duration-200"></i>
                ) : (
                  <i className="fas fa-moon text-[var(--color-text)] text-lg group-hover:-rotate-12 transition-transform duration-200"></i>
                )}
              </div>
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="relative w-11 h-11 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 flex items-center justify-center"
              aria-label="Toggle Language"
            >
              {lang.toUpperCase()}
            </button>

            {/* Contact CTA Button */}
            <a
              href="#contact"
              className="px-4 py-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/80 text-white font-medium text-sm rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              {t("contact")}
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Dark Mode Toggle - Mobile */}
            <button
              onClick={toggle}
              className="w-10 h-10 rounded-lg bg-[var(--color-bg)] hover:bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 transition-all duration-200 flex items-center justify-center"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? (
                <i className="fas fa-sun text-yellow-500 text-base"></i>
              ) : (
                <i className="fas fa-moon text-[var(--color-text)] text-base"></i>
              )}
            </button>

            {/* Language Toggle - Mobile */}
            <button
              onClick={toggleLang}
              className="w-10 h-10 rounded-lg bg-[var(--color-primary)] text-white font-semibold text-xs transition-all duration-200 flex items-center justify-center"
              aria-label="Toggle Language"
            >
              {lang.toUpperCase()}
            </button>

            {/* Menu Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 rounded-lg bg-[var(--color-bg)] hover:bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 transition-all duration-200 flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              <div className="relative w-5 h-5 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-5 bg-[var(--color-text)] transition-all duration-300 ${
                    open ? "rotate-45 translate-y-0.5" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-5 bg-[var(--color-text)] transition-all duration-300 mt-1 ${
                    open ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-5 bg-[var(--color-text)] transition-all duration-300 mt-1 ${
                    open ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 px-2 bg-[var(--color-bg)] rounded-xl border border-[var(--color-primary)]/10 shadow-lg">
            <div className="flex flex-col space-y-1">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 rounded-lg transition-all duration-200 font-medium"
                >
                  {link.label}
                </a>
              ))}
              {/* Mobile Contact CTA */}
              <div className="pt-3 mt-3 border-t border-[var(--color-primary)]/10">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 bg-[var(--color-primary)] text-white text-center font-medium rounded-lg hover:bg-[var(--color-primary)]/90 transition-all duration-200"
                >
                  {t("contact")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}