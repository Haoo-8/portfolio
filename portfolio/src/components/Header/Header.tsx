import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { id: "about", label: "Giới Thiệu" },
    { id: "skills", label: "Kỹ Năng" },
    { id: "projects", label: "Dự Án" },
    { id: "experience", label: "Kinh Nghiệm" },
    { id: "education", label: "Học Vấn" },
    { id: "contact", label: "Liên Hệ" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          Dev<span className="text-gray-800">Portfolio</span>
        </div>

        <div className="hidden md:flex space-x-6">
          {links.map(link => (
            <a key={link.id} href={`#${link.id}`} className="text-gray-700 hover:text-blue-600 transition">
              {link.label}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-gray-700">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-6 py-3 flex flex-col space-y-3">
            {links.map(link => (
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
