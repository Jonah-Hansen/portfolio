import { useHeaderClip } from '@/hooks/useHeaderClip';
import styles from '@/styles/Work.module.scss';

export default function Work() {
  const [WebkitMaskImage, clipRef] = useHeaderClip()

  return (
    <section className={styles.work} style={{ WebkitMaskImage }} ref={clipRef} >
      <h2>Projects</h2>
      <div>project 1</div>
      <div>project 2</div>
      <div>project 3</div>
    </section>
  )
}