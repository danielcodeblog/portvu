'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'WORKS', href: '#works' },
  { name: 'SERVICES', href: '#services' },
  { name: 'ABOUT', href: '#about' },
  { name: 'PROCESS', href: '#process' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[90%] max-w-6xl backdrop-blur-2xl rounded-full py-3 ${
        isScrolled 
          ? 'bg-white/85 border border-white/90 shadow-[0_8px_32px_0_rgba(15,14,71,0.12)] text-[#0F0E47]' 
          : 'bg-[#0F0E47]/40 border border-transparent shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-white'
      }`}
    >
      <div className="px-5 md:px-8 flex justify-between items-center">
        <Link href="/" className="text-lg font-display font-bold tracking-tighter flex items-center gap-1 leading-none group">
          <span className={`transition-colors ${isScrolled ? 'text-[#0F0E47] group-hover:text-[#272757]' : 'text-white group-hover:text-[#C4C4E0]'}`}>JCEED</span>
          <span className={`transition-colors ${isScrolled ? 'text-[#505081] group-hover:text-[#8686AC]' : 'text-[#8686AC] group-hover:text-white'}`}>EDITOR</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[11px] lg:text-xs font-bold tracking-[0.15em] lg:tracking-[0.2em] transition-colors uppercase ${
                isScrolled 
                  ? 'text-[#0F0E47]/80 hover:text-[#505081]' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/message/QSVQ7RD23NMGM1"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[11px] lg:text-xs font-bold px-4 lg:px-5 py-2.5 rounded-full transition-all tracking-wider lg:tracking-widest uppercase shadow-md hover:shadow-lg whitespace-nowrap ${
              isScrolled
                ? 'bg-[#0F0E47] hover:bg-[#272757] text-white'
                : 'bg-white hover:bg-[#8686AC] text-[#0F0E47] hover:text-white'
            }`}
          >
            BOOK CONSULTATION
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden w-9 h-9 flex items-center justify-center rounded-full border transition-all duration-300 ${
            isScrolled 
              ? 'bg-[#0F0E47]/5 hover:bg-[#0F0E47]/10 border-[#0F0E47]/15 text-[#0F0E47]' 
              : 'bg-white/10 hover:bg-white/20 border-white/25 text-white'
          }`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`absolute top-full mt-3 left-0 right-0 rounded-3xl p-6 flex flex-col gap-5 md:hidden overflow-hidden shadow-2xl backdrop-blur-2xl transition-colors duration-500 ${
              isScrolled
                ? 'bg-white/92 border border-white/90 shadow-[0_20px_50px_rgba(15,14,71,0.15)] text-[#0F0E47]'
                : 'bg-[#0F0E47]/95 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-white'
            }`}
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${isScrolled ? 'via-[#505081]' : 'via-[#8686AC]'} to-transparent opacity-60`} />
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-bold tracking-widest uppercase transition-colors ${
                  isScrolled 
                    ? 'text-[#0F0E47] hover:text-[#505081]' 
                    : 'text-white/90 hover:text-[#8686AC]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/message/QSVQ7RD23NMGM1"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className={`text-xs font-bold px-6 py-3.5 rounded-2xl text-center tracking-[0.2em] uppercase shadow-md transition-all duration-300 mt-2 ${
                isScrolled
                  ? 'bg-[#0F0E47] text-white hover:bg-[#272757]'
                  : 'bg-white text-[#0F0E47] hover:bg-[#8686AC] hover:text-white'
              }`}
            >
              BOOK A FREE CONSULTATION
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
