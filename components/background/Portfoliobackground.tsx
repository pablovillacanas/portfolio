/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useRef, useState } from "react";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Particle from "./Particle";
import { createParticles } from "./particlesFactory";
import { useTheme } from "styled-components";
import { CustomTheme } from "../App";

export default function Portfoliobackground(mousePosition: {
  x: number;
  y: number;
}) {
  const group = useRef(null);
  const { nodes, materials, animations } = useGLTF("/portfoliobackground.gltf");
  const { camera } = useThree();
  const [particles, setParticles] = useState(createParticles(20));
  const theme = useTheme() as CustomTheme;
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [key, _value] of Object.entries(actions)) {
      actions[key]?.play();
    }
    window.addEventListener("click", () => {
      setParticles(createParticles(20));
    });
  }, [mixer]);

  //TODO
  camera.lookAt(
    nodes.dummyobject.position.x + mousePosition.y / 5000,
    nodes.dummyobject.position.y,
    nodes.dummyobject.position.z + mousePosition.x / 5000
  );

  (mousePosition.x || mousePosition.y) &&
    camera.position.set(
      8.17 + Math.cos((mousePosition.x * 2) / window.innerWidth - 1),
      3.63 + Math.cos((mousePosition.y * 2) / window.innerHeight - 1),
      4.02 + Math.sin((mousePosition.x * 2) / window.innerWidth - 1) * 6
    );

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <directionalLight
          position={[10.63, 6.35, -5.61]}
          rotation={[-1.84, 0.6, 1.93]}
          scale={[1, 1, 1]}
          intensity={theme.darkModeEnabled ? 0.3 : 0.8}
          castShadow={!theme.darkModeEnabled}
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
        />
        {particles.map((particle) => (
          <Particle
            key={particle.initialPosition.toString()}
            initialPosition={particle.initialPosition}
            endPosition={particle.endPosition}
            vector={particle.vector}
            intensity={theme.darkModeEnabled ? 70 : 60}
          />
        ))}
        <group
          name="dummyobject"
          position={[-6.9, 0.32, 1.09]}
          rotation={[-0.38, 1.49, -2.74]}
          scale={[1.18, 0.04, 8.42]}
        />
        <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={100}
          near={1}
          fov={35.86}
          position={[8.17, 3.63, 4.02]}
          rotation={[-0.81, 1.13, 0.76]}
          scale={[3.33, 2.76, 4.88]}
        />
        <mesh
          name="stack2"
          geometry={(nodes.stack2 as any).geometry}
          material={materials.Opaque}
          position={[0, 0.63, -0.11]}
          rotation={[-0.02, 1.49, -3.13]}
          scale={2.89}
          castShadow={true}
          receiveShadow
        />
        <mesh
          name="stack1-2"
          geometry={(nodes["stack1-2"] as any).geometry}
          material={materials.Opaque}
          position={[0, 1.33, -0.12]}
          rotation={[0, 1.5, 3.13]}
          scale={2.89}
          castShadow={true}
          receiveShadow
        />
        <mesh
          name="stack1-1"
          geometry={(nodes["stack1-1"] as any).geometry}
          material={materials.Transparent}
          position={[0, 1.57, -0.12]}
          rotation={[0.23, 1.49, 2.91]}
          scale={2.89}
          castShadow={true}
        />
        <mesh
          name="Corner"
          geometry={(nodes.Corner as any).geometry}
          material={materials.Transparent}
          position={[0.66, 2.26, 0.28]}
          rotation={[-0.38, 1.49, -2.74]}
          scale={2.89}
          castShadow={true}
        />
        <mesh
          name="float2"
          geometry={(nodes.float2 as any).geometry}
          material={materials.Transparent}
          position={[0.45, 1.81, -1]}
          rotation={[-0.38, 1.49, -2.74]}
          scale={2.89}
        />
        <mesh
          name="Smallside"
          geometry={(nodes.Smallside as any).geometry}
          material={materials.Transparent}
          position={[0.78, 2.39, -0.44]}
          rotation={[0.06, 1.39, 3.12]}
          scale={2.89}
        />
        <mesh
          name="leftfloat"
          geometry={(nodes.leftfloat as any).geometry}
          material={materials.Transparent}
          position={[0, 2.1, 0.43]}
          rotation={[-0.38, 1.49, -2.74]}
          scale={2.89}
          castShadow={true}
        />
        <mesh
          name="cover1"
          geometry={(nodes.cover1 as any).geometry}
          material={materials.Transparent}
          position={[0, 2.37, -0.06]}
          rotation={[-0.4, 1.49, -2.74]}
          scale={2.89}
          castShadow={true}
        />
        <mesh
          name="cover2"
          geometry={(nodes.cover2 as any).geometry}
          material={materials.Transparent}
          position={[0, 1.99, -0.11]}
          rotation={[-0.5, 1.47, 0.49]}
          scale={2.89}
          castShadow={true}
        />
        <mesh
          name="float3"
          geometry={(nodes.float3 as any).geometry}
          material={materials.Transparent}
          position={[-0.26, 1.79, -0.67]}
          rotation={[0.04, -0.09, 0]}
          scale={2.89}
          castShadow={true}
        />
        <mesh
          name="curverside"
          geometry={(nodes.curverside as any).geometry}
          material={materials.Transparent}
          renderOrder={1}
          position={[-0.22, 1.81, 0]}
          rotation={[-0.5, 1.47, 0.49]}
          scale={2.89}
          castShadow={true}
        />
        <mesh
          name="gridplane"
          geometry={(nodes.gridplane as any).geometry}
          material={materials.Gridplane}
          position={[-10.71, 0, 0.455]}
          rotation={[0, -0.07, 0]}
          scale={[15, 1, 15]}
          receiveShadow
        />
        <mesh
          name="gridplane"
          geometry={(nodes.gridplane as any).geometry}
          material={materials.Gridplane}
          position={[-20.71, 0, 0.64]}
          rotation={[0, -0.07, 0]}
          scale={[15, 1, 15]}
          receiveShadow
        />
        <mesh
          name="gridplane"
          geometry={(nodes.gridplane as any).geometry}
          material={materials.Gridplane}
          position={[-10.66, 0, -12.93]}
          rotation={[0, -0.07, 0]}
          scale={[15, 1, 15]}
          receiveShadow
        />
        <mesh
          name="gridplane"
          geometry={(nodes.gridplane as any).geometry}
          material={materials.Gridplane}
          position={[-20.66, 0, -12.93]}
          rotation={[0, -0.07, 0]}
          scale={[15, 1, 15]}
          receiveShadow
        />
        <mesh
          name="gridplane"
          geometry={(nodes.gridplane as any).geometry}
          material={materials.Gridplane}
          position={[-30.66, 0, -22.93]}
          rotation={[0, -0.07, 0]}
          scale={[15, 1, 15]}
          receiveShadow
        />
        <mesh
          name="gridplane"
          geometry={(nodes.gridplane as any).geometry}
          material={materials.Gridplane}
          position={[-19.46, 0, -27.73]}
          rotation={[0, -0.07, 0]}
          scale={[15, 1, 15]}
          receiveShadow
        />
        <mesh
          name="gridplane"
          geometry={(nodes.gridplane as any).geometry}
          material={materials.Gridplane}
          position={[16.15, 0, -2.12]}
          rotation={[0, -0.07, 0]}
          scale={[15, 1, 15]}
          receiveShadow
        />
        <mesh
          name="gridplane"
          geometry={(nodes.gridplane as any).geometry}
          material={materials.Gridplane}
          position={[-17.5, 0, 8.45]}
          rotation={[0, -0.07, 0]}
          scale={[15, 1, 15]}
          receiveShadow
        />
      </group>
    </group>
  );
}
useGLTF.preload("/portfoliobackground.gltf");
