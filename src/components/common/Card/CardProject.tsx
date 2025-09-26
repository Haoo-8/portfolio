import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  techs: string[];
  icon: string;
  onClick: () => void;
};

export default function CardProject({
  title,
  description,
  techs,
  icon,
  onClick,
}: Props) {
  return (
    <motion.div
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group card bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 w-full h-full border border-gray-100 dark:border-gray-700"
      onClick={onClick}
    >
      {/* Icon / Thumbnail */}
      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 h-40 sm:h-48 lg:h-52 flex items-center justify-center overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          <i className={`${icon} text-4xl sm:text-5xl lg:text-6xl text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300`}></i>
        </motion.div>
        
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0"></div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 lg:p-6 flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-gray-800 dark:text-gray-100 line-clamp-2 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-5 line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
            {techs.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium py-1 px-2 sm:px-3 rounded-full border border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex space-x-4 sm:space-x-5">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#" 
              className="flex items-center text-sm sm:text-base text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200 group/link"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="fab fa-github mr-1.5 sm:mr-2 group-hover/link:scale-110 transition-transform duration-200"></i>
              <span className="hidden sm:inline">GitHub</span>
              <span className="sm:hidden">Code</span>
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#" 
              className="flex items-center text-sm sm:text-base text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200 group/link"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="fas fa-external-link-alt mr-1.5 sm:mr-2 group-hover/link:scale-110 transition-transform duration-200"></i>
              <span>Demo</span>
            </motion.a>
          </div>

          {/* View Details Arrow */}
          <motion.div
            whileHover={{ x: 4 }}
            className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
          >
            <i className="fas fa-arrow-right text-sm sm:text-base"></i>
          </motion.div>
        </div>

        {/* Hover Effect Indicator */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </div>
    </motion.div>
  );
}