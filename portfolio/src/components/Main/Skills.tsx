import "../../styles/components/skills.css";
import CardSkill from "../Card/CardSkill";
export default function Skills() {
  const skillCards = [
    {
      iconClass: "fas fa-laptop-code",
      iconColor: "text-blue-600",
      title: "Frontend",
      skills: [
        "HTML5, CSS3, JavaScript",
        "React.js / Next.js",
        "Responsive Design",
        "Tailwind CSS / SCSS",
      ],
    },
    {
      iconClass: "fas fa-mobile-alt",
      iconColor: "text-green-600",
      title: "Mobile",
      skills: ["Flutter & Dart", "Native APIs", "App Store Deploy"],
    },
    {
      iconClass: "fas fa-server",
      iconColor: "text-purple-600",
      title: "Backend",
      skills: ["Python / Node.js", "RESTful APIs", "Microservices"],
    },
    {
      iconClass: "fas fa-cloud",
      iconColor: "text-orange-600",
      title: "DevOps & Cloud",
      skills: ["Docker", "AWS", "CI/CD Pipelines"],
    },
    {
      iconClass: "fas fa-database",
      iconColor: "text-red-600",
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "Redis"],
    },
    {
      iconClass: "fas fa-shield-alt",
      iconColor: "text-yellow-600",
      title: "Security",
      skills: [
        "OWASP Security",
        "JWT / OAuth",
        "SSL/TLS",
        "Penetration Testing",
      ],
    },
    {
      iconClass: "fas fa-tools",
      iconColor: "text-indigo-600",
      title: "Tools & Others",
      skills: [
        "Git / GitHub",
        "Agile / Scrum",
        "Testing (Jest, Pytest)",
        "Performance Optimization",
      ],
    },
    {
      iconClass: "fas fa-sitemap",
      iconColor: "text-teal-600",
      title: "Architecture",
      skills: [
        "System Design",
        "Scalable Architecture",
        "Event-Driven Design",
        "Load Balancing",
      ],
    },
  ];
  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">
            Kỹ Năng Chuyên Môn
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Những công nghệ và kỹ năng tôi sử dụng để xây dựng các ứng dụng web
            và mobile hiện đại.
          </p>
        </div>
        {/* Skill Cards*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCards.map((card, index) => (
            <CardSkill key={index} {...card} />
          ))}
        </div>
        {/* Progress Bars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Progress label="Flutter & Dart" value={65} />
            <Progress label="Python" value={30} />
            <Progress label="JavScript & React" value={85} />
          </div>
          <div>
            <Progress label="E-commerce Development" value={85} />
            <Progress label="UI/UX Design" value={40} />
            <Progress label="Database Management" value={65} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Sub-component cho progress bar*/
function Progress({ label, value }: { label: string; value: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700">{label}</span>
        <span className="text-gray-600">{value}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-blue-600 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}
