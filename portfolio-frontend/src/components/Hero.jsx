import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";

function FloatingTechShape() {
  const mesh = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = elapsed / 2;
      mesh.current.rotation.y = elapsed / 3;
      mesh.current.position.y = Math.sin(elapsed) * 0.2;
    }
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  function handleMouseMove(e) {
    if (isMobile) return;
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    setMousePos({ x, y });
  }

  const rotateX = mousePos.y * 10;
  const rotateY = mousePos.x * 15;
  const shadowX = mousePos.x * 20;
  const shadowY = mousePos.y * 20;

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="
        relative flex flex-col md:flex-row 
        items-center justify-center 
        h-[66vh] sm:h-[70vh] md:min-h-screen 
        px-4 md:px-8 
        bg-gradient-to-tr from-purple-900 via-indigo-900 to-black 
        overflow-hidden"
    >
      {/* Background pattern lines */}
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
          transform: isMobile
            ? "none"
            : `perspective(800px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.1s ease-out",
          boxShadow: isMobile
            ? "none"
            : `${shadowX}px ${shadowY}px 30px rgba(128, 0, 255, 0.5)`,
        }}
        className="w-full md:max-w-4xl bg-gradient-to-r from-purple-800 to-indigo-900 rounded-3xl p-6 md:p-12 text-center text-white shadow-lg select-none"
      >
       <h1
  style={{
    textShadow: isMobile
      ? "none"
      : `
        0 1px 3px rgba(255,255,255,0.5), 
        0 4px 10px rgba(128,0,255,0.5),
        ${-shadowX / 2}px ${-shadowY / 2}px 20px rgba(255,255,255,0.6)
      `,
    transition: "text-shadow 0.3s ease, transform 0.3s ease",
    transform: isMobile ? "none" : `scale(1.02)`,
  }}
  className="text-3xl md:text-6xl font-extrabold mb-4 md:mb-6 
             bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
             bg-clip-text text-transparent 
             animate-pulse select-none"
>
  Hi, I'm Robiul Hasan Jisan
</h1>

<p
  className="text-base md:text-xl font-light tracking-wide text-white/80
             animate-fade-in delay-300 duration-1000"
>
  Web Developer | Tech Enthusiast
</p>

        <button
          onClick={() => window.location.href = "#contact"}
          className="mt-6 md:mt-10 px-6 py-2 md:px-8 md:py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition"
        >
          Contact Me
        </button>
      </div>

      {/* 3D canvas */}
      <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-96 md:h-96 mt-8 md:mt-0 md:ml-16 z-10">
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[3, 3, 5]} intensity={1.5} />
          <FloatingTechShape />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
      </div>

      {/* Overlay shadow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black pointer-events-none" />
    </section>
  );
}
