import { useHeaderClip } from '@/hooks/useHeaderClip';
import styles from '@/styles/About.module.scss';
import Image from 'next/image';



export default function About() {
  const [WebkitMaskImage, clipRef] = useHeaderClip();

  const skills = [
    "unity",
    "cs",
    "html",
    "css",
    "javaScript",
    "typeScript",
    "python",
    "angular",
    "nestjs",
    "react",
    "nextJS",
    "nodeJS",
    "expressJS",
    "electron",
    "mySQL",
    "postgres",
    "firebase",
    "aws",
    "jest",
    "postman",
    "docker",
    "git",
    "github",
    "githubActions",
    "figma",
    "sass",
    "tailwindCSS",
    "materialUI",
    "vsCode",
    "linux",
    "bash",
    "raspberryPi",
    "arduino",
    "vercel",
    "netlify",
    "wordpress",
  ];

  return (
    <section
      id="about"
      className={styles.about}
      style={{ WebkitMaskImage }}
      ref={clipRef}
    >
      <div className="text-bg">
        <h2>About Me</h2>
        <p>
          I&apos;m a full-stack developer and game systems programmer with a
          focus on scalable architecture and cross-platform Unity development.
          I&apos;ve led projects ranging from indie narrative RPGs, to mobile
          action RPGs and idle games, and backend-heavy browser-based MMOs.
          Whether I&apos;m mentoring junior developers, refactoring legacy
          systems, or writing custom tooling, I care deeply about writing clean,
          maintainable code that supports creative vision and future growth.
        </p>
        <p>
          I&apos;m a problem solver at heart, and I get a kick out of finding
          creative solutions to complex challenges. I&apos;ve worked with
          studios, indie teams, and modding communities alike. Shaping gameplay,
          building infrastructure, and keeping things running when the edge
          cases get weird. If you need someone who can architect features, debug
          production, and explain it all clearly in a tech doc, we&apos;ll
          probably get along!
        </p>

        <p>
          Overall, I&apos;m excited to join a team where I can use my skills and
          continue growing as a developer.
        </p>
      </div>

      <h2>Tech that I am experienced with:</h2>
      <div className={styles.skills}>
        <>
          {skills.map((skill, index) => (
            <div key={index} className={styles.image}>
              <Image
                src={`/images/skills/${skill}.svg`}
                alt={skill}
                title={skill}
                fill
              />
            </div>
          ))}
        </>
      </div>
    </section>
  );
}
