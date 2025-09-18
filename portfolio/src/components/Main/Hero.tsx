import "../../styles/components/hero.css";
import TypingText from "../TypingText/TypingText";

export default function Hero() {
  return (
    <section id="about" className="section bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          {/*Left Content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Xin chào, tôi là
              <span className="text-blue-600"> VÕ NHẬT HÀO</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              <TypingText
                texts={[
                  "Lập Trình Viên Website & Mobile App",
                  "Yêu thích Flutter & Python",
                  "Sống chết vì UI/UX 🎨",
                ]}
                speed={120}
                deleteSpeed={50}
                pauseTime={5000}
                loop
              />
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Tôi chuyên phát triển các ứng dụng web và mobile với Flutter,
              Python và các công nghệ hiện đại. Với đam mê về lập trình và giải
              quyết vấn đề, tôi luôn nỗ lực tạo ra những sản phẩm chất lượng cao
              và trải nghiệm người dùng tuyệt vời.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Liên Hệ Ngay
              </a>
              <a
                href="#projects"
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
              >
                Xem Dự Án
              </a>
            </div>
          </div>
          {/*Right Avatar */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-blue-100 rounded-full flex justify-center items-center shadow-lg">
              {/* <div className="text-8xl text-blue-600">
                <i className="fas fas-user-circle"></i>
              </div> */}
              <img
                src="/avatar.png"
                alt="Profile"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
