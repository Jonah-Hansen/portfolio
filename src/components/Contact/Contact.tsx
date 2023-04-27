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
          <input type="text" />
        </label>
        <label >
          Subject:
          <input type="text" />
        </label>
        <label >
          Message:
          <textarea />
        </label>
        <button>SEND</button>
      </form>
    </section>
  )
}