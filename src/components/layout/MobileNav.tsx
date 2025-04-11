"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

// Navigation links (should match your Sidebar component)
const navLinks = [
  { href: '/', label: 'directory' },
  { href: '/diary', label: 'diary' },
  { href: '/gallery', label: 'art' },
  { href: '/about', label: 'about' },
  { href: '/contact', label: 'contact' }
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Fixed Mobile Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-himalaya-mist shadow-sm">
        <div className="px-4 py-3 flex justify-between items-center">
          <Link href="/" className="font-mono font-medium text-lg text-himalaya-peak">
            kyth
          </Link>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-himalaya-peak hover:bg-himalaya-mist transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-16 pb-6 px-6 overflow-y-auto">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 px-3 text-xl font-mono text-himalaya-peak border-b border-himalaya-mist hover:bg-himalaya-ice transition-colors"
                onClick={() => setIsOpen(false)}
              >
                &gt; {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Additional navigation items from sidebar can go here */}
          <div className="mt-8 pt-6 border-t border-himalaya-mist">
            <h3 className="font-mono text-lg mb-4 text-himalaya-peak">external links</h3>
            <div className="flex flex-col space-y-3">
              <Link 
                href="https://github.com/yourhandle" 
                target="_blank"
                className="flex items-center gap-2 text-himalaya-shadow hover:text-himalaya-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                github
              </Link>
              <Link 
                href="https://twitter.com/yourhandle" 
                target="_blank"
                className="flex items-center gap-2 text-himalaya-shadow hover:text-himalaya-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                twitter
              </Link>
              <Link 
                href="https://spotify.com/user/yourhandle" 
                target="_blank"
                className="flex items-center gap-2 text-himalaya-shadow hover:text-himalaya-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                spotify
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {/* Spacer to prevent content from being hidden under the fixed navbar */}
      <div className="h-14"></div>
    </>
  );
};

export default MobileNav;