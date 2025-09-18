const socialMedia = [
  {
    href: 'https://www.linkedin.com/in/nhaathaoo-1b0075266/',
    iconClass: 'fab fa-linkedin-in',
    bg: 'bg-blue-600',
    hover: 'hover:bg-blue-700',
  },
  {
    href: 'https://github.com/Haoo-8',
    iconClass: 'fab fa-github',
    bg: 'bg-gray-800',
    hover: 'hover:bg-gray-900',
  },
//   {
//     href: 'https://twitter.com/your-handle',
//     iconClass: 'fab fa-twitter',
//     bg: 'bg-blue-400',
//     hover: 'hover:bg-blue-500',
//   },
  {
    href: 'https://www.facebook.com/vo.nhat.hao.564269',
    iconClass: 'fab fa-facebook-f',
    bg: 'bg-indigo-600',
    hover: 'hover:bg-indigo-700',
  },
//   {
//     href: 'https://instagram.com/your-handle',
//     iconClass: 'fab fa-instagram',
//     bg: 'bg-pink-600',
//     hover: 'hover:bg-pink-700',
//   },
];

export default function SocialLinks() {
  return (
    <div className="mt-16 text-center">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Kết Nối Với Tôi</h3>
      <div className="flex justify-center space-x-6 items-center">
        {socialMedia.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 ${item.bg} text-white aspect-square rounded-full flex items-center justify-center ${item.hover} transition`}
          >
            <i className={item.iconClass}></i>
          </a>
        ))}
      </div>
    </div>
  );
}
