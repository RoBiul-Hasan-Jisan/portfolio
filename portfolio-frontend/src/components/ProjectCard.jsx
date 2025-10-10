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
    const maxTilt = 10; // smaller tilt for compact look

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        boxShadow: `calc(${shadowX}px) calc(${shadowY}px) 20px rgba(122, 177, 211, 0.3)`,
        perspective: 600,
        cursor: "pointer",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        backgroundColor: "rgba(122, 177, 211, 0.2)", // soft blue translucent
      }}
      className="rounded-lg border border-[#7AB1D3] p-4 flex flex-col justify-between
                 hover:shadow-lg hover:shadow-[#7AB1D3]/40 transition-shadow duration-200 select-none
                 focus-within:outline-none focus-within:ring-2 focus-within:ring-[#7AB1D3]/50"
      tabIndex={0}
      aria-label={`Project card for ${project.title}`}
    >
      {project.image && (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="rounded-md mb-3 object-cover w-full h-32 sm:h-36 border border-[#7AB1D3]"
          loading="lazy"
          draggable={false}
        />
      )}

      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
          {project.title}
        </h3>
        <p className="text-[#E0F2FF] mb-4 leading-snug text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="bg-[#7AB1D3]/30 text-[#E0F2FF] text-[9px] px-2 py-0.5 rounded-full font-medium
                         transition-colors hover:bg-[#7AB1D3]/50 cursor-default select-none"
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
        className="inline-flex items-center justify-center px-4 py-1.5 bg-[#7AB1D3] rounded-full
                   hover:bg-[#5EA3C2] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7AB1D3]
                   transition text-white text-sm font-medium shadow-sm"
        aria-label={`Visit project ${project.title}`}
      >
        View Project
      </a>
    </motion.article>
  );
}
