import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Portfoliobackground from "./background/Portfoliobackground";
import useMove from "../hooks/hooks";
import useSize from "../hooks/useSize";

export default function App() {
  const { x, y, handleMouseMove } = useMove();
  const target = React.useRef(null);
  const size = useSize(target);

  return (
    <div
      ref={target}
      style={{ position: "relative", width: size?.width, height: 968 }}
      onMouseMove={handleMouseMove}
    >
      <Canvas shadows style={{ minHeight: "100%", minWidth: "100%" }}>
        <Suspense fallback={null}>
          <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
          <Portfoliobackground x={x} y={y} />
        </Suspense>
      </Canvas>
    </div>
  );
}
