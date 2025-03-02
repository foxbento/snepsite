// components/layout/Sidebar.tsx
"use client"

import Link from 'next/link'
import Image from 'next/image'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-himalaya-mist p-4 fixed h-full">
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <Image
            src="/avatar.png"
            alt="Profile"
            width={150}
            height={150}
            className="rounded-full bg-himalaya-stone p-2"
          />
          <h2 className="text-himalaya-peak mt-4 font-medium font-mono text-xl">kyth.</h2>
        </div>
        
        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <Link 
                href="/" 
                className="text-himalaya-shadow hover:text-himalaya-deep transition-colors block py-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/diary" 
                className="text-himalaya-shadow hover:text-himalaya-deep transition-colors block py-2"
              >
                Diary
              </Link>
            </li>
            <li>
              <Link 
                href="/projects" 
                className="text-himalaya-shadow hover:text-himalaya-deep transition-colors block py-2"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                href="/archive" 
                className="text-himalaya-shadow hover:text-himalaya-deep transition-colors block py-2"
              >
                Archive
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-auto">
          <div className="text-sm text-himalaya-shadow">
            Music by{' '}
            <a 
              href="https://uppbeat.io/t/christian-larssen/nostalgic-bossa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-himalaya-deep"
            >
              Christian Larssen
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}