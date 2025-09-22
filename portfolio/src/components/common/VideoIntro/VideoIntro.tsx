
export default function VideoIntro() {
  return (
    <section
      id="video-intro"
      className="py-16 bg-gray-50 flex flex-col items-center"
    >
      <div className="relative w-full h-screen overflow-hidden">
       
          <video src="/Cupids Love Arrow Opener_free.mp4" controls width="100%" autoPlay muted loop className="absolute top-- left-0 w-full h-full object-cover z-0">Trình duyệt của bạn không hỗ trợ video.</video>
      </div>
    </section>
  );
}
