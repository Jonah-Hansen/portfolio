import styles from '@/styles/Logo.module.scss'

export default function Logo() {
  return (
    <h1 className={styles.logo}>
      Jonah <span className={styles.logoAlt}>Hansen</span>
    </h1>
  )
}