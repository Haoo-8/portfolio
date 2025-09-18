import '../../styles/components/education.css';
export default function Education() {
  const degrees = [
    {
      title: "Cử Nhân Công Nghệ Thông Tin",
      time: "2020 - 2025",
      school:
        "Trường Đại Học Công Nghệ Sài Gòn (Sai Gon Technology University)",
      detail: "Chuyên ngành Công Nghệ Thông Tin",
    },
  ];
  const certs = [
    {
      title: "Flutter Development Bootcamp",
      time: "2024",
      provider: "Udemy",
    },
  ];
  return (
    <section id="education" className="section bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">
            Học Vấn & Chứng Chỉ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nền tảng giáo dục và các chứng chỉ chuyên môn của tôi.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Degrees */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
              Bằng Cấp
            </h3>
            {degrees.map((d, i) => (
              <div
                key={i}
                className="card bg-white p-6 rounded-xl shadow-md mb-6"
              >
                <div className="flex justify-between flex-wrap gap-2 mb-3">
                  <h4 className="text-xl font-bold text-gray-800">{d.title}</h4>
                  <span className="text-blue-600 font-semibold">{d.time}</span>
                </div>

                <p className="text-gray-600">{d.school}</p>
                <p className="text-gray-600 mt-3">{d.detail}</p>
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
              Chứng Chỉ
            </h3>
            {certs.map((c, i) => (
              <div
                key={i}
                className="card bg-white p-6 rounded-xl shadow-md mb-6"
              >
                <div className="flex justify-between flex-wrap gap-2 mb-3">
                  <h4 className="text-xl font-bold text-gray-800">{c.title}</h4>
                  <span className="text-blue-600 font-semibold">{c.time}</span>
                </div>
                <p className="text-gray-600">{c.provider}</p>
                <div className="mt-3 flex items-center">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <i className="fas fa-certificate mr-2"></i> Xem Chứng Chỉ
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
