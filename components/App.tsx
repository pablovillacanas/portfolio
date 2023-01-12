import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Portfoliobackground from "./background/Portfoliobackground";
import useMove from "../hooks/hooks";
import { ThemeProvider } from "styled-components";
import Sidebar from "./Sidebar";
import WebContent from "./WebContent";
import HomeContent from "./HomeContent";
import ContactContent from "./ContactContent";
import CVContent from "./CVContent";
import { useRouter } from "next/router";

export interface CustomTheme {
  colors: {
    background: string;
    primary: string;
    primaryVariant: string;
    secondary: string;
    radiactiveYellow: string;
    terciary: string;
    text: string;
  };
  fonts: {
    material: string;
    default: string;
  };
}

const theme: CustomTheme = {
  colors: {
    background: "#010024",
    primary: "#042940",
    primaryVariant: "#005C53",
    secondary: "#9FC131",
    radiactiveYellow: "#DBF227",
    terciary: "#D6D58E",
    text: "#dddddd",
  },
  fonts: {
    material: "Roboto",
    default: "Montserrat",
  },
};

export default function App() {
  const { x, y, handleMouseMove } = useMove();
  const target = React.useRef(null);
  // const [view, setView] = useState<"home" | "contact" | "cv">("home");
  const router = useRouter();

  const viewMap = (query?: string | string[]) => {
    switch (query) {
      case "cv":
        return {
          title: "Skillset!",
          subtitle: "Let's make amazing things together!",
          content: <CVContent />,
        };
      case "contact":
        return {
          title: "Contact me!",
          subtitle: "We are at 1 click distance!",
          content: <ContactContent />,
        };
      default:
        return {
          title: "Hi, I'm Pablo!",
          subtitle: "Get to know me a little better :D",
          content: <HomeContent />,
        };
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        ref={target}
        style={{
          width: "50%",
          zIndex: 1,
          height: "100%",
          position: "absolute",
          display: "flex",
          gap: "2em",
          color: theme.colors.text,
          background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(2,0,36,1) ${
            x / 35 + 35
          }%, rgba(0,212,255,0) 100%)`,
        }}
        onMouseMove={handleMouseMove}
      >
        <Sidebar />
        <WebContent
          title={viewMap(router.query.section).title}
          subtitle={viewMap(router.query.section).subtitle}
        >
          <div
            style={{
              color: "white",
              fontSize: "1.1em",
              borderRadius: "8px",
            }}
          >
            {viewMap(router.query.section).content}
          </div>
        </WebContent>
        <div
          style={{
            width: "100%",
            height: "30px",
            position: "fixed",
            bottom: "0px",
            textAlign: "right",
          }}
        >
          <span style={{ fontSize: "0.8em", paddingRight: "1em" }}>
            See the code on{" "}
            <a href="https://github.com/pablovillacanas/portfolio">Github</a>.
            Deployed on Vercel
          </span>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          height: "100%",
          backgroundColor: "#041327",
        }}
        onMouseMove={handleMouseMove}
      >
        <Canvas
          shadows
          style={{
            minHeight: "100%",
            minWidth: "100%",
          }}
          id="canvasback"
        >
          <Suspense>
            <Portfoliobackground x={x} y={y} />
          </Suspense>
        </Canvas>
      </div>
    </ThemeProvider>
  );
}
