import { useEffect, useRef } from "react";

/** Thin amber progress bar pinned to the top, tracking page scroll. */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      const ratio = scrollable > 0 ? h.scrollTop / scrollable : 0;
      el.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div ref={ref} className="scrollProgress" />;
}
