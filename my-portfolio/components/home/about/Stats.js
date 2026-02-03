import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile, AiFillPushpin } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillPushpin size="2.4rem" color="var(--brand)" />
            <span>Currently Exploring</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">PyTorch</span>
            <span className="chip">LLMs / LangChain</span>
            <span className="chip">Rust</span>
            <span className="chip">AWS</span>
            
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Tech Stack</span>
          </h4>
          <div className={styles.statGrid}>
            {/* ML & Data - Priority */}
            <span className="chip">Python</span>
            <span className="chip">Scikit-Learn</span>
            <span className="chip">Pandas / NumPy</span>
            <span className="chip">TensorFlow</span>
            <span className="chip">Docker</span>
            <span className="chip">FastAPI</span>
            
            {/* Web Dev - Core Strengths */}
            <span className="chip">TypeScript</span>
            <span className="chip">NextJS</span>
            <span className="chip">React</span>
            <span className="chip">Nodejs</span>
            <span className="chip">Express</span>
            <span className="chip">PostgreSQL</span>
            <span className="chip">MongoDB</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Zustand</span>
            <span className="chip">Redux</span>
            
            {/* Tools & DevOps */}
            <span className="chip">GitHub</span>
            <span className="chip">Vercel</span>
            <span className="chip">Railway</span>
            <span className="chip">Solidity</span>
            <span className="chip">Firebase</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Design & Multimedia</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Figma</span>
            <span className="chip">Photoshop</span>
            <span className="chip">CSS Art</span>
            <span className="chip">Da Vinci Resolve</span>
            <span className="chip">UI Design</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};