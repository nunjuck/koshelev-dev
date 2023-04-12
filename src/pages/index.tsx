import Head from 'next/head'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className='page-wrapper'>
      <Head>
        <title>Никита Кошелев – фронтенд разработчик</title>
        <meta name='description' content='Краткая информация, навыки, опыт и проекты' />
      </Head>
      <div className={styles['about-me']}>
        <p>Разработчик из России.</p>
        <p>
          Специализируюсь на разработке интерфейсов для веб. Большое внимание уделяю доступности. Основной технологией
          для коммерческой разработки использую React с Typescript.
        </p>
      </div>
    </div>
  )
}
