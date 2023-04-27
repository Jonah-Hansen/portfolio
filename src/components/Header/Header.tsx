import styles from '@/styles/Header.module.scss';
import Link from "next/link";
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <header className={styles.header} >
      <nav className={styles.nav} >
        <Link href='/' className={styles.link} >
          <Logo />
        </Link>
        <ul className={styles.navList} >
          <li><Link className={styles.navItem} href='/' >HOME</Link></li>
          <li><Link className={styles.navItem} href='#about' >ABOUT</Link></li>
          <li><Link className={styles.navItem} href='#work' >WORK</Link></li>
          <li><Link className={styles.navItem} href='#contact' >CONTACT ME</Link></li>
        </ul>
        <div className={styles.invisibleLogo}> <Logo /></div>
      </nav>
    </header>
  )
}