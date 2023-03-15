import styles from './Footer.module.css'
import { SOCIAL_LINKS } from '@/components/Footer/constants'
import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <ul className={styles['social-list']}>
        {SOCIAL_LINKS.map(({ link, label, icons }) => (
          <li key={label} className={styles['social-item']}>
            <Image src={`/icons/${icons}.svg`} alt='ffdf' width={18} height={18} />
            <Link className={styles['social-link']} href={link} target='_blank'>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}
