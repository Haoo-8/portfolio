import { useState } from "react";

interface DownloadCVButtonProps {
  cvPath?: string;
}

export default function DownloadCVButton({
  cvPath = "/VoNhatHao_CV_ThucTapSinhIT.pdf",
}: DownloadCVButtonProps) {
  const [downloadCount, setDownloadCount] = useState(0);

  const handleDownload = () => {
    setDownloadCount((prev) => prev + 1);
    console.log(`CV downloaded ${downloadCount + 1} times`);
  };

  return (
    <div className="flex space-x-3">
      {/* Xem CV */}
      <a
        href={cvPath}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 px-6 py-3 rounded-lg hover:text-gray-700 transition"
      >
        {" "}
        Xem CV
      </a>
      <a
        href={cvPath}
        download
        onClick={handleDownload}
        className="text-gray-300 px-6 py-3 rounded-lg hover:text-gray-700 transition"
      >
        Tải CV
      </a>
      {/* Badge hiển thị số lượt tải */}
        {downloadCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
            {downloadCount}
          </span>
        )}

    </div>
  );
}
