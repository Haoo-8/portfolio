import { useState } from "react";
import "../../styles/components/header.css";
import { useDarkMode, useLanguage, useScrollPosition } from "../../hooks";

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
    { id: "contact", label: t("contact") },
  ];

  return (
    <header
      className={`sticky top-0 z-50 shadow-md transition-transform duration-300 bg-[var(--color-bg)] text-[var(--color-text)] ${
        direction === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-[var(--color-primary)]">
          Dev<span className="text-[var(--color-text)]">Portfolio</span>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex justify-center items-center space-x-6">
          {links.map((link) => (
            <a
              id="nav"
              key={link.id}
              href={`#${link.id}`}
              className="text-[--color-text] hover:text-[var(--color-primary)] transition"
            >
              {link.label}
            </a>
          ))}
          {/* Dark mode toggle */}
          <button
            onClick={toggle}
            className="ml-4 p-2 rounded-lg bg-[var(--color-bg)] hover:bg-[var(--color-primary)]/20 transition"
            aria-label="Sun or Moon"
          >
            {isDark ? (
              <i className="fas fa-sun text-yellow-400"></i>
            ) : (
              <i className="fas fa-moon text-[var(--color-text)]"></i>
            )}
          </button>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="ml-2 px-3 py-1 rounded bg-[var(--color-primary)] text-[var(--color-bg)]"
          >
            {lang.toUpperCase()}
          </button>
        </div>
        {/* Mobile menu */}
        <div className="md:hidden">
          {/* Dark mode */}
          <button
            onClick={toggle}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="Sun-Moon"
          >
            {isDark ? (
              <i className="fas fa-sun text-yellow-400"></i>
            ) : (
              <i className="fas fa-moon text-gray-800"></i>
            )}
          </button>
          {/* Language */}
          <button
            onClick={toggleLang}
            className="px-2 py-1 rounded bl-blue-600 text-gray-700 text-sm"
          >
            {lang.toUpperCase()}
          </button>
          {/* Menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-700"
            aria-label="bar"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </nav>
      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-6 py-3 flex flex-col space-y-3">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
