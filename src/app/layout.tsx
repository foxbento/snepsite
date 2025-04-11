// src/app/layout.tsx
import type { Metadata } from 'next';
import { Work_Sans, Libre_Baskerville } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';
import MobileNav from '@/components/layout/MobileNav'; // We'll need to create this component
import { AudioProvider } from '@/contexts/AudioContext';
import MusicToggle from '@/components/layout/MusicToggle';

// Load fonts
const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap'
});

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'kyth maxxing',
  description: 'silly chungus personal blogsite',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${libreBaskerville.variable} font-sans bg-himalaya-ice`}>
        {/* Mobile navigation - visible only on small screens */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
        
        {/* Main layout with sidebar and content */}
        <div className="flex min-h-screen mx-auto max-w-screen-2xl">
          {/* Sidebar - hidden on mobile, visible on larger screens */}
          <div className="hidden lg:block w-64 shrink-0">
            <Sidebar />
          </div>
          
          {/* Main content area - takes up remaining space */}
          <main className="flex-1 w-full">
            <AudioProvider>
              <div className="w-full lg:pl-6 lg:pr-6">
                {children}
              </div>
              <MusicToggle />
            </AudioProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
