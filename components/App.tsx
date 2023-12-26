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
import LightDarkModeToggle from "./atoms/LightDarkModeToggle";

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
  darkModeEnabled?: boolean;
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
  darkModeEnabled: false,
};

export default function App() {
  const { x, y, handleMouseMove } = useMove();
  const target = React.useRef(null);
  const router = useRouter();
  const [layout, setLayout] = useState("desktop");
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

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

  useEffect(() => {
    setLayout(window?.innerWidth < 875 ? "mobile" : "desktop");
  }, [layout]);

  return (
    <ThemeProvider theme={{ ...theme, darkModeEnabled: darkModeEnabled }}>
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
          background: `${
            layout == "mobile" ? theme.colors.background : "transparent"
          }`,
        }}
        onMouseMove={handleMouseMove}
      >
        <Sidebar />
        {layout == "desktop" && (
          <div style={{ position: "fixed", top: "0em", right: "1em" }}>
            <LightDarkModeToggle
              darkModeEnabled={darkModeEnabled}
              onToggle={() => setDarkModeEnabled(!darkModeEnabled)}
            />
          </div>
        )}
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
            Made with ❤️ by Pablo Domínguez Villacañas
          </span>
          <span style={{ fontSize: "0.8em", paddingRight: "1em" }}>
            See the code on{" "}
            <a href="https://github.com/pablovillacanas/portfolio">Github</a>.
            Deployed on Vercel
          </span>
        </div>
      </div>
      {layout == "desktop" && (
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
      )}
    </ThemeProvider>
  );
}
