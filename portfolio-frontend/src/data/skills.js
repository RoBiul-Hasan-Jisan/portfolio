// src/data/skills.js
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaPython,
  FaReact,
} from "react-icons/fa";

import {
  SiC,
  SiCplusplus,
  SiNumpy,
  SiPandas,
  SiPytorch,
  SiScikitlearn,
  SiTailwindcss,
  SiTensorflow,
} from "react-icons/si";

import { MdComputer } from "react-icons/md";

export const skills = {
  "Web Development": [
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
  ],
  "Programming Languages": [
    { name: "Python", icon: FaPython, color: "text-blue-600" },
    { name: "C", icon: SiC, color: "text-blue-800" },
    { name: "C++", icon: SiCplusplus, color: "text-indigo-700" },
    { name: "Java", icon: FaJava, color: "text-red-700" },
  ],
  Tools: [
    { name: "Git", icon: FaGitAlt, color: "text-red-500" },
  ],
  "AI / ML / DL": [
    { name: "Machine Learning", icon: SiScikitlearn, color: "text-orange-600" },
    { name: "Deep Learning", icon: SiTensorflow, color: "text-yellow-500" },
    { name: "Artificial Intelligence", icon: MdComputer, color: "text-gray-700" },
    { name: "PyTorch", icon: SiPytorch, color: "text-red-500" },
    { name: "NumPy", icon: SiNumpy, color: "text-purple-600" },
    { name: "Pandas", icon: SiPandas, color: "text-gray-900" },
  ],
  "General Development": [
    { name: "Web Development", icon: MdComputer, color: "text-indigo-600" },
  ],
};
