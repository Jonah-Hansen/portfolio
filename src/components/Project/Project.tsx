import styles from '@/styles/Project.module.scss';
import Image from 'next/image';

export default function Project({ title }: { title: string }) {
  return (
    <li className={styles.project}>
      <div className={styles.preview} >
        <Image src={`/images/projects/${title.replaceAll(' ', '')}.jpg`} height={200} width={200} alt={title} title={title} />
      </div>
      <p>{title}</p>
    </li>
  )
}