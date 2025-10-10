import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  const subtitles = ["Tech Enthusiast", "Web Developer", "AI/ML Developer"];

  // Rotate subtitles
  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mouse movement for 3D tilt
  const handleMouseMove = (e) => {
    if (isMobile) return;
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    setMousePos({ x, y });
  };

  const [lerpPos, setLerpPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const id = requestAnimationFrame(function animate() {
      setLerpPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.1,
        y: prev.y + (mousePos.y - prev.y) * 0.1,
      }));
      requestAnimationFrame(animate);
    });
    return () => cancelAnimationFrame(id);
  }, [mousePos]);

  const rotateX = lerpPos.y * 10;
  const rotateY = lerpPos.x * 15;
  const shadowX = lerpPos.x * 20;
  const shadowY = lerpPos.y * 20;

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative flex flex-col items-center justify-center h-[70vh] px-4 md:px-8 overflow-hidden"
      style={{ backgroundColor: "#7AB1D3" }} // main color applied
    >
      {/* Particle background */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            className="absolute block w-2 h-2 bg-white/40 rounded-full animate-float-fast"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Floating shapes */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 flex flex-col gap-4 pointer-events-none select-none z-10">
        <div
          className="w-8 h-8 rounded-full bg-white/30 animate-float-spin shadow-lg shadow-white/40"
        ></div>
        <div
          className="w-6 h-6 bg-white/20 animate-float-spin-reverse shadow-lg shadow-white/30 rounded-md"
        ></div>
        <div
          className="w-4 h-4 rounded-full bg-white/10 animate-float-bounce shadow-md shadow-white/20"
        ></div>
      </div>

      {/* Hero Card */}
      <motion.div
        style={{
          transform: isMobile
            ? "none"
            : `perspective(800px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`,
          boxShadow: isMobile
            ? "0 8px 30px rgba(0,0,0,0.3)"
            : `${shadowX}px ${shadowY}px 30px rgba(0,0,0,0.3)`,
        }}
        className="relative w-full md:max-w-4xl bg-white/20 rounded-3xl p-6 md:p-12 text-center text-white shadow-lg backdrop-blur-sm z-10"
      >
        <h1 className="text-3xl md:text-6xl font-extrabold mb-4 md:mb-6 text-white">
          Hi, I'm Robiul Hasan Jisan
        </h1>

        <AnimatePresence mode="wait">
          <motion.p
            key={subtitleIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-base md:text-xl font-light tracking-wide text-white/90"
          >
            {subtitles[subtitleIndex]}
          </motion.p>
        </AnimatePresence>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(255,255,255,0.5)",
          }}
          className="relative mt-6 md:mt-10 px-6 py-2 md:px-8 md:py-3 bg-white/30 hover:bg-white/50 rounded-full font-semibold transition text-white"
          onClick={() => (window.location.href = "#contact")}
        >
          Contact Me
        </motion.button>
      </motion.div>

      {/* Floating corner badges */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Top-left quote */}
        <div className="absolute top-4 left-4">
          <span className="inline-block text-xs sm:text-sm md:text-base font-mono text-white/80 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/30 shadow-lg animate-pulse-slow">
            ❝ First, solve the problem. Then, write the code. ❞
          </span>
        </div>

        {/* Bottom-right tip */}
        <div className="absolute bottom-4 right-4">
          <div className="px-4 py-2 text-sm md:text-base font-medium text-white rounded-xl shadow-lg bg-white/20 border border-white/30 backdrop-blur-md">
            💡 A code a day keeps an error away.
          </div>
        </div>
      </div>
    </section>
  );
}
