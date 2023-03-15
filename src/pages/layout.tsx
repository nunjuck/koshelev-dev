import { ReactElement } from 'react'
import { Header } from '@/components/Header'

export default function Layout(props: { className?: string; children: ReactElement }) {
  const { className, children } = props

  return (
    <div className={className}>
      <Header />
      <main>{children}</main>
    </div>
  )
}
