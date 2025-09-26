import { useEffect, useRef, useState } from "react";

export function useReveal<T extends HTMLElement>() {
  const itemRefs = useRef<(T | null)[]>([]);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(index));
            observer.unobserve(entry.target); // chỉ trigger 1 lần
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((el, i) => {
      if (el) {
        el.setAttribute("data-index", i.toString());
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return { itemRefs, visibleItems };
}
