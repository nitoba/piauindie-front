import { ReactNode } from 'react'
import { Footer } from './Footer'
import { NavBar } from './Navbar'

type Props = {
  children: ReactNode
}

export function DefaultLayout({ children }: Props) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
