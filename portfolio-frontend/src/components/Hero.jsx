import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";

function FloatingTechShape() {
  const mesh = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    mesh.current.rotation.x = elapsed / 2;
    mesh.current.rotation.y = elapsed / 3;
    mesh.current.position.y = Math.sin(elapsed) * 0.2;
  });

  return (
    <mesh ref={mesh} scale={1.5}>
      <dodecahedronGeometry args={[1, 0]} />
      <MeshDistortMaterial
        color="#ef4444"

        distort={0.4}
        speed={2}
        roughness={0.1}
        metalness={0.7}
      />
    </mesh>
  );
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse move handler - normalized to range [-1, 1]
  function handleMouseMove(e) {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    setMousePos({ x, y });
  }

  // Calculate rotation and shadow offsets based on mouse position
  // Adjust these values to control intensity of effects
  const rotateX = mousePos.y * 10; // max 10deg rotation on X axis
  const rotateY = mousePos.x * 15; // max 15deg rotation on Y axis
  const shadowX = mousePos.x * 20;
  const shadowY = mousePos.y * 20;

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-8 bg-gradient-to-tr from-purple-900 via-indigo-900 to-black overflow-hidden"
    >
      {/* Background subtle animated tech lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="pattern-lines"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="40" stroke="#9f7aea" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern-lines)" />
      </svg>

      {/* Text container */}
      <div
        style={{
          transform: `perspective(800px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.1s ease-out",
          boxShadow: `${shadowX}px ${shadowY}px 30px rgba(128, 0, 255, 0.5)`,
        }}
        className="bg-gradient-to-r from-purple-800 to-indigo-900 rounded-3xl p-12 max-w-4xl text-center text-white shadow-lg select-none"
      >
        <h1
          style={{
            textShadow: `${-shadowX / 2}px ${-shadowY / 2}px 10px rgba(255,255,255,0.7)`,
            transition: "text-shadow 0.1s ease-out",
          }}
          className="text-6xl font-extrabold mb-6"
        >
          Hi, I'm Robiul Hasan Jisan
        </h1>
        <p className="text-xl font-light tracking-wide">
          Web Developer | Tech Enthusiast
        </p>
        <button
          onClick={() => window.location.href = "#contact"}
          className="mt-10 px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition"
        >
          Contact Me
        </button>
      </div>

      {/* 3D canvas */}
      <div className="w-72 h-72 md:w-96 md:h-96 mt-16 md:mt-0 md:ml-16 z-10">
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[3, 3, 5]} intensity={1.5} />
          <FloatingTechShape />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
      </div>

      {/* Overlay subtle gradient shadow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black pointer-events-none" />
    </section>
  );
}
