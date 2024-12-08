'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { NavLink } from '@/components/shared/nav-link';
import { navLinks } from '@/constants';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 w-full backdrop-blur-sm z-50'>
      <div className='max-w-4xl mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/' className='text-xl font-bold text-primary'>
            ErfanPaya<span className='text-white'>.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <NavLink
                key={`navbar-link-${link.id}`}
                title={link.title}
                href={link.url}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden hover:text-primary'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='absolute top-12 md:hidden py-4 backdrop-blur-sm z-50 w-full'>
            <div className='flex flex-col space-y-4'>
              {navLinks.map((link) => (
                <NavLink
                  key={`navbar-link-${link.id}`}
                  title={link.title}
                  href={link.url}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
