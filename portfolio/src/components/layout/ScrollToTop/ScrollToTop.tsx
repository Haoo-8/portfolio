import { useScrollPosition } from "../../../hooks/index";

export default function ScrollToTop() {
  const { y } = useScrollPosition();

  return (
    <>
      {y > 300 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 shadow-lg"
        >
          <i className="fas fa-arrow-up text-blue-600"></i>
        </button>
      )}
    </>
  );
}
