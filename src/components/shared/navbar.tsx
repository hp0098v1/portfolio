'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { NavLink } from '@/components/shared/nav-link';
import { ToggleTheme } from '@/components/shared/toggle-theme';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/constants';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='fixed left-0 top-0 z-50 w-full backdrop-blur-sm'>
      <div className='mx-auto max-w-4xl px-4'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link className='text-xl font-bold text-primary' href='/'>
            ErfanPaya<span className='text-foreground'>.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden items-center space-x-8 md:flex'>
            {navLinks.map(link => (
              <NavLink
                href={link.url}
                key={`navbar-link-${link.id}`}
                title={link.title}
              />
            ))}
            <ToggleTheme />
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <ToggleTheme />
            <Button
              size='icon'
              variant='ghost'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className='size-4' />
              ) : (
                <Menu className='size-4' />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='absolute top-12 z-50 w-full py-4 backdrop-blur-sm md:hidden'>
            <div className='flex flex-col space-y-4'>
              {navLinks.map(link => (
                <NavLink
                  href={link.url}
                  key={`navbar-link-${link.id}`}
                  title={link.title}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
