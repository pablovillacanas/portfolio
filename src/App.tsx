import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import "./styles.css";
import Portfoliobackground from "./background/Portfoliobackground";
import useMove from "./hooks";

export default function App() {
  const { x, y, handleMouseMove } = useMove();

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <Canvas shadows>
        <Suspense fallback={null}>
          <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
          <Portfoliobackground x={x} y={y} />
        </Suspense>
      </Canvas>
    </div>
  );
}
