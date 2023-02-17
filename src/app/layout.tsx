'use client'
import Header from '@/components/system/header/Header'
import { RecoilRoot } from 'recoil'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <RecoilRoot>

        <body>
          <Header />
          <div className='main-content'>
            {children}
          </div>
        </body>
      </RecoilRoot>
    </html>
  )
}
