import CardExperience from "../../common/Card/CardExperience";
import { useReveal } from "../../../hooks/useReveal";
import "./ex.css";
const items = [
  {
    role: "Full Stack Developer",
    company: "Freelancer Developer",
    time: "2023 - Hiện tại",
    desc: "Thực hiện nhiều dự án nhỏ (web, tool tự động, app mobile) cho các khách hàng cá nhân.",
    bullets: [
      "Phát triển 10+ sản phẩm với hơn 300 khách hàng.",
      "Tối ưu hóa hiệu suất ứng dụng, giảm 40% thời gian tải",
      "Triển khai CI/CD cho quy trình phát triển liên tục",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Tech Startup",
    time: "2022 - 2023",
    desc: "Phát triển giao diện người dùng cho các ứng dụng web hiện đại.",
    bullets: [
      "Xây dựng component library với React và TypeScript",
      "Cải thiện trải nghiệm người dùng với các micro-interactions",
      "Tối ưu SEO và Core Web Vitals cho website",
    ],
  },
];
export default function Experience() {
  const { visibleItems, itemRefs } = useReveal<HTMLDivElement>();
  return (
    <section id="experience" className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            <span className="typing-text">Kinh Nghiệm Làm Việc</span>
          </h2>
          <div className="w-60 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 shimmer-bar"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Quá trình phát triển nghề nghiệp và kinh nghiệm làm việc của tôi.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 timeline-line"></div>

          {items.map((exp, i) => (
            <div key={i} ref={(el) => { itemRefs.current[i] = el; }}>
              <CardExperience
                exp={exp}
                index={i}
                visible={visibleItems.has(i)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
