import { ReactElement } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Layout(props: { children: ReactElement }) {
  const { children } = props

  return (
    <div className='layout-wrapper container'>
      <div className='content-wrapper'>
        <Header />
        <main>{children}</main>
      </div>
      <div className='footer-wrapper'>
        <Footer />
      </div>
    </div>
  )
}
