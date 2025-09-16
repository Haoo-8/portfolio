import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          Dev
          <span className="text-gray-800">Portfolio</span>
        </div>
        <div className="hidden md:flex space-x-6">
          {[
            "about",
            "skills",
            "projects",
            "experience",
            "education",
            "contact",
          ].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-gray-700 hover:text-blue-600 transaction"
            >
              {id.toUpperCase()}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-6 py-3 flex flex-col space-y-3">
            {[
              "about",
              "skills",
              "projects",
              "experience",
              "education",
              "contact",
            ].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-gray-700 hover:text-blue-600 transaction"
                onClick={() => setOpen(false)}
              >
                {" "}
                {id.toUpperCase}
              </a>
            ))}
          </div>
        </div>
      )}

    </header>
  );
}
