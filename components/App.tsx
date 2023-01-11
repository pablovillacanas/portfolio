import React, { useState } from "react";
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

export interface CustomTheme {
  colors: {
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
  const [view, setView] = useState<"home" | "contact" | "cv">("home");

  const viewMap = {
    home: {
      title: "Hi, I'm Pablo!",
      subtitle: "Know me a little bit more :)",
      content: <HomeContent />,
    },
    contact: {
      title: "Contact me!",
      subtitle: "We are at 1 click distance!",
      content: <ContactContent />,
    },
    cv: {
      title: "Skillset!",
      subtitle: "Let's make amazing things together!",
      content: <CVContent />,
    },
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
        }}
      >
        <Sidebar onClick={setView} />
        <WebContent
          title={viewMap[view].title}
          subtitle={viewMap[view].subtitle}
        >
          <div
            style={{
              color: "white",
              fontSize: "1.1em",
              borderRadius: "8px",
            }}
          >
            {viewMap[view].content}
          </div>
        </WebContent>
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
