'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-8 md:py-12 px-6 border-t border-[#0F0E47]/10 bg-white">
      <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Link href="/" className="text-base font-bold tracking-tighter flex items-center gap-1 leading-none group">
          <span className="text-[#0F0E47] group-hover:text-[#272757] transition-colors">JCEED</span>
          <span className="text-[#505081] group-hover:text-[#8686AC] transition-colors">EDITOR</span>
        </Link>

        <p className="text-xs font-semibold tracking-wider text-[#0F0E47]/60 uppercase">
          © {new Date().getFullYear()} JCEEDEDITOR · ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
