'use client';
import Link from 'next/link';
import { motion } from 'motion/react';
import { motionVariants } from '@/lib/motion';
import { useState } from 'react';

const MotionLink = motion.create(Link);

const navLinkContainerVariants = {
  initial: {},
  hover: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const navLinkLetterVariants = {
  initial: {
    color: 'var(--text-on-dark)',
    y: 0,
  },
  hover: {
    color: 'var(--accent)',
    y: -4,
    transition: {
      type: 'spring',
      stiffness: 800,
      damping: 12,
    },
  },
};

function NavItemLink({ href, label }: { href: string; label: string }) {
  return (
    <MotionLink
      href={href}
      variants={navLinkContainerVariants}
      initial="initial"
      whileHover="hover"
      className="inline-flex items-center font-medium"
      style={{ color: 'var(--text-on-dark)' }}
    >
      {label.split('').map((letter, index) => (
        <motion.span
          key={`${href}-${index}`}
          variants={navLinkLetterVariants}
          style={{ display: 'inline-block' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </MotionLink>
  );
}

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
  <img
    src="/logo-full.svg"
    alt="Corazón de Jesús"
    className="h-15 w-auto"
  />
</Link>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <NavItemLink key={item.href} href={item.href} label={item.label} />
        ))}
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-(--text-on-white) p-2"
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
          <div key={item.href} className="py-3" onClick={() => setIsOpen(false)}>
            <NavItemLink href={item.href} label={item.label} />
          </div>
        ))}
      </motion.div>
    )}
  </nav>
</motion.header>
);
}