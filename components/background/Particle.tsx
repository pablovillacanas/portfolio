import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export interface ParticleProps {
  initialPosition: [number, number, number];
  endPosition: [number, number, number];
  vector: "horizontal" | "vertical";
}

const Particle = (props: ParticleProps) => {
  const particleRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      // Go from initial position to end position in 200ms and then delete the particle
      if (particleRef.current) {
        particleRef.current.position.lerp(
          new THREE.Vector3(...props.endPosition),
          6 * 0.001
        );
        if (
          particleRef.current.position.distanceTo(
            new THREE.Vector3(...props.endPosition)
          ) == 0
        ) {
          particleRef.current.parent?.remove(particleRef.current);
        }
      }
    };
    if (particleRef.current) {
      animate();
    }
  }, []);

  return (
    <mesh
      position={props.initialPosition}
      scale={[0.02, 0.02, 0.02]}
      ref={particleRef}
    >
      <sphereGeometry />
      <pointLight
        intensity={70}
        distance={0.7}
        power={70}
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />
      <meshStandardMaterial
        metalness={0}
        color={"#bea925"}
        emissive={"#bea925"}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

export default Particle;
