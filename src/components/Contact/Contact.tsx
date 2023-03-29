import styles from '@/styles/Contact.module.scss';

export default function Contact() {
  return (
    <section className={styles.contact} >
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