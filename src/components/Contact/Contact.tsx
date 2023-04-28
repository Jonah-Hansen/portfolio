import { useHeaderClip } from '@/hooks/useHeaderClip';
import styles from '@/styles/Contact.module.scss';

export default function Contact() {
  const [WebkitMaskImage, clipRef] = useHeaderClip()

  return (
    <section id='contact' className={styles.contact} style={{ WebkitMaskImage }} ref={clipRef} >
      <h2>Contact Me!</h2>
      <form className={styles.form} >
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
      </form>
    </section>
  )
}