import { Avatar } from '@/ui/Avatar'
import { MainNav } from '@/components/MainNav'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['my-info']}>
        <Avatar src='/images/my-photo@2x.jpg' alt='Маленькая фотография Кошелева Никиты' size='medium' />
        <div className={styles['my-info__text-data']}>
          <div className={styles['name']}>Никита Кошелев</div>
          <div className={styles['job-title']}>разработчик</div>
        </div>
      </div>
      <div className={styles['main-navigation']}>
        <MainNav />
      </div>
    </header>
  )
}
