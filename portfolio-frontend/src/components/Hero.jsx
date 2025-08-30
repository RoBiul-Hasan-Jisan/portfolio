import React, { useEffect, useState } from "react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    setMousePos({ x, y });
  };

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
        h-[66.6667vh] 
        px-4 md:px-8 
        bg-gradient-to-tr from-cyan-950 via-blue-950 to-indigo-950
        overflow-hidden
      "
    >
      {/* Animated Aurora Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent animate-aurora" />
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-600/20 via-transparent to-transparent animate-aurora delay-1000" />
      </div>

      {/* Left-middle moving shapes */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 flex flex-col gap-4 pointer-events-none select-none z-10">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 animate-float-spin shadow-lg shadow-purple-700/40"></div>
        <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 via-blue-400 to-indigo-500 animate-float-spin-reverse shadow-lg shadow-cyan-700/40 rounded-md"></div>
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-float-bounce shadow-md shadow-green-600/40"></div>
      </div>

      {/* Corner badges */}
      <div className="pointer-events-none select-none z-20">
        {/* Top-left */}
        <div className="absolute top-3 left-3">
          <span
            className="inline-block text-[10px] sm:text-xs md:text-sm font-mono tracking-tight 
            text-emerald-200 bg-gradient-to-r from-[#0f2027]/70 via-[#203a43]/60 to-[#2c5364]/70
            backdrop-blur-md rounded-lg px-3 py-1.5 border border-emerald-400/30 
            shadow-lg shadow-emerald-900/40 transition-all duration-500 ease-in-out
            hover:scale-[1.1] hover:shadow-emerald-400/60 hover:border-emerald-400/40
            animate-pulse-slow"
          >
            ❝ First, solve the problem. Then, write the code. ❞
          </span>
        </div>

        {/* Top-right */}
        <div className="absolute top-3 right-3">
          <div
            className="relative flex items-center gap-2 px-4 py-2
            text-[11px] sm:text-sm md:text-base font-mono text-emerald-300
            rounded-xl shadow-lg bg-gradient-to-br from-emerald-900/40 to-black/40
            border border-emerald-400/30 backdrop-blur-md
            transition-all duration-500 hover:scale-[1.05] hover:shadow-emerald-400/40"
          >
            <div className="flex gap-1 absolute top-1.5 left-2">
              <span className="w-2 h-2 rounded-full bg-red-400/70"></span>
              <span className="w-2 h-2 rounded-full bg-yellow-400/70"></span>
              <span className="w-2 h-2 rounded-full bg-green-400/70"></span>
            </div>
            <span className="pl-6 relative z-10">
              <span className="text-emerald-400">npm</span>{" "}
              <span className="text-white">run dev</span>{" "}
              <span className="text-emerald-300">▸</span>{" "}
              <span className="text-emerald-200 animate-pulse">ready in 1221 ms</span>
            </span>
          </div>
        </div>

        {/* Bottom-left */}
        <div className="absolute bottom-3 left-3 max-w-[85vw] sm:max-w-md">
          <div
            className="relative px-4 py-3 text-[11px] sm:text-sm md:text-base 
            font-light text-white/90 leading-relaxed
            rounded-xl shadow-lg bg-gradient-to-br from-white/10 to-white/5
            border border-white/20 backdrop-blur-md
            transition-all duration-500 hover:scale-[1.02] hover:shadow-purple-400/30"
          >
            <span className="absolute -top-3 -left-2 text-4xl text-purple-400/30 select-none">❝</span>
            <p className="relative z-10">
              Programming isn’t about what you know; it’s about what you can figure out.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-purple-200/80 italic">
              – Chris Pine, <span className="not-italic">Learn to Program</span>
            </p>
          </div>
        </div>

        {/* Bottom-right */}
        <div className="absolute bottom-3 right-3">
          <div
            className="relative px-4 py-2 text-[11px] sm:text-sm md:text-base 
            font-medium text-indigo-100 rounded-xl shadow-lg
            bg-gradient-to-r from-indigo-800/40 to-purple-800/30
            border border-indigo-400/30 backdrop-blur-md
            transition-all duration-500 hover:scale-105 hover:shadow-indigo-400/30"
          >
            <span className="relative z-10">💡 A code a day keeps an error away.</span>
          </div>
        </div>
      </div>

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
        className="relative w-full md:max-w-4xl bg-gradient-to-r from-purple-800/70 to-indigo-900/70 
        rounded-3xl p-6 md:p-12 text-center text-white shadow-lg select-none z-10 backdrop-blur-sm"
      >
        <h1
          className="text-3xl md:text-6xl font-extrabold mb-4 md:mb-6 
          bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
          bg-clip-text text-transparent animate-gradient-x"
        >
          Hi, I'm Robiul Hasan Jisan
        </h1>
        <p className="text-base md:text-xl font-light tracking-wide text-white/80 animate-fade-in delay-300 duration-1000">
          Web Developer | Tech Enthusiast
        </p>
        <button
          onClick={() => (window.location.href = '#contact')}
          className="relative mt-6 md:mt-10 px-6 py-2 md:px-8 md:py-3
          bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full
          font-semibold transition hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]"
        >
          Contact Me
        </button>
      </div>

      {/* Overlay shadow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black pointer-events-none z-5" />
    </section>
  );
}
