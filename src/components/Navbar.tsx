'use client'

import { useState } from 'react'

const navItems = [
  { label: '品牌故事', href: '#story' },
  { label: '定制流程', href: '#products' },
  { label: '合作咨询', href: '#booking' },
  { label: '关于我们', href: '#measurement' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-serif text-xl tracking-wider text-primary">
          MIRASUIT
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm tracking-wide text-charcoal hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#booking" className="hidden md:block btn-primary text-xs">
          预约体验
        </a>

        {/* Mobile Menu */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cream border-t border-charcoal/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm tracking-wide text-charcoal py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#booking" className="btn-primary text-center text-xs mt-2">
              预约体验
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
