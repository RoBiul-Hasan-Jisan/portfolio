import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-16 px-4 text-white flex justify-center"
      style={{ backgroundColor: "#7AB1D3" }}
    >
      <div className="w-2/3">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-2 tracking-tight drop-shadow-md"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-white/90 max-w-2xl mx-auto text-xs sm:text-sm drop-shadow-sm"
          >
            A collection of tools and technologies I work with in web
            development, AI, and programming. Clean, modern, and professional.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-1">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="col-span-full mt-3">
              <h3 className="text-sm font-semibold text-white/90 mb-1 border-l-2 border-white/50 pl-2">
                {category}
              </h3>
              <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-1">
                {skillList.map(({ name, icon: Icon, color }) => (
                  <motion.div
                    key={name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-sm p-1 flex flex-col items-center justify-center cursor-pointer shadow-sm hover:shadow-md transition-all duration-200"
                    title={name}
                    role="img"
                    tabIndex={0}
                  >
                    <Icon className={`text-xl ${color}`} />
                    <p className="mt-1 text-[9px] font-medium text-white text-center">{name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
