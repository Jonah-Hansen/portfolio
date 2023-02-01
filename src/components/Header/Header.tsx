import Link from "next/link";
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <header>
      <Link href='/' >
        <Logo />
      </Link>
      <nav>
        <ul>
          <li><Link href='/' >HOME</Link></li>
          <li><Link href='#about' >ABOUT</Link></li>
          <li><Link href='#work' >WORK</Link></li>
          <li><Link href='#contact' >CONTACT ME</Link></li>
        </ul>
      </nav>
    </header>
  )
}