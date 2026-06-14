import { useEffect, useRef, useState, ReactNode, ElementType } from "react";

type RevealVariant = "rise" | "rise-lg" | "fade";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  /** Stagger delay in ms, e.g. for items inside a grid/list */
  delay?: number;
  /** Element type to render, defaults to "div" */
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

const variantClass: Record<RevealVariant, string> = {
  rise: "reveal",
  "rise-lg": "reveal revealLg",
  fade: "reveal revealFade",
};

/**
 * Wraps content and fades/slides it in once it enters the viewport,
 * using IntersectionObserver. Falls back to always-visible if the
 * browser doesn't support it or the user prefers reduced motion.
 */
export default function ScrollReveal({
  children,
  variant = "rise",
  delay = 0,
  as: Tag = "div",
  className = "",
  style,
  id,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = [variantClass[variant], visible ? "revealVisible" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref}
      id={id}
      className={classes}
      style={{ ...style, ["--reveal-delay" as any]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
