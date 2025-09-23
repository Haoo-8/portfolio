const socialMedia = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nhaathaoo-1b0075266/',
    iconClass: 'fab fa-linkedin-in',
    description: 'Professional network'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Haoo-8',
    iconClass: 'fab fa-github',
    description: 'Code repositories'
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/vo.nhat.hao.564269',
    iconClass: 'fab fa-facebook-f',
    description: 'Social connection'
  },
];

export default function SocialLinks() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl mb-4 md:text-5xl font-bold text-[var(--color-text)] typing-text">
            Let's Connect
          </h2>
          <div className="w-60 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 shimmer-bar"></div>
          <p className="text-[var(--color-text)] max-w-2xl mx-auto leading-relaxed">
            Hãy kết nối và trao đổi về công nghệ, dự án hoặc cơ hội hợp tác
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {socialMedia.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <i className={`${item.iconClass} text-2xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300`}></i>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {item.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {item.description}
                </p>
                
                {/* Arrow indicator */}
                <div className="flex items-center text-blue-500 font-medium text-sm">
                  <span className="mr-2">Connect</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Có dự án thú vị?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
              Tôi luôn sẵn sàng thảo luận về những ý tưởng mới và cơ hội hợp tác
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:your-email@example.com"
                className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a>
              
              <a 
                href="tel:+84-your-phone"
                className="inline-flex items-center px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-full transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}