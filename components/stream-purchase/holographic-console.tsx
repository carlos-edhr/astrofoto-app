"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { OrbitControls } from "@react-three/drei";
import { Card } from "../ui/card";

// Holographic material shader
const HolographicConsoleMaterial = () => {
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
        gl_FragColor = vec4(0.2, 0.8, 0.4, 1.0) * intensity;
      }
    `,
  };
  return shader;
};

// 3D Console Model
const Console = () => {
  const consoleRef = useRef<Mesh>(null);

  // Continuous rotation of the console
  useFrame(() => {
    if (consoleRef.current) {
      consoleRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={consoleRef}>
      <boxGeometry args={[3, 2, 0.2]} />
      <shaderMaterial attach="material" args={[HolographicConsoleMaterial()]} />
    </mesh>
  );
};

const HolographicConsole = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-[450px] h-[350px] p-4 backdrop-blur-md bg-opacity-20 bg-white/10 border border-gray-700 shadow-lg">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Console />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </Card>
    </div>
  );
};

export default HolographicConsole;
