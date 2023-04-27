import styles from '@/styles/Header.module.scss';
import Link from "next/link";
import Logo from "../Logo/Logo";

export default function Header() {
  const scrollTo = (id?: string) => {
    const window = document.querySelector('.parallax-container')!

    window.scrollTo({
      behavior: 'smooth',
      top: id ? 100 : 0
    })
  }

  return (
    <header className={styles.header} >
      <nav className={styles.nav} >
        <Link href='/' onClick={() => scrollTo()} className={styles.link} >
          <Logo />
        </Link>
        <ul className={styles.navList} >
          <li><button className={styles.navItem} onClick={() => scrollTo()} >HOME</button></li>
          <li><button className={styles.navItem} >ABOUT</button></li>
          <li><button className={styles.navItem} >WORK</button></li>
          <li><button className={styles.navItem} >CONTACT ME</button></li>
        </ul>
        <div className={styles.invisibleLogo}> <Logo /></div>
      </nav>
    </header>
  )
}