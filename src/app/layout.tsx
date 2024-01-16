'use client'
import { Suspense, useState } from 'react'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { usePathname } from 'next/navigation'
import './globals.css'
import { noto } from './ui/fonts'
import Footer from './ui/layout/footer/Footer'
import Navbar from './ui/layout/navbar/Navbar'
import Sidepanel from './ui/layout/sidepanel/Sidepanel'
import Loading from './loading'
import ProviderComponent from '@/redux/ProviderComponent'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [openSidePanel, setOpenSidePanel] = useState(false)
  const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string
  const pathname = usePathname()
  const rutesNotLayout = ['/login', '/dashboard', '/leader', '/leader/tasks', '/leader/config']
  const isRuteNotLayout = rutesNotLayout.includes(pathname)
  return (
    <html lang="en">
      <head>
        <meta charSet='UTF-8' />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="canonical" href="https://www.ministeriolibertadencristojesus.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content= "Ministerio Internacional Libertad en Cristo Jesús: Un espacio de fe y comunidad que busca glorificar a Dios y compartir su amor transformador." />
        <title>Libertad en Cristo Jesús | Iglesia Evangelica</title>
        </head>
      <body className={`${noto.className}`}>
        <ProviderComponent>
          <PayPalScriptProvider options={{ clientId: paypalClientId, currency: 'USD' }}>
            {!isRuteNotLayout && <Sidepanel openSidePanel={openSidePanel} setOpenSidePanel={setOpenSidePanel} />}
            {!isRuteNotLayout && <Navbar openSidePanel={openSidePanel} setOpenSidePanel={setOpenSidePanel} />}
            {children}
            {!isRuteNotLayout && <Footer />}
          </PayPalScriptProvider>
        </ProviderComponent>
      </body>
    </html>
  )
}
