import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Portfoliobackground from "./background/Portfoliobackground";
import useMove from "../hooks/hooks";
import useSize from "../hooks/useSize";
import { ThemeProvider } from "styled-components";
import Sidebar from "./Sidebar";
import WebContent from "./WebContent";
import hexToRgba from "hex-to-rgba";

const theme = {
  colors: {
    primary: "#042940",
    primaryVariant: "#005C53",
    secondary: "#9FC131",
    radiactiveYellow: "#DBF227",
    terciary: "#D6D58E",
  },
  fonts: {
    material: "Roboto",
    default: "Montserrat",
  },
};

export default function App() {
  const { x, y, handleMouseMove } = useMove();
  const target = React.useRef(null);
  const size = useSize(target);

  console.log("size.height", size.height);

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
        <Sidebar />
        <WebContent
          title={"Hi, I'm Pablo!"}
          subtitle={"Let's make amazing things together!"}
        >
          <div
            style={{
              color: "white",
              padding: "1em",
              borderRadius: "8px",
            }}
          >
            <p>
              After four years studying Psychology at the University of Santiago
              de Compostela and successfully graduating, I decided to reorient
              my professional career towards my true passion: software
              development.
            </p>
            <p>
              It was not the first time that I was faced with a source code.
              Since I was young, I stood out in technology subjects and
              specifically in those that had to do with programming. After a
              career that did not give me professional opportunities, but that
              served me for many other things (group work, research, etc.) I
              decided to try my luck with an extensive Java course.
            </p>
            <p>
              Since then I have been researching and perfecting my skills in
              this field. I am currently studying Cross-Platform Application
              Development with the intention of officially certifying my
              knowledge, but before that, I have independently invested hundreds
              of hours in learning various technologies and getting used to
              them, with special emphasis on the aforementioned Java language,
              which It has allowed me to obtain several official certifications.
            </p>
            <p>
              Aparte de los estudios reglados que estoy realizando con buenos
              resultados, no dejo de intentar aprender nuevas tecnologías, desde
              la administracion de sistemas Linux hasta frameworks como Spring y
              otros entornos de desarrollo como Node, por poner algunos
              ejemplos.
            </p>
            <p>
              Actualmente trabajo en Situm, una empresa enfocada en soluciones
              en localización precisa de activos móviles en interiores, donde
              estoy mejorando todos los días en mis aptitudes como
              desarrollador, tanto desde la perspectiva técnica como de análisis
              y trabajo en equipo.
            </p>{" "}
          </div>
        </WebContent>
      </div>
      <div
        style={{
          position: "relative",
          height: "100%",
        }}
        onMouseMove={handleMouseMove}
      >
        <Canvas
          shadows
          style={{ minHeight: "100%", minWidth: "100%" }}
          id="canvasback"
        >
          <Suspense fallback={null}>
            <Portfoliobackground x={x} y={y} />
          </Suspense>
        </Canvas>
      </div>
    </ThemeProvider>
  );
}
