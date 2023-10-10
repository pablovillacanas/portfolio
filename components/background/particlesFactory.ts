import * as THREE from "three";
import { ParticleProps } from "./Particle";

//z desde 3 a -10
//x de -10 a -1

const HEIGHT = 0.03;

export const verticalVector = new THREE.Vector3(-6, HEIGHT, 0.49)
  .clone()
  .sub(new THREE.Vector3(0.04, 0, 0.915));

export const horizontalVector = new THREE.Vector3(0.17, HEIGHT, -0.855).sub(
  new THREE.Vector3(0.04, 0, 0.915)
);

export const createParticles = (
  num: number
): Omit<ParticleProps, "intensity">[] => {
  const particles = [];
  for (let i = 0; i < num; i++) {
    const init = new THREE.Vector3(0, HEIGHT, 0)
      .clone()
      .add(new THREE.Vector3(0, 0, Math.random() * (3 - -10) + -10))
      .clone()
      .add(new THREE.Vector3(Math.random() * (-10 - -1) + -1));
    const direction = Math.random() > 0.5 ? "vertical" : "horizontal";
    const sense = Math.random() > 0.5 ? 1 : -1;
    let endPosition;
    if (direction === "vertical") {
      endPosition = init
        .clone()
        .add(verticalVector.clone().multiplyScalar(Math.random() * 2 * sense));
    } else {
      endPosition = init
        .clone()
        .add(
          horizontalVector.clone().multiplyScalar(Math.random() * 2 * sense)
        );
    }
    endPosition.y = HEIGHT;
    particles.push({
      initialPosition: init.toArray() as [number, number, number],
      endPosition: endPosition.toArray() as [number, number, number],
      vector: "vertical" as const,
    });
  }
  return particles;
};
