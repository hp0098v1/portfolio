'use client'

import { navLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary/80 backdrop-blur-sm z-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-accent">
            Portfolio<span className="text-white">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === `/${link.id === 'home' ? '' : link.id}`
              return (
                <Link
                  key={link.id}
                  href={link.id === 'home' ? '/' : `/${link.id}`}
                  className={`${
                    isActive ? 'text-accent' : 'text-gray-300'
                  } hover:text-accent transition-colors`}
                >
                  {link.title}
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === `/${link.id === 'home' ? '' : link.id}`
                return (
                  <Link
                    key={link.id}
                    href={link.id === 'home' ? '/' : `/${link.id}`}
                    className={`${
                      isActive ? 'text-accent' : 'text-gray-300'
                    } hover:text-accent transition-colors`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
