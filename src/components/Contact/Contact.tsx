import { useHeaderClip } from '@/hooks/useHeaderClip';
import styles from '@/styles/Contact.module.scss';

export default function Contact() {
  const [clipPath, clipRef] = useHeaderClip()

  return (
    <section className={styles.contact} style={{ clipPath }} ref={clipRef} >
      <h2>Contact Me!</h2>
      <form >
        <label>
          Email:
          <input type="text" />
        </label>
        <label>
          Subject:
          <input type="text" />
        </label>
        <label>
          Message:
          <textarea />
        </label>
        <button>SEND</button>
      </form>
    </section>
  )
}