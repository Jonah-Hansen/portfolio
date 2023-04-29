import styles from '@/styles/Project.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Project({ title }: { title: string }) {
  return (
    <li className={styles.project}>
      <Link className={styles.link} href={`/projects/${title.replaceAll(' ', '')}`} >
        <div className={styles.preview} >
          <Image src={`/images/projects/${title.replaceAll(' ', '')}.jpg`} fill alt={title} title={title} />
        </div>
        <p>{title}</p>
      </Link>
    </li>
  )
}