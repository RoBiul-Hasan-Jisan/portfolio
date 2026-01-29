import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              I am a Machine Learning Engineer with a passion for turning raw data into actionable intelligence. With a solid foundation in Computer Science and full-stack development, I focus on building end-to-end ML solutions that are both technically rigorous and user-centric.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My journey started with a Computer Science degree from East Delta  University, where I developed a fascination for how algorithms can solve real-world problems. I’ve spent my time mastering the intersection of software engineering and data science, ensuring that the models I build aren't just accurate, but also scalable and deployable.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I have a strong interest in MLOps—the art of streamlining the machine learning lifecycle. I enjoy working on the entire pipeline: from data preprocessing and feature engineering to model training and setting up automated deployment environments.
            </p>
          </Reveal>
          
          <Reveal>
            <p className={styles.aboutText}>
              My core technical stack includes Python (Scikit-Learn, TensorFlow/PyTorch), TypeScript, and SQL. I am currently looking for my first professional role where I can contribute to high-impact ML projects and grow alongside a team of experienced engineers.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              If you’re looking for a dedicated engineer who is ready to tackle complex data challenges and build the next generation of AI-driven products, let’s connect. 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};