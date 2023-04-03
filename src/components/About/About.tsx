import { useHeaderClip } from '@/hooks/useHeaderClip';
import styles from '@/styles/About.module.scss';


export default function About() {
  const [WebkitMaskImage, clipRef] = useHeaderClip()

  return (
    <section className={styles.about} style={{ WebkitMaskImage }} ref={clipRef} >
      <h2>About Me</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium cupiditate commodi, facere corporis vel culpa et hic cum. Quo quia vel, nemo repellat mollitia nobis id fuga vitae veniam aliquam.
      </p>

      <h2>Skills</h2>
      <div>skills here</div>
    </section>
  )
}