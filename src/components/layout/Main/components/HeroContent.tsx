import { memo } from "react";
import { Mail, Download, ExternalLink, Layers } from "lucide-react";
import TypingText from "../../../common/TypingText/TypingText";
import type { HeroContentProps } from "../types/hero.types";

const HeroContent = memo(({ isVisible }: HeroContentProps) => {
  const techStack = [
    "React",
    "Next.js", 
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
  ];

  const typingTexts = [
    "Full Stack Developer 🚀",
    "Chuyên React, Next.js & Flutter 📱",
    "Không chỉ code, tôi thiết kế trải nghiệm 🎨",
    "Luôn học hỏi & chia sẻ 📚",
    "Code sạch, UI gọn, user luôn happy ✨",
  ];

  return (
    <div
      className={`lg:w-1/2 mb-16 lg:mb-0 ${
        isVisible ? "animate-slide-in-left" : "opacity-0"
      } text-left`}
    >
      {/* Greeting */}
      <div className="mb-6">
        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
          👋 Xin chào! Tôi là
        </span>
        <h1 className="text-5xl lg:text-6xl font-black mb-4 text-slate-800 leading-tight">
          VÕ NHẬT
          <span className="ml-4 gradient-text inline-block"> HÀO</span>
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
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
        style={{ animationDelay: "0.3s" }}
      >
        <p className="text-slate-600 text-lg leading-relaxed mb-3">
          Tôi thích xây dựng web và mobile app bằng
          <strong className="text-blue-600">
            {" "}
            TypeScript/JavaScript
          </strong>
          . Đơn giản thôi: code phải sạch, chạy phải mượt, và giao diện
          phải đủ đẹp để user "wow" ngay từ lần đầu.
        </p>
        <blockquote className="border-l-4 mb-3 border-blue-600 pl-4 italic text-slate-500">
          "Code mượt, user cười, dev ngủ ngon."
        </blockquote>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <span
              key={tech}
              className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div
        className={`flex flex-col sm:flex-row gap-4 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
        style={{ animationDelay: "0.6s" }}
      >
        <a
          href="#contact"
          className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center"
        >
          <Mail size={20} className="mr-2" />
          Liên Hệ Ngay
          <ExternalLink
            size={16}
            className="ml-2 group-hover:translate-x-1 transition-transform"
          />
        </a>

        <a
          href="#projects"
          className="group glass-effect text-slate-800 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
        >
          <Layers size={20} className="mr-2" />
          Xem Dự Án
        </a>

        <a
          href="/VoNhatHao_CV_FullStackDeveloper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group text-slate-600 px-8 py-4 rounded-xl font-semibold hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center"
        >
          <Download
            size={20}
            className="mr-2 group-hover:animate-bounce"
          />
          Tải CV
        </a>
      </div>
    </div>
  );
});

HeroContent.displayName = "HeroContent";

export default HeroContent;
