"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import { Card } from "../ui/card";

// Holographic effect material using shaders
const HolographicMaterial = () => {
  const shader = {
    uniforms: {},
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vNormal;
      void main() {
        float intensity = pow(0.9 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        gl_FragColor = vec4(0.2, 0.8, 1.0, 1.0) * intensity;
      }
    `,
  };
  return shader;
};

const Earth = () => {
  const earthRef = useRef<Mesh>(null);

  // Rotate the Earth
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <shaderMaterial attach="material" args={[HolographicMaterial()]} />
    </mesh>
  );
};

const HolographicEarth = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <Card className="w-[400px] h-[400px] p-4 backdrop-blur-md bg-opacity-20 bg-white/10 border border-gray-700 shadow-lg">
        <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Earth />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
          />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </Card>
    </div>
  );
};

export default HolographicEarth;
