import { useHeaderClip } from '@/hooks/useHeaderClip';
import styles from '@/styles/About.module.scss';
import Image from 'next/image';



export default function About() {
  const [WebkitMaskImage, clipRef] = useHeaderClip()

  const skills = ['html', 'css', 'javaScript', 'typeScript', 'python', 'react', 'nextJS', 'nodeJS', 'expressJS', 'electron', 'mySQL', 'firebase', 'supabase', 'jest', 'postman', 'git', 'github', 'githubActions', 'figma', 'sass', 'tailwindCSS', 'materialUI', 'bootstrap', 'vsCode', 'linux', 'raspberryPi', 'arduino', 'vercel', 'netlify', 'wordpress']


  return (
    <section id='about' className={styles.about} style={{ WebkitMaskImage }} ref={clipRef} >
      <h2>About Me</h2>
      <p>
        Hey there! I&apos;m a tech support provider turned aspiring software engineer/web developer living in beautiful rural Saskatchewan, Canada. My love for coding started in high school, where I competed in Vex Robotics and tinkered with arduino projects. Fast forward to now, and I&apos;ve completed a Diploma in Web Development from BrainStation, and have been running my own tech support business and working on small software projects on the side.
      </p>

      <p>
        I&apos;m a problem solver at heart, and I get a kick out of finding creative solutions to complex challenges. One of my strengths is how quickly I can learn and adapt to new tools and technologies, and I&apos;m always eager to take on new challenges. When I&apos;m not busy coding, I enjoy playing video games and exploring self-sufficient living through activities like wine-making and gardening.
      </p>
      <p>
        Overall, I&apos;m excited to join a team where I can use my skills and continue growing as a developer.
      </p>

      <h2>Tech that I am experienced with:</h2>
      <div className={styles.skills}>
        <>
          {skills.map((skill, index) =>
            <Image key={index} src={`/images/skills/${skill}.svg`} alt={skill} title={skill} width={50} height={50} />
          )}
        </>
      </div>
    </section>
  )
}