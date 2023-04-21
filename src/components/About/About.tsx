import { useHeaderClip } from '@/hooks/useHeaderClip';
import styles from '@/styles/About.module.scss';


export default function About() {
  const [WebkitMaskImage, clipRef] = useHeaderClip()

  return (
    <section className={styles.about} style={{ WebkitMaskImage }} ref={clipRef} >
      <h2>About Me</h2>
      <p>
        Hey there! I&apos;m a tech support provider turned aspiring software engineer/web developer living in beautiful rural Saskatchewan, Canada. My love for coding started in high school, where I competed in Vex Robotics and tinkered with arduino projects. Fast forward to now, and I&apos;ve completed a Diploma in Web Development from BrainStation, and have been running my own tech support business and working on small software projects on the side.
      </p>

      <p>
        I&apos;m a problem solver at heart, and I get a kick out of finding creative solutions to complex challenges. One of my strengths is how quickly I can learn and adapt to new tools and technologies, and I&apos;m always eager to take on new challenges. When I&apos;m not busy coding, playing video games, and exploring self-sufficient living through activities like wine-making and gardening.
      </p>
      <p>
        Overall, I&apos;m excited to join a team where I can use my skills and continue growing as a developer.
      </p>

      <h2>Skills</h2>
      <div>skills here</div>
    </section>
  )
}