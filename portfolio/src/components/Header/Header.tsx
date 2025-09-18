import { useState } from "react";
import '../../styles/components/header.css';
import { useDarkMode, useScrollPosition } from "../../hooks";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { isDark, toggle } = useDarkMode();
  const { direction } = useScrollPosition();

  const links = [
    { id: "about", label: "Giới Thiệu" },
    { id: "skills", label: "Kỹ Năng" },
    { id: "projects", label: "Dự Án" },
    { id: "experience", label: "Kinh Nghiệm" },
    { id: "education", label: "Học Vấn" },
    { id: "contact", label: "Liên Hệ" },
  ];

  return (
    <header style={{backgroundColor: "var(--color-bg)", color: "var(--color-text)"}} className={`sticky top-0 z-50 bg-white shadow-md transition-transform duration-300 ${direction === "down" ? "-translate-y-full" : "translate-y-0"}`}>
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center"> 
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Dev<span className="text-gray-800">Portfolio</span>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex justify-center items-center space-x-6">
          {links.map((link) => (
            <a
              id="nav"
              key={link.id}
              href={`#${link.id}`}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {link.label}
            </a>
          ))}
          {/* Dark mode toggle */}
          <button
            onClick={toggle}
            className="ml-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {isDark ? (
              <i className="fas fa-sun text-yellow-400"></i>
            ) : (
              <i className="fas fa-moon text-gray-800"></i>
            )}
          </button>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggle}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {isDark ? (
              <i className="fas fa-sun text-yellow-400"></i>
            ) : (
              <i className="fas fa-moon text-gray-800"></i>
            )}
          </button>
          <button onClick={() => setOpen(!open)} className="text-gray-700">
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
                className="text-gray-700 hover:text-blue-600 transition"
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
