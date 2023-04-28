import styles from '@/styles/Project.module.scss';
import Image from 'next/image';

export default function Project({ title }: { title: string }) {
  return (
    <li className={styles.project}>
      <div className={styles.preview} >
        <Image src={`/images/projects/${title.replaceAll(' ', '')}.jpg`} fill alt={title} title={title} />
      </div>
      <p>{title}</p>
    </li>
  )
}