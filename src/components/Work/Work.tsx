import { useHeaderClip } from '@/hooks/useHeaderClip';
import styles from '@/styles/Work.module.scss';
import Project from '../Project/Project';

export default function Work() {
  const [WebkitMaskImage, clipRef] = useHeaderClip()

  const projects = ['Everyday Todo', 'Easy Instrumentals', 'Pool Passes App']

  return (
    <section id='work' className={styles.work} style={{ WebkitMaskImage }} ref={clipRef} >
      <h2>Projects</h2>
      <ul className={styles.projects}>
        {projects.map((project, index) =>
          <Project key={index} title={project} />
        )}
      </ul>
    </section>
  )
}