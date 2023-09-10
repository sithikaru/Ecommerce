import { Globalcontext } from '@/context'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { lazy } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const MyLazyComponent = lazy(() => import('../context'))

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <MyLazyComponent>
        <Navbar />
        <main>{children}</main>
      </MyLazyComponent>
      </body>
    </html>
  )
}
