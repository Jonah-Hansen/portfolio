import styles from '@/styles/Header.module.scss';
import Link from "next/link";
import Logo from "../Logo/Logo";

export default function Header() {

  const scrollTo = (id: string) => {
    const window = document.querySelector('.parallax-container')!
    const el = document.getElementById(id)!
    window.scrollTo({
      behavior: 'smooth',
      top: id ? el.offsetTop - 50 : 0
    })
  }

  return (
    <header className={styles.header} >
      <nav className={styles.nav} >
        <Link href='/' onClick={() => scrollTo('home')} className={styles.link} >
          <Logo />
        </Link>
        <ul className={styles.navList} >
          <li><button className={styles.navItem} onClick={() => scrollTo('about')} >ABOUT</button></li>
          <li><button className={styles.navItem} onClick={() => scrollTo('work')} >WORK</button></li>
          <li><button className={styles.navItem} onClick={() => scrollTo('contact')} >CONTACT ME</button></li>
        </ul>
        <div className={styles.invisibleLogo}> <Logo /></div>
      </nav>
    </header>
  )
}