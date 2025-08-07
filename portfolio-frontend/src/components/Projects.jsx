// Projects.jsx
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "TrackFlix - Movie Streaming App",
    description:
      "React-based frontend for browsing movies, trailers, managing watchlists, and personalized content.",
    link: "https://4loopers.vercel.app/",
    tags: ["React", "Tailwind", "Streaming"],
  },
  {
    id: 2,
    title: "AUS-PAC Shipping Company",
    description:
      "Mini-project website for a shipping company showcasing contact info and portfolio.",
    link: "https://aus-pac.vercel.app/",
    tags: ["React", "Responsive", "Company Site"],
  },
  {
    id: 3,
    title: "FlowBiasCraft - Software Company",
    description:
      "Software company website showcasing services and team with modern design.",
    link: "https://flowbiascraft-umzm.vercel.app/" ,
    tags: ["React", "Tailwind", "Corporate"],
  },
  {
    id: 4,
    title: "Bengali Chemistry QA Chatbot",
    description:
      "AI chatbot trained on Bengali chemistry textbook using BERT, PyTorch, Streamlit.",
    link: "https://f8cwc56ssgcfcrgappdbsew.streamlit.app/",
    tags: ["Python", "AI", "Streamlit"],
  },
];

export default function Projects() {
  return (
    <section
  id="projects"
  aria-labelledby="projects-title"
  className="py-20 px-6 bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#334155] text-center text-white relative"
>
  <div className="absolute -top-1 left-0 w-full overflow-hidden leading-[0] rotate-180 z-0 pointer-events-none">
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



  <div className="max-w-7xl mx-auto relative z-10">
    <h2 id="projects-title" className="text-5xl font-extrabold mb-4 mt-12">
       Featured Projects
    </h2>
   
    <p className="text-slate-300 text-lg mb-12 max-w-3xl mx-auto">
      A showcase of my recent work and experiments
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
</section>

  );
}
