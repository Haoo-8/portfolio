import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

type Props = {
  project: {
    title: string;
    description: string;
    techs: string[];
    icon: string;
  };
  onClose: () => void;
};

export default function CardProjectDetailModal({ project, onClose }: Props) {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden'; // Prevent background scroll

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.9 }}
          transition={{ 
            duration: 0.4, 
            ease: "easeOut",
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-lg lg:max-w-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with gradient background */}
          <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 p-4 sm:p-6 lg:p-8 text-white">
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 z-10"
              onClick={onClose}
            >
              <i className="fas fa-times text-base sm:text-lg"></i>
            </motion.button>

            {/* Project icon and title */}
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 pr-12">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-3 sm:p-4 bg-white/20 rounded-xl sm:rounded-2xl backdrop-blur-sm"
              >
                <i className={`${project.icon} text-2xl sm:text-3xl lg:text-4xl`}></i>
              </motion.div>
              
              <div className="flex-1 min-w-0">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 break-words"
                >
                  {project.title}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-sm sm:text-base text-blue-100"
                >
                  Chi tiết dự án
                </motion.p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 lg:p-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-6 sm:mb-8"
            >
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-100 flex items-center">
                <i className="fas fa-info-circle text-blue-600 mr-2 sm:mr-3"></i>
                Mô tả dự án
              </h4>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-6 sm:mb-8"
            >
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-100 flex items-center">
                <i className="fas fa-code text-blue-600 mr-2 sm:mr-3"></i>
                Công nghệ sử dụng
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.techs.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-800 dark:text-blue-200 text-sm sm:text-base font-medium py-2 px-3 sm:px-4 rounded-xl border border-blue-200 dark:border-blue-700 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mb-6 sm:mb-8"
            >
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-100 flex items-center">
                <i className="fas fa-star text-blue-600 mr-2 sm:mr-3"></i>
                Tính năng chính
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                  className="flex items-start"
                >
                  <i className="fas fa-check-circle text-green-500 mr-2 sm:mr-3 mt-0.5 text-sm"></i>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    Giao diện người dùng thân thiện và responsive
                  </span>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.0 }}
                  className="flex items-start"
                >
                  <i className="fas fa-check-circle text-green-500 mr-2 sm:mr-3 mt-0.5 text-sm"></i>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    Hiệu suất tối ưu và tải trang nhanh
                  </span>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.1 }}
                  className="flex items-start"
                >
                  <i className="fas fa-check-circle text-green-500 mr-2 sm:mr-3 mt-0.5 text-sm"></i>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    Tích hợp API và cơ sở dữ liệu hiệu quả
                  </span>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.2 }}
                  className="flex items-start"
                >
                  <i className="fas fa-check-circle text-green-500 mr-2 sm:mr-3 mt-0.5 text-sm"></i>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    Bảo mật thông tin và dữ liệu người dùng
                  </span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="mb-6 sm:mb-8"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <div className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400">
                    <i className="fas fa-code-branch mr-1"></i>
                    15+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Commits</div>
                </div>
                
                <div className="text-center p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <div className="text-lg sm:text-xl font-bold text-green-600 dark:text-green-400">
                    <i className="fas fa-users mr-1"></i>
                    3+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Contributors</div>
                </div>
                
                <div className="text-center p-3 sm:p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl col-span-2 sm:col-span-1">
                  <div className="text-lg sm:text-xl font-bold text-purple-600 dark:text-purple-400">
                    <i className="fas fa-star mr-1"></i>
                    4.8
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Rating</div>
                </div>
              </div>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="flex-1 flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white py-3 sm:py-4 px-6 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fab fa-github mr-2 sm:mr-3 text-lg group-hover:scale-110 transition-transform duration-200"></i>
                <span className="text-sm sm:text-base">Xem mã nguồn</span>
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="flex-1 flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 sm:py-4 px-6 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fas fa-external-link-alt mr-2 sm:mr-3 text-lg group-hover:scale-110 transition-transform duration-200"></i>
                <span className="text-sm sm:text-base">Xem demo</span>
              </motion.a>
            </motion.div>

            {/* Additional info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-600"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <i className="fas fa-calendar-alt"></i>
                  <span>Cập nhật: Tháng 9, 2024</span>
                </div>
                <div className="text-center">
                  Nhấn <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">ESC</kbd> để đóng
                </div>
              </div>
            </motion.div>
          </div>

         
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}