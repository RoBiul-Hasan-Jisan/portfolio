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
    link: "https://flowbiascraft-umzm.vercel.app/",
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
      className="py-16 px-4 text-white flex flex-col items-center"
      style={{ backgroundColor: "#7AB1D3" }}
    >
      <h2
        id="projects-title"
        className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-md text-center"
      >
        Featured Projects
      </h2>

      <p className="text-white/90 text-sm sm:text-base mb-10 max-w-3xl text-center drop-shadow-sm">
        A showcase of my recent work and experiments
      </p>

      {/* Projects Grid */}
      <div className="w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* See All Projects Button */}
      <a
        href="https://github.com/RoBiul-Hasan-Jisan?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-2 bg-[#7AB1D3] hover:bg-[#5EA3C2]
                   rounded-full text-white font-semibold text-sm shadow-md transition duration-200"
      >
        See All Projects
      </a>
    </section>
  );
}
