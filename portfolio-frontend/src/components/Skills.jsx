import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full relative py-20 px-4 bg-gradient-to-br from-white to-pink-200 text-center"
    >
      {/* Top red sine wave */}
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-[0] rotate-180 z-0 pointer-events-none">
        <svg
          className="w-full h-40"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#E11D48"
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

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 mt-12">Skills & Technologies</h2>

        <p className="text-gray-600 mb-12 text-sm sm:text-base max-w-3xl mx-auto">
          A collection of technologies and tools I've worked with in web development, programming, and AI/ML.
        </p>

        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="mb-12 relative">
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">{category}</h3>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            >
              {skillList.map(({ name, icon: Icon, color }) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.06 }}
                  className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-5 transition-all duration-300 hover:shadow-xl cursor-pointer"
                  title={name}
                  aria-label={name}
                  tabIndex={0}
                  role="img"
                >
                  <Icon className={`${color} text-4xl`} aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold text-gray-700">{name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}

      </div>

      {/* Bottom pink sine wave */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] z-0 pointer-events-none">
        <svg
          className="w-full h-40"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="#fbcfe8" /> {/* pink-200 hex */}
            </linearGradient>
          </defs>

          <path
            fill="url(#waveGradient)"
            d="
              M0,160
              C144,80 288,240 432,160
              C576,80 720,240 864,160
              C1008,80 1152,240 1296,160
              C1440,80 1440,160 1440,160
              L1440,320 L0,320 Z
            "
          />
        </svg>
      </div>
    </section>
  );
}
