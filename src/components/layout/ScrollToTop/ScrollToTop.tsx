import { useScrollPosition } from "../../../hooks/index";

export default function ScrollToTop() {
  const { y } = useScrollPosition();

  return (
    <>
      {y > 300 && (
        <a
          href="#top"
          className="back-to-top active"
          data-back-to-top=""
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          BACK TOP
        </a>
      )}
    </>
  );
}
