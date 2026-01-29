import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title + item.position} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "NASA Space Apps Challenge (Team CosmoMind)",
    position: "Core ML Engineer",
    time: "Aug. 2025 - Nov. 2025",
    location: "",
    description:
      "Led the machine learning strategy for the CosmoMind project. I focused on architecting predictive models using satellite data and implementing computer vision algorithms to identify celestial patterns. I was responsible for data preprocessing, model selection, and ensuring the scalability of the AI solution under competition constraints.",
    tech: ["Python", "TensorFlow", "Scikit-Learn", "Pandas", "Computer Vision", "OpenCV"],
  },
  {
    title: "Team 4lopper",
    position: "Core ML Engineer",
    time: "Jan. 2025 - April 2025",
    location: "",
    description:
      "Served as the primary ML Engineer, designing and deploying intelligence-driven features. I built end-to-end pipelines for data collection, cleaning, and model inference. I worked closely with the backend team to integrate these models into a production-ready API, focusing on reducing latency for real-time predictions.",
    tech: ["Python", "PyTorch", "FastAPI", "NumPy", "Scikit-Learn", "Docker"],
  },
 
 
];