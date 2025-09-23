import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import SkillCategory from "../skills/SkillCategory";
import { skillCategories } from "../../../data/skillsData";
import { useIntersection } from "../../../hooks/useIntersection";
import { useSlider } from "../../../hooks/useSlider";

export default function Skills() {
  const titleRef = useRef(null);
  const titleVisible = useIntersection(titleRef);
  const { current, isTransitioning, next, prev, goTo } = useSlider(
    skillCategories.length
  );

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div
          ref={titleRef}
          className={`
            mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ease-out
            ${
              titleVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          <div className="max-w">
            <h2 className="text-4xl font-bold sm:text-3xl md:text-4xl text-[var(--color-text)] mb-3 sm:mb-4">
              <span className="typing-text">Kỹ Năng Chuyên Môn</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
              Tổng quan toàn diện về các kỹ năng kỹ thuật của tôi, bao gồm phát
              triển frontend, backend, ứng dụng di động và các công cụ phát
              triển hiện đại. Mỗi kỹ năng đều phản ánh kinh nghiệm thực tế từ
              các dự án và quá trình học hỏi không ngừng.
            </p>
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          <button
            onClick={prev}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed -ml-4 sm:-ml-6"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={next}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed -mr-4 sm:-mr-6"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out ml-2"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {skillCategories.map((category, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0 px-2 sm:px-4 md:px-8"
                >
                  <SkillCategory {...category} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 sm:mt-12 space-x-2">
            {skillCategories.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-blue-600 w-6 sm:w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
          {/* Category Counter */}
          <div className="text-center mt-4 sm:mt-6">
            <span className="text-xs sm:text-sm text-gray-500">
              {current + 1} / {skillCategories.length}
            </span>
          </div>
        </div>
        {/* Skills Summary */}
        <div
          className={`
          mt-12 sm:mt-16 md:mt-20 p-4 sm:p-6 md:p-8 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-100
          transition-all duration-700 ease-out
          
        `}
          style={{ transitionDelay: "1s" }}
        >
          <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">
            Skills Overview
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
            <div>
              <p className="mb-2">
                <span className="font-medium">Số năm kinh nghiệm:</span> Hơn 5 năm trong lĩnh vực phát triển web.
              </p>
              <p className="mb-2">
                <span className="font-medium">Chuyên môn:</span> Full-stack
                JavaScript development.
              </p>
              <p>
                <span className="font-medium">Lĩnh vực tập trung:</span> Hệ sinh thái React, Node.js, cloud. 
              </p>
            </div>
            <div>
              <p className="mb-2">
                <span className="font-medium">Triết lý học :</span>{" "}
                Luôn cải thiện và cập nhật xu hướng công nghệ mới.
              </p>
              <p>
                <span className="font-medium">Hợp tác:</span> Có kinh nghiệm làm việc theo mô hình Agile và phối hợp nhóm đa chức năng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
