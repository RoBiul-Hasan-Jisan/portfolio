import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Robiul<span>.</span>
          </h1>
        </Reveal>

        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <span>Machine Learning Engineer</span>
          </h2>
        </Reveal>

        <Reveal>
          <p className={styles.aboutCopy}>
            I specialize in designing and deploying scalable ML systems across fintech, logistics, and the public sector. From architecting neural networks to optimizing MLOps pipelines, I turn complex data into production-ready intelligence. Outside of training models, I enjoy UI design, building side projects, and supporting FC Barcelona.
          </p>
        </Reveal>

        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Let&apos;s Talk
          </StandardButton>
        </Reveal>
      </div>

      <DotGrid />
    </section>
  );
};