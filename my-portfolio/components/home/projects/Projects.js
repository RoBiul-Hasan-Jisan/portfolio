import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {MyProjects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

export const projectType = {
  personal: "Personal",
  professional: "Professional",
  openSource: "Open Source",
}
export const MyProjects = [
  {
    title: "Clothing-Xpress",
    type: projectType.personal,
    inProgress: false,
    imgSrc: "https://i.ibb.co.com/99Xsg38G/image.png",
    code: "https://github.com/RoBiul-Hasan-Jisan/Clothing-Xpress",
    projectLink: "https://clothing-xpress-9q3q.vercel.app/",
    tech: ["react", "nextjs", "typescript", "redux", "tailwind", "framer-motion", "radix-ui", "shadcn"],
    description:
      "A modern, responsive e-commerce platform for premium hoodies. Features a dynamic search bar, cart functionality, and smooth navigation for a seamless shopping experience.",
    modalContent: (
      <>
        <p>
          👕 <strong>Clothing-Xpress</strong> is a high-performance e-commerce storefront designed for speed and conversion.
        </p>
        <h2>✨ Features</h2>
        <ul>
          <li>🛍️ Dynamic Product Search & Filtering</li>
          <li>🛒 Fully Functional Shopping Cart with Redux State</li>
          <li>📱 Mobile-First Responsive Design</li>
          <li>⚡ Optimized Images & Fast Page Loads via Next.js</li>
          <li>🎨 Smooth UI Transitions with Framer Motion</li>
          <li>📦 Component-based Architecture using Shadcn UI</li>
        </ul>
        <p>
          Powered by Next.js, React, and Tailwind CSS, this project focuses on delivering a polished user experience while maintaining clean, scalable code. 🚀
        </p>
      </>
    ),
  },
  {
    title: "Wandernest",
    //type: projectType.personal,
    type: projectType.personal,
    inProgress: true,
    imgSrc: "https://i.ibb.co.com/fYLB7nm5/image.png",
    code: "https://github.com/RoBiul-Hasan-Jisan/Wandernest",
    projectLink: "https://wandernest-ashen.vercel.app/",
    tech: ["react", "nextjs", "typescript", "redux", "tailwind", "framer-motion"],
    description:
      "An AI-powered travel planning platform. From destination discovery to detailed itineraries and budgeting tools, it helps travelers plan smarter and faster.",
    modalContent: (
      <>
        <p>
          📍 <strong>Wandernest</strong> simplifies the complexities of travel planning through automation and intelligent insights.
        </p>
        <h2>🎨 Key Features</h2>
        <ul>
          <li>🤖 <strong>AI Trip Planning:</strong> Smart travel recommendations based on user preferences.</li>
          <li>📊 <strong>Budget Planning:</strong> Automated cost estimates based on duration and lifestyle.</li>
          <li>📋 <strong>Smart Packing:</strong> Auto-generated checklists tailored to your destination.</li>
          <li>🌍 <strong>Destination Insights:</strong> Real-time data on climate, best times to visit, and costs.</li>
          <li>📂 <strong>Trip Dashboard:</strong> Centralized hub to manage all upcoming and past trips.</li>
          <li>🗺️ <strong>Interactive Creation:</strong> Step-by-step UI for building complex itineraries.</li>
        </ul>
        <p>
          Built with Next.js and Redux Toolkit, Wandernest combines modern web tech to create an engaging, community-driven travel experience. ✈️
        </p>
      </>
    ),
  },
  {
    title: "Trackflix",
    type: projectType.personal,
    imgSrc: "https://i.ibb.co.com/rKPKDRjH/image.png",
    code: "https://github.com/RoBiul-Hasan-Jisan/4loopers",
    projectLink: "https://4loopers.vercel.app/",
    tech: ["react", "tailwind", "typescript", "framer-motion", "axios", "mongodb"],
    description:
      "A comprehensive movie discovery platform featuring a classic macOS-inspired interactive UI. Includes watchlists, AI chatbots, and a mock payment gateway.",
    modalContent: (
      <>
        <p>
          🖥️ <strong>Trackflix</strong> is an interactive entertainment hub that merges nostalgic OS design with modern streaming discovery features.
        </p>
        <h2>✨ Features</h2>
        <ul>
          <li>🎬 <strong>Movie Database:</strong> Explore top 10 weekly movies and upcoming releases.</li>
          <li>📂 <strong>Personalized Watchlist:</strong> User accounts to save and track favorite content.</li>
          <li>💬 <strong>Movie Chatbot:</strong> Integrated assistant to answer cinema-related queries.</li>
          <li>💳 <strong>Mock Payment System:</strong> bkash/Nagad integration for "Pro" features.</li>
          <li>🛠️ <strong>Admin Dashboard:</strong> Full CRUD operations for managing platform content.</li>
          <li>🕹️ <strong>Interactive UI:</strong> Drag-and-drop style windows and classic macOS aesthetics.</li>
        </ul>
        <p>
          This project pushes the boundaries of UI design, using Framer Motion and Tailwind to recreate a desktop feel within a browser. ✨
        </p>
      </>
    ),
  },
  {
    title: "GreenEye",
    type: projectType.personal,
    imgSrc: "https://i.ibb.co.com/LdYNhTXH/image.png",
    code: "https://github.com/RoBiul-Hasan-Jisan/GreenEye",
    projectLink: "https://leafpredictiondbversion.onrender.com/login",
    tech: ["flask", "pytorch", "python", "pillow", "postgresql"],
    description:
      "An AI-powered Leaf Health Detector that identifies plant species and detects specific diseases from over 40 categories using Deep Learning.",
    modalContent: (
      <>
        <p>
          🌿 <strong>GreenEye</strong> leverages Deep Learning to provide instant agricultural insights, helping users identify plant health issues through simple image uploads.
        </p>
        <h2>✨ Features</h2>
        <ul>
          <li>🔍 <strong>Multi-Stage Analysis:</strong> A pipeline that first confirms the presence of a leaf before running disease diagnostics.</li>
          <li>🧠 <strong>Deep Learning:</strong> Powered by PyTorch to detect 40+ specific plant disease categories.</li>
          <li>👥 <strong>Role-Based Access:</strong> Separate dashboards for regular users and administrators.</li>
          <li>📊 <strong>Prediction History:</strong> Users can track and view their previous leaf analysis results.</li>
          <li>🛠️ <strong>Admin Control:</strong> Full analytics suite and content management for system monitoring.</li>
          <li>🛡️ <strong>Secure Auth:</strong> Complete session management and secure registration/login system.</li>
        </ul>
        <p>
          By bridging the gap between computer vision and agriculture, GreenEye provides a scalable solution for early plant disease detection. 🍃
        </p>
      </>
    ),
  },


  {
  title: "CPU Scheduling Simulator",
  type: projectType.personal,
  inProgress: false,
  imgSrc: "https://i.ibb.co.com/zT4V4xYV/image.png",
  code: "https://github.com/RoBiul-Hasan-Jisan/OS-Simulator",
  projectLink: "https://os-simulator-weld.vercel.app/",
  tech: [
    "react",
    "typescript",
    "tailwind",
    "react-router",
    "headless-ui",
    "react-icons",
    "react-toastify"
  ],
  description:
    "An interactive and responsive web-based CPU Scheduling Simulator that visualizes core Operating System scheduling algorithms with Gantt charts and performance metrics.",
  modalContent: (
    <>
      <p>
        🧠 <strong>CPU Scheduling Simulator</strong> is an educational web
        application designed to help students and OS enthusiasts understand how
        CPU scheduling algorithms work internally.
      </p>

      <h2>✨ Supported Algorithms</h2>
      <ul>
        <li>📌 First Come First Serve (FCFS)</li>
        <li>⏱️ Shortest Job First (SJF)</li>
        <li>⚡ Shortest Remaining Time First (SRTF)</li>
        <li>🔄 Round Robin (Custom Time Quantum)</li>
        <li>⭐ Priority Scheduling (Preemptive)</li>
        <li>⭐ Priority Scheduling (Non-Preemptive)</li>
      </ul>

      <h2>📊 Key Features</h2>
      <ul>
        <li>📈 Interactive Gantt Chart Visualization</li>
        <li>🧮 Automatic Waiting & Turnaround Time Calculation</li>
        <li>📱 Fully Responsive (Mobile-First Design)</li>
        <li>🌙 Dark / Light Mode Support</li>
        <li>📝 Built-in Documentation for Each Algorithm</li>
        <li>✅ Real-time Form Validation & Dynamic Inputs</li>
      </ul>

      <p>
        Built with <strong>React, TypeScript, and Tailwind CSS</strong>, this
        project focuses on clean UI, accurate simulation logic, and strong
        educational value for Operating Systems coursework. 🚀
      </p>
    </>
  ),
},

  
];