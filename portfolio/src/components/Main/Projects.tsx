export default function Projects() {
  return (
    <section id="projects" className="section bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">
            Dự Án Nổi Bật
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {" "}
            Dưới đây là một số dự án tôi đã thực hiện, thể hiện kỹ năng và kinh
            nghiệm của tôi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Ứng Dụng Quản Lý Cá Nhân"
            description="Ứng dụng mobile giúp quản lý công việc, theo dõi chi tiêu và lên kế hoạch cá nhân."
            techs={["Flutter", "Firebase", "Dart", "Provider"]}
            icon="fas fa-mobile-alt"
          />
          <ProjectCard
            title="Website Bán Hàng Thời Trang"
            description="E-commerce website bán quần áo và phụ kiện thời trang với đầy đủ tính năng."
            techs={["React.js", "Node.js", "MongoDB", "Redux"]}
            icon="fas fa-shopping-cart"
          />
          <ProjectCard
            title="Hệ Thống Phân Tích Dữ Liệu"
            description="Web app phân tích và trực quan hóa dữ liệu kinh doanh."
            techs={["Python", "Django", "Pandas", "Chart.js"]}
            icon="fas fa-chart-line"
          />
        </div>
        <div className="mt-12 text-center">
          <a
            href="#"
            className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            <i className="fas fa-plus-circle mr-2"></i>Xem Thêm Dự Án
          </a>
        </div>
      </div>
    </section>
  );
}

type Props = {
  title: string;
  description: string;
  techs: string[];
  icon: string;
};

function ProjectCard({ title, description, techs, icon }: Props) {
  return (
    <div className="card bg-white rounded-xl overflow-hidden shadow-md">
      <div className="bg-gray-300 h-48 flex items-center justify-center">
        <i className={`${icon} text-5xl text-gray-500`}></i>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techs.map((t) => (
            <span
              key={t}
              className="bg-blue-100 text-blue-800 text-xs font-medium py-1 px-2 rounded"
            >
              {" "}
              {t}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <i className="fas fa-external-link-alt"></i> Demo
          </a>
        </div>
      </div>
    </div>
  );
}
