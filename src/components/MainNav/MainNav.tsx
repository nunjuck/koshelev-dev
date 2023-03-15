import Link from 'next/link'
import { MAIN_NAV_ITEMS } from '@/components/MainNav/constants'
import styles from './MainNav.module.css'

export const MainNav = () => {
  return (
    <nav className={styles['main-nav']}>
      <ul className={styles['nav-list']}>
        {MAIN_NAV_ITEMS.map(({ label, link = '#', disabled }) => (
          <li key={label} className={`${styles['nav-item']} ${disabled ? styles['nav-item--disabled'] : ''}`}>
            <Link className={styles['nav-link']} href={disabled ? '' : link}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
