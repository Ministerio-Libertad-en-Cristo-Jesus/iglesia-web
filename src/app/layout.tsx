'use client'
import { useState } from 'react'
import './globals.css'
import { noto } from './ui/fonts'
import Footer from './ui/layout/footer/Footer'
import Navbar from './ui/layout/navbar/Navbar'
import Sidepanel from './ui/layout/sidepanel/Sidepanel'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [openSidePanel, setOpenSidePanel] = useState(false)
  return (
    <html lang="en">
      <head>
        <meta charSet='UTF-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ministerio Libertad en Cristo Jesús</title>
        </head>
      <body className={`${noto.className}`}>
        <Sidepanel openSidePanel={openSidePanel} setOpenSidePanel={setOpenSidePanel} />
        <Navbar openSidePanel={openSidePanel} setOpenSidePanel={setOpenSidePanel} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
