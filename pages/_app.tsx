import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
import "@/styles/globals.css";

const MAIN_ROUTES = ["/", "/cv", "/freelance", "/print-cv"];

const variants = {
  initial: (dir: number) => ({
    x: dir > 0 ? "60%" : dir < 0 ? "-8%" : 0,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-8%" : dir < 0 ? "60%" : 0,
    opacity: 0,
  }),
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const prevPath = useRef(router.pathname);
  const dir = useRef(0);

  useEffect(() => {
    const handleStart = (url: string) => {
      const next = url.split("?")[0];
      const fromMain = MAIN_ROUTES.includes(prevPath.current);
      const toMain = MAIN_ROUTES.includes(next);
      if (fromMain && !toMain) dir.current = 1;
      else if (!fromMain && toMain) dir.current = -1;
      else dir.current = 0;
      prevPath.current = next;
    };
    router.events.on("routeChangeStart", handleStart);
    return () => router.events.off("routeChangeStart", handleStart);
  }, [router.events]);

  return (
    <>
      <AnimatePresence mode="wait" custom={dir.current}>
        <motion.div
          key={router.pathname}
          custom={dir.current}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Analytics />
    </>
  );
}
