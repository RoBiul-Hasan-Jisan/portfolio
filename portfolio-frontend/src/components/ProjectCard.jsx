// ProjectCard.jsx
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);

  // Tilt motion values
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Smooth spring animation for tilt
  const springConfig = { damping: 20, stiffness: 150 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  // Dynamic shadow positions opposite to tilt
  const shadowX = useTransform(smoothRotateY, [-15, 15], [15, -15]);
  const shadowY = useTransform(smoothRotateX, [-15, 15], [-15, 15]);

  // Mouse move handler for tilt effect
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxTilt = 15;

    const rotX = ((y - centerY) / centerY) * maxTilt;
    const rotY = ((x - centerX) / centerX) * maxTilt;

    rotateX.set(-rotX);
    rotateY.set(rotY);
  };

  // Reset tilt on mouse leave
  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        boxShadow: `calc(${shadowX}px) calc(${shadowY}px) 40px rgba(59, 130, 246, 0.3)`,
        perspective: 600,
        cursor: "pointer",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        backgroundColor: "rgba(15, 23, 42, 0.7)", // translucent navy
      }}
      className="rounded-xl border border-blue-600 p-6 flex flex-col justify-between
                 hover:shadow-lg hover:shadow-blue-500/40 transition-shadow duration-300 select-none
                 focus-within:outline-none focus-within:ring-4 focus-within:ring-blue-400/70"
      tabIndex={0}
      aria-label={`Project card for ${project.title}`}
    >
      {project.image && (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="rounded-lg mb-4 object-cover w-full h-40 sm:h-48 border border-blue-700"
          loading="lazy"
          draggable={false}
        />
      )}

      <div className="flex-1">
        <h3 className="text-2xl font-extrabold mb-3 tracking-tight text-white drop-shadow-md">
          {project.title}
        </h3>
        <p className="text-blue-300 mb-6 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="bg-blue-700 bg-opacity-30 text-blue-300 text-xs px-3 py-1 rounded-full font-semibold
                         transition-colors hover:bg-blue-600 cursor-default select-none"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 rounded-full
                   hover:bg-blue-700 focus-visible:outline-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500
                   transition text-white font-semibold shadow-md"
        aria-label={`Visit project ${project.title}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.828 10.172a4 4 0 015.656 5.656m-6-6L21 3m0 0h-5.586a1 1 0 00-.707.293l-11 11a1 1 0 001.414 1.414l11-11z"
          />
        </svg>
        View Project
      </a>
    </motion.article>
  );
}
