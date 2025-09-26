import { useState } from "react";
import {
  ChevronRight,
  ExternalLink,
  Award,
  GraduationCap,
  BookOpen,
  Code2,
  Server,
  Cloud,
  Brain,
} from "lucide-react";

// Type definitions
interface Degree {
  title: string;
  time: string;
  school: string;
  detail: string;
  gpa?: string;
}

interface Certificate {
  title: string;
  time: string;
  provider: string;
  skills?: string[];
}

interface TabButtonProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: (id: string) => void;
}

interface EducationCardProps {
  item: Degree | Certificate;
  type: "degree" | "cert";
}

interface RoadmapItem {
  icon: React.ReactNode;
  skills: string[];
}

export default function Education() {
  const [activeTab, setActiveTab] = useState("education");

  const degrees: Degree[] = [
    {
      title: "Cử Nhân Công Nghệ Thông Tin",
      time: "2020 - 2025",
      school: "Trường Đại Học Công Nghệ Sài Gòn",
      detail: "Chuyên ngành Công Nghệ Thông Tin",
      gpa: "3.0/4.0",
    },
  ];

  const certs: Certificate[] = [
    {
      title: "Flutter Development Bootcamp",
      time: "2024",
      provider: "Udemy",
      skills: ["Flutter", "Dart", "Mobile Development"],
    },
    {
      title: "AWS Cloud Practitioner",
      time: "2024",
      provider: "Amazon Web Services",
      skills: ["Cloud Computing", "AWS Services"],
    },
  ];

  const roadmapData: Record<string, RoadmapItem> = {
    "Web & Mobile": {
      icon: <Code2 className="w-5 h-5" />,
      skills: [
        "React/Next.js",
        "Flutter",
        "Node.js",
        "Spring Boot",
        "TypeScript",
      ],
    },
    DevOps: {
      icon: <Server className="w-5 h-5" />,
      skills: ["Docker/K8s", "CI/CD", "AWS/GCP", "Linux", "Monitoring"],
    },
    "AI & Data": {
      icon: <Brain className="w-5 h-5" />,
      skills: [
        "Prompt Engineering",
        "LangChain",
        "Python",
        "TensorFlow",
        "API Integration",
      ],
    },
    "Cloud & Infrastructure": {
      icon: <Cloud className="w-5 h-5" />,
      skills: [
        "Microservices",
        "Serverless",
        "Database Design",
        "Security",
        "Performance",
      ],
    },
  };

  const TabButton: React.FC<TabButtonProps> = ({
    id,
    label,
    icon,
    isActive,
    onClick,
  }) => (
    <button
      onClick={() => onClick(id)}
      className={`
        flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-200
        ${
          isActive
            ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        }
      `}
    >
      {icon}
      {label}
    </button>
  );

  const EducationCard: React.FC<EducationCardProps> = ({ item, type }) => {
    const isDegree = (_item: Degree | Certificate): _item is Degree =>
      type === "degree";
    const isCertificate = (_item: Degree | Certificate): _item is Certificate =>
      type === "cert";

    return (
      <div className="group bg-white border border-gray-100 p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-200">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {item.title}
          </h4>
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {item.time}
          </span>
        </div>

        <p className="text-gray-600 mb-2">
          {isDegree(item)
            ? item.school
            : isCertificate(item)
            ? item.provider
            : ""}
        </p>

        {isDegree(item) && item.detail && (
          <p className="text-gray-500 text-sm mb-3">{item.detail}</p>
        )}

        {isDegree(item) && item.gpa && (
          <p className="text-gray-700 text-sm font-medium mb-3">
            GPA: {item.gpa}
          </p>
        )}

        {isCertificate(item) && item.skills && (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.skills.map((skill: string, index: number) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {type === "cert" && (
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            <Award className="w-4 h-4" />
            Xem Chứng Chỉ
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    );
  };

  const RoadmapSection = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Lộ Trình Phát Triển
        </h3>
        <p className="text-gray-600">Fullstack & AI Developer Roadmap</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(roadmapData).map(([category, data]) => (
          <div
            key={category}
            className="bg-white border border-gray-100 p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                {data.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                {category}
              </h4>
            </div>

            <div className="space-y-2">
              {data.skills.map((skill: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <ChevronRight className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border border-gray-200 p-6 text-center">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          Interactive Mindmap
        </h4>
        <p className="text-gray-600 mb-4">
          Khám phá chi tiết lộ trình học tập và phát triển kỹ năng
        </p>
        <button className="inline-flex items-center gap-2 text-gray-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <ExternalLink className="w-4 h-4" />
          <a href="#">Xem Mindmap Chi Tiết</a>
        </button>
      </div>
    </div>
  );

  return (
    <section id="education" className="py-12 bg-gradient-to-br from bg-blue-50 to-indigo-100 min-h-screen lg:py-20 ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Học Vấn & Phát Triển
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Nền tảng giáo dục, chứng chỉ chuyên môn và lộ trình phát triển kỹ
            năng
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-50 rounded-lg p-1">
            <TabButton
              id="education"
              label="Bằng Cấp"
              icon={<GraduationCap className="w-4 h-4" />}
              isActive={activeTab === "education"}
              onClick={setActiveTab}
            />
            <TabButton
              id="certificates"
              label="Chứng Chỉ"
              icon={<Award className="w-4 h-4" />}
              isActive={activeTab === "certificates"}
              onClick={setActiveTab}
            />
            <TabButton
              id="roadmap"
              label="Lộ Trình"
              icon={<BookOpen className="w-4 h-4" />}
              isActive={activeTab === "roadmap"}
              onClick={setActiveTab}
            />
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          {activeTab === "education" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 max-w-3xl mx-auto">
              {degrees.map((item, index) => (
                <EducationCard key={index} item={item} type="degree" />
              ))}
            </div>
          )}

          {activeTab === "certificates" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {certs.map((cert, index) => (
                <EducationCard key={index} item={cert} type="cert" />
              ))}
            </div>
          )}

          {activeTab === "roadmap" && <RoadmapSection />}
        </div>
      </div>
    </section>
  );
}
