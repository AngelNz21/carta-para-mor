import type { Metadata, Viewport } from 'next'
import { Dancing_Script, Inter } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _dancing = Dancing_Script({ subsets: ['latin'], variable: '--font-dancing' })

export const metadata: Metadata = {
  title: 'Para Ti, Mi Amor',
  description: 'Una dedicatoria especial de San Valentin para la persona mas importante de mi vida',
  icons: {
    icon: '/icon.jpeg',
    apple: '/icon.jpeg',
  },
}

export const viewport: Viewport = {
  themeColor: '#00ffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_inter.variable} ${_dancing.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}