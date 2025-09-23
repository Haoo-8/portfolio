import { useState } from "react";

type Props = {
  exp: {
    role: string;
    company: string;
    time: string;
    desc: string;
    bullets: string[];
  };
  index: number;
  visible: boolean;
};

export default function CardExperience({ exp, index, visible }: Props) {
  const [hovered, setHovered] = useState(false);

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const ripple = document.createElement("span");
    ripple.className = "ripple-effect";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    card.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <div
      data-index={index}
      className={`relative mb-12 transition-all duration-700 transform ${
        visible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg pulse-dot"></div>

      {/* Card */}
      <div className="ml-20">
        <div
          className={`relative bg-white rounded-xl shadow-lg hover-card cursor-pointer transition-all duration-300 overflow-hidden ${
            hovered ? "shadow-2xl scale-102" : ""
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={handleCardClick}
        >
          {/* Hover glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 hover-glow transition-opacity duration-300"></div>

          <div className="relative p-8">
            {/* Header */}
            <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                  {exp.role}
                </h3>
                <h4 className="text-lg text-gray-600 font-medium">
                  {exp.company}
                </h4>
              </div>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm">
                {exp.time}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6 leading-relaxed">{exp.desc}</p>

            {/* Bullets */}
            <ul className="space-y-3">
              {exp.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className={`flex items-start opacity-0 animate-bullet transition-all duration-500`}
                  style={{
                    animationDelay: `${index * 200 + idx * 100 + 500}ms`,
                  }}
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 achievement-dot"></div>
                  <span className="text-gray-700 leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
