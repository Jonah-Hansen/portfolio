import { useHeaderClip } from '@/hooks/useHeaderClip';
import styles from '@/styles/Work.module.scss';
import Project from '../Project/Project';
import { transform } from "typescript";

export default function Work() {
  const [WebkitMaskImage, clipRef] = useHeaderClip();

  const projects = ["Everyday Todo", "Easy Instrumentals", "Pool Passes App"];

  return (
    <section
      id="work"
      className={styles.work}
      style={{ WebkitMaskImage }}
      ref={clipRef}
    >
      <h2>Projects</h2>
      <p style={{ fontSize: "1.25rem", fontFamily: "Roboto" }}>
        Really gotta find the time to update these 😅{" "}
      </p>
      <p style={{ fontSize: "1.25rem", fontFamily: "Roboto" }}>
        See more recent work on my linkedin:{" "}
        <a
          style={{ color: "white" }}
          href="https://www.linkedin.com/in/jonah-hansen-dev/"
        >
          linkedin.com/in/jonah-hansen-dev/
        </a>
        or on my resume{" "}
        <a style={{ color: "white" }} href="#contact">
          below
        </a>
      </p>
      <ul className={styles.projects}>
        {projects.map((project, index) => (
          <Project key={index} title={project} />
        ))}
      </ul>
    </section>
  );
}
