"use client"

import Link from 'next/link';

// Navigation links (should match your MobileNav component)
const navLinks = [
  { href: '/', label: 'directory' },
  { href: '/diary', label: 'diary' },
  { href: '/gallery', label: 'art' },
  { href: '/about', label: 'about' },
  { href: '/contact', label: 'contact' }
];

const Sidebar = () => {
  return (
    <div className="w-64 h-screen sticky top-0 p-6 bg-white border-r border-himalaya-mist overflow-y-auto">
      <div className="flex flex-col h-full">
        {/* Logo/Site Name */}
        <div className="mb-8">
          <Link href="/" className="font-mono font-medium text-xl text-himalaya-peak">
            kyth
          </Link>
          <p className="text-sm text-himalaya-shadow mt-1">
            blog & digital garden
          </p>
        </div>
        
        {/* Main Navigation */}
        <nav className="flex-1 mb-8">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block py-1 text-himalaya-peak hover:text-himalaya-accent transition-colors font-mono"
                >
                  &gt; {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* External Links */}
        <div className="mb-8">
          <h3 className="font-mono text-sm mb-4 text-himalaya-peak">external links</h3>
          <div className="flex flex-col space-y-3">
            <Link 
              href="https://github.com/yourhandle" 
              target="_blank"
              className="flex items-center gap-2 text-sm text-himalaya-shadow hover:text-himalaya-accent transition-colors"
            >
              github
            </Link>
            <Link 
              href="https://twitter.com/yourhandle" 
              target="_blank"
              className="flex items-center gap-2 text-sm text-himalaya-shadow hover:text-himalaya-accent transition-colors"
            >
              twitter
            </Link>
            <Link 
              href="https://spotify.com/user/yourhandle" 
              target="_blank"
              className="flex items-center gap-2 text-sm text-himalaya-shadow hover:text-himalaya-accent transition-colors"
            >
              spotify
            </Link>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-auto pt-6 border-t border-himalaya-mist text-xs text-himalaya-shadow">
          <p>© 2025 kyth</p>
          <p className="mt-1">Made with ♥ and NextJS</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;