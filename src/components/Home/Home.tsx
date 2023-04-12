import { useHeaderClip } from '@/hooks/useHeaderClip';
import styles from '@/styles/Home.module.scss';

export default function Home() {
  const [WebkitMaskImage, clipRef] = useHeaderClip()

  return (
    <section className={styles.home} style={{ WebkitMaskImage }} ref={clipRef} >
      <h2>Hi! I am a <span className={styles.alt1} >Full-Stack Web Developer</span> based in Canada, looking for remote work!</h2>

      <h3>With a passion for programming and problem solving, I like to bring web apps to life with <span className={styles.alt2} >functionality and interactivity</span> that makes users say “wow!” </h3>
    </section>
  )
}