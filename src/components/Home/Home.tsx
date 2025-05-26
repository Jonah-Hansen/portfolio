import { useHeaderClip } from '@/hooks/useHeaderClip';
import styles from '@/styles/Home.module.scss';

export default function Home() {
  const [WebkitMaskImage, clipRef] = useHeaderClip();

  return (
    <section
      id="home"
      className={styles.home}
      style={{ WebkitMaskImage }}
      ref={clipRef}
    >
      <h2>
        Hi! I&apos;m a{" "}
        <span className={styles.alt1}>
          Game Systems Programmer & Full-Stack Developer
        </span>{" "}
        based in Canada, looking for remote opportunities!
      </h2>
      <h3>
        I design and build gameplay systems, scalable architectures, and
        cross-platform features that{" "}
        <span className={styles.alt2}>bring interactivity to life</span> with
        clean code, thoughtful design, and a deep love for solving tough
        problems.
      </h3>
    </section>
  );
}
