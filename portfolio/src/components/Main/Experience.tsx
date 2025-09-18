export default function Experience() {
  const items = [
    {
      role: "Full Stack Developer",
      company: "Freelancer Developer",
      time: "2023 - Hiện tại",
      desc: "Thực hiện nhiều dự an nhỏ(web, tool tự động, app mobile) cho các khác hàng cá nhân.",
      bullets: [
        "Phát triển 10+ sản phẩm với hơn 300 khách hàng.",
        "Tối ưu hóa hiệu suất ứng dụng, giảm 40% thời gian tải",
        "Triển khai CI/CD cho quy trình phát triển liên tục",
      ],
    },
  ];
  return (
    <section id="experience" className="section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">
            Kinh Nghiệm Làm Việc
          </h2>
          <p className="text-gray-600 mx-w-2xl mx-auto">
            Quá trình phát triển nghê nghiệp và kinh nghiệm làm việc của tôi.
          </p>
        </div>
        <div className="max-w-3xl mx-auto timeline-container">
          {items.map((exp, i) => (
            <div key={i} className="relative pb-12">
              <div className="timeline-dot"></div>
              <div className="ml-8">
                <div className="card bg-white p-6 rounded-xl shadow-md" id="card-ex">
                  <div className="flex justify-between flex-wrap gap-2 mb-3">
                    <h3 className="text-xl font-bold text-gray-800">
                      {exp.role}
                    </h3>
                    <span className="text-blue-600 font-semibold">
                      {exp.time}
                    </span>
                  </div>
                  <h4 className="text-lg text-gray-600 mb-4">{exp.company}</h4>
                  <p className="text-gray-600 mb-4">{exp.desc}</p>
                  <ul className="text-gray-600 space-y-2">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
