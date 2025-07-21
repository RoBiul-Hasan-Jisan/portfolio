// Projects.jsx
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "TrackFlix - Movie Streaming App",
    description:
      "React-based frontend for browsing movies, trailers, managing watchlists, and personalized content.",
    link: "https://4loopers-newest.vercel.app/",
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
      className="py-20 px-6 bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#334155] text-center text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-6 drop-shadow-md">
          🚀 Featured Projects
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
