import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";

import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import useMove from "../hooks/hooks";
import CVContent from "./CVContent";
import ContactContent from "./ContactContent";
import HomeContent from "./HomeContent";
import Sidebar from "./Sidebar";
import WebContent from "./WebContent";
import Portfoliobackground from "./background/Portfoliobackground";

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
  const router = useRouter();

  const viewMap = (query?: string | string[]) => {
    switch (query) {
      case "cv":
        return {
          title: "Skillset",
          subtitle: "Explore my toolbox!",
          content: <CVContent />,
        };
      case "contact":
        return {
          title: "Get in touch!",
          subtitle: "We are at 1 click distance!",
          content: <ContactContent />,
        };
      default:
        return {
          title: "Hi, I'm Pablo!",
          subtitle: "Let's build and launch something great together!",
          content: <HomeContent />,
        };
    }
  };

  const [layout, setLayout] = useState("desktop");

  useEffect(() => {
    setLayout(window?.innerWidth < 875 ? "mobile" : "desktop");
  }, [layout]);

  return (
    <ThemeProvider theme={theme}>
      <div
        ref={target}
        style={{
          width: layout == "desktop" ? "50%" : "100%",
          zIndex: 1,
          height: "100%",
          overflow: "scroll",
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
          onLoad={() => console.log("loaded")}
          onCompositionEnd={() => console.log("end")}
        >
          <Suspense>
            <Portfoliobackground x={x} y={y} />
          </Suspense>
        </Canvas>
      </div>
    </ThemeProvider>
  );
}
