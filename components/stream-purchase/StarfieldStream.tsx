"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";

const Stars = () => {
  const starGeometry = new THREE.BufferGeometry();
  const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });

  // Create 1000 stars with random positions
  const starVertices = new Float32Array(1000 * 3);
  for (let i = 0; i < 1000; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = -Math.random() * 2000;
    starVertices[i * 3] = x;
    starVertices[i * 3 + 1] = y;
    starVertices[i * 3 + 2] = z;
  }

  starGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(starVertices, 3),
  );

  const pointsRef = useRef<THREE.Points>(null);

  // Animate the stars moving upward
  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
      pointsRef.current.position.y += 0.1; // Move stars upward

      // Reset stars' position after they go too far upward
      if (pointsRef.current.position.y > 1000) {
        pointsRef.current.position.y = -1000;
      }
    }
  });

  return (
    <points ref={pointsRef} geometry={starGeometry} material={starMaterial} />
  );
};

const StarfieldStream = () => {
  return (
    <div className="w-screen h-auto bg-bunkerBlue fixed inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1000], fov: 75 }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarfieldStream;
