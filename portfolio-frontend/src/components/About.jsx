export default function About() {
  return (
    <section id="about" className="relative text-center" style={{ backgroundColor: "#E11D48" }}>
      {/* 🔺 Top Curve Divider */}
    <div className="absolute -top-1 left-0 w-full overflow-hidden leading-[0] rotate-180 z-0">
  <svg
    className="w-full h-40"
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      fill="#000000"
      d="
        M0,160 
        C144,80 288,240 432,160 
        C576,80 720,240 864,160 
        C1008,80 1152,240 1296,160 
        C1440,80 1440,80 1440,160
        L1440,320 L0,320 Z
      "
    />
  </svg>
</div>


      {/* 🔹 Main Content */}
      <div className="relative z-10 py-20 px-4">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-lg">
          I'm a passionate web developer who loves blending old and new technologies to create powerful and user-friendly web experiences.
        </p>
      </div>
    </section>
  );
}
