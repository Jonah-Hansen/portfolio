import styles from '@/styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>I am looking for work! front-end, backend and full stack positions</h2>

      <a href="mailto:jonah.m.hansen@gmail.com">
        <button>Email Me</button>
      </a>
    </footer>
  )
}