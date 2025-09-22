import CardProject from "../../common/Card/CardProject";
import CardProjectDetailModal from "../../common/Card/CardProjectDetailModal";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Ứng Dụng Quản Lý Cá Nhân",
      description:
        "Ứng dụng mobile giúp quản lý công việc, theo dõi chi tiêu và lên kế hoạch cá nhân. Tích hợp nhiều tính năng tiện ích và giao diện thân thiện với người dùng.",
      techs: ["Flutter", "Firebase", "Dart", "Provider"],
      icon: "fas fa-mobile-alt",
    },
    {
      title: "Website Bán Hàng Thời Trang",
      description:
        "E-commerce website bán quần áo và phụ kiện thời trang với đầy đủ tính năng thanh toán, quản lý đơn hàng và hệ thống đánh giá sản phẩm.",
      techs: ["React.js", "Node.js", "MongoDB", "Redux"],
      icon: "fas fa-shopping-cart",
    },
    {
      title: "Hệ Thống Phân Tích Dữ Liệu",
      description: "Web app phân tích và trực quan hóa dữ liệu kinh doanh với dashboard tương tác và báo cáo chi tiết.",
      techs: ["Python", "Django", "Pandas", "Chart.js"],
      icon: "fas fa-chart-line",
    },
    {
      title: "Ứng Dụng Học Tập Online",
      description:
        "Platform học tập trực tuyến với video streaming, quiz tương tác và theo dõi tiến độ học tập của học viên.",
      techs: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io"],
      icon: "fas fa-graduation-cap",
    },
    {
      title: "API Gateway Microservices",
      description:
        "Hệ thống API Gateway quản lý và định tuyến requests cho kiến trúc microservices với authentication và rate limiting.",
      techs: ["Node.js", "Docker", "Redis", "Nginx"],
      icon: "fas fa-server",
    },
    {
      title: "Ứng Dụng Chat Real-time",
      description: "Ứng dụng chat thời gian thực với tính năng nhóm, gửi file, emoji và notification push.",
      techs: ["React Native", "Socket.io", "MongoDB", "AWS"],
      icon: "fas fa-comments",
    },
  ];

  const [index, setIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Auto-advance carousel on desktop
  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(next, 5000);
      return () => clearInterval(interval);
    }
  }, [isMobile, index]);

  return (
    <section id="projects" className="section bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-gray-800">
            Dự Án Nổi Bật
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
            Dưới đây là một số dự án tôi đã thực hiện, thể hiện kỹ năng và kinh nghiệm của tôi trong phát triển ứng dụng.
          </p>
        </motion.div>

        {/* Mobile Grid Layout */}
        {isMobile ? (
          <div className="grid grid-cols-1 gap-6 mb-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <CardProject
                  {...project}
                  onClick={() => handleProjectClick(project)}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          /* Desktop Carousel Layout */
          <div className="relative flex items-center justify-center overflow-hidden mb-12">
            {/* Navigation Buttons */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="absolute left-4 xl:left-8 z-10 p-3 lg:p-4 bg-white/90 backdrop-blur-sm shadow-lg rounded-full hover:bg-white transition-all duration-300 group"
            >
              <i className="fas fa-chevron-left text-lg lg:text-xl text-gray-700 group-hover:text-blue-600"></i>
            </motion.button>

            {/* Carousel Container */}
            <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center">
              {projects.map((project, i) => {
                const offset = (i - index + projects.length) % projects.length;
                const cardOffset = window.innerWidth < 1024 ? 400 : 500;

                let x = 0;
                let scale = 0.75;
                let opacity = 0.4;
                let zIndex = 1;

                if (offset === 0) {
                  // Main center card
                  x = 0;
                  scale = 1;
                  opacity = 1;
                  zIndex = 10;
                } else if (offset === 1) {
                  // Right card
                  x = cardOffset;
                  scale = 0.85;
                  opacity = 0.7;
                  zIndex = 5;
                } else if (offset === projects.length - 1) {
                  // Left card
                  x = -cardOffset;
                  scale = 0.85;
                  opacity = 0.7;
                  zIndex = 5;
                } else if (offset === 2) {
                  // Far right card (partially visible)
                  x = cardOffset * 1.6;
                  scale = 0.7;
                  opacity = 0.3;
                  zIndex = 2;
                } else if (offset === projects.length - 2) {
                  // Far left card (partially visible)
                  x = -cardOffset * 1.6;
                  scale = 0.7;
                  opacity = 0.3;
                  zIndex = 2;
                } else {
                  // Hidden cards
                  x = cardOffset * 2.5;
                  opacity = 0;
                  zIndex = 0;
                }

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity, 
                      scale, 
                      x,
                      zIndex
                    }}
                    transition={{ 
                      duration: 0.7, 
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 100
                    }}
                    className="absolute w-[350px] lg:w-[420px] xl:w-[450px]"
                    style={{ zIndex }}
                  >
                    <CardProject
                      {...project}
                      onClick={() => handleProjectClick(project)}
                    />
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="absolute right-4 xl:right-8 z-10 p-3 lg:p-4 bg-white/90 backdrop-blur-sm shadow-lg rounded-full hover:bg-white transition-all duration-300 group"
            >
              <i className="fas fa-chevron-right text-lg lg:text-xl text-gray-700 group-hover:text-blue-600"></i>
            </motion.button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === index 
                      ? 'bg-blue-600 scale-110' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* View More Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <i className="fas fa-plus-circle mr-2 group-hover:rotate-90 transition-transform duration-300"></i>
            <span className="text-base lg:text-lg">Xem Thêm Dự Án</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <CardProjectDetailModal 
          project={selectedProject} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
}