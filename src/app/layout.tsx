// src/app/layout.tsx
import type { Metadata } from 'next'
import { Work_Sans, Libre_Baskerville } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/layout/Sidebar'
import { AudioProvider } from '@/contexts/AudioContext'
import MusicToggle from '@/components/layout/MusicToggle'

// Load fonts
const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap'
})

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'kyth maxxing',
  description: 'silly chungus personal blogsite',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${libreBaskerville.variable} font-sans`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-4 ml-64">
            <AudioProvider>
              {children}
              <MusicToggle />
            </AudioProvider>
          </main>
        </div>
      </body>
    </html>
  )
}