export default function Footer() {
  const links = [
    "about",
    "skill",
    "projects",
    "experience",
    "education",
    "contact",
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-6 md:mb-0">
            Dev<span className="text-blue-400">Portfolio</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center">
            {links.map((id) => (
              <a key={id} href={`#${id}`} className="hover:text-blue-400"></a>
            ))}
          </div>
        </div>
        <div className="mt-8pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; VÕ NHẬT HÀO. Tất cả các quyền được bảo lưu.</p>
          <p className="mt-2">
            Thiết kế với <i className="fas fa-heart text-red-500"></i> bởi VÕ
            NHẬT HÀO
          </p>
        </div>
      </div>
    </footer>
  );
}
