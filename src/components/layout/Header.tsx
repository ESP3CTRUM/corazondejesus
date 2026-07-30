'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { motionVariants } from '@/lib/motion';
import { useState } from 'react';
export default function Header() {
const [isOpen, setIsOpen] = useState(false);
const navItems = [
{ href: '/', label: 'Inicio' },
{ href: '/menu', label: 'Menú' },
{ href: '/nosotros', label: 'Nosotros' },
{ href: '/sucursal-2', label: 'Sucursal Bonao' }
];
return (
<motion.header
initial="hidden"
animate="visible"
variants={motionVariants.fadeInDown}
className="sticky top-0 z-50 bg-base/95 backdrop-blur-sm border-b border-wood"
>
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
{/* Logo */}
<Link href="/" className="flex items-center">
<span className="font-heading text-2xl font-semibold text-ink">
Corazón de Jesús
</span>
</Link>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-ink-secondary hover:text-accent transition-colors duration-300 font-medium"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-ink p-2"
        aria-label="Menú"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    </div>

    {/* Mobile Navigation */}
    {isOpen && (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={motionVariants.fadeIn}
        className="md:hidden pb-4"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="block py-3 text-ink-secondary hover:text-accent transition-colors font-medium"
          >
            {item.label}
          </Link>
        ))}
      </motion.div>
    )}
  </nav>
</motion.header>
);
}