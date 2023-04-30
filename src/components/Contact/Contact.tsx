import { useHeaderClip } from '@/hooks/useHeaderClip';
import styles from '@/styles/Contact.module.scss';

export default function Contact() {
  const [WebkitMaskImage, clipRef] = useHeaderClip()

  return (
    <section id='contact' className={styles.contact} style={{ WebkitMaskImage }} ref={clipRef} >
      <h2>Contact Me!</h2>
      {/* <form className={styles.form} >
        <label >
          Email:
          <input type="email" placeholder='your email here' />
        </label>
        <label >
          Subject:
          <input type="text" defaultValue='Portfolio Inquiry' />
        </label>
        <label >
          Message:
          <textarea placeholder='your message here' />
        </label>
        <button>SEND</button>
      </form> */}

      <div className={styles.links}>
        <div className={styles.link}>
          <p>find me on Linkedin at:</p>
          <a target='_blank' rel='noopener noreferrer' href={'https://linkedin.com/in/jonah-hansen-dev'}  >
            linkedin.com/in/jonah-hansen-dev
          </a>
        </div>
        <div className={styles.link}>
          <p>find me on Github at:</p>
          <a target='_blank' rel='noopener noreferrer' href={'https://github.com/Jonah-Hansen'}  >
            github.com/Jonah-Hansen
          </a>
        </div>
        <div className={styles.link}>
          <p>send me an email at:</p>
          <a href={'mailto:jonah.m.hansen@gmail.com'}  >
            jonah.m.hansen@gmail.com
          </a>
        </div>
        <div className={styles.link}>
          <p>Click here to see my resume:</p>
          <a target='_blank' rel='noopener noreferrer' href={'/Jonah-Hansen-Resume.pdf'}  >
            Jonah-Hansen-Resume.pdf
          </a>
        </div>
      </div>
    </section>
  )
}