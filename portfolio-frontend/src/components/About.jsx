import React from "react";

export default function About() {
  // Path to image in public folder
  const images = ["/logo.jpeg"];

  return (
    <section
      id="about"
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: "#7AB1D3" }}
    >
      {/* Top Wave */}
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="w-full h-32 md:h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255,255,255,0.1)"
            d="M0,128 C360,192 1080,64 1440,128 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto py-24 px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={images[0]}
            alt="About"
            className="rounded-2xl shadow-lg max-w-full h-auto w-48"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight drop-shadow-lg">
            About Me
          </h2>
          <p className="text-lg md:text-xl leading-relaxed drop-shadow-md">
            I'm a passionate web developer building modern, scalable, and intuitive
            web experiences. I focus on clean code, beautiful UI, and continuously
            learning cutting-edge technologies in web and AI/ML.
          </p>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="w-full h-32 md:h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255,255,255,0.1)"
            d="M0,128 C360,64 1080,192 1440,128 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </section>
  );
}
