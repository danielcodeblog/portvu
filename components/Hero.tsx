'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import dynamic from 'next/dynamic';

const GLSLHills = dynamic(
  () => import('@/components/ui/glsl-hills').then((mod) => mod.GLSLHills),
  { ssr: false }
);

const taglines = [
  "Video Editing & Sound Design That Makes Your Content Impossible to Scroll Past",
  "Cutting Stories. Designing Sound. Building Brands.",
  "Professional Video Editing & Audio Post-Production for Creators Worldwide"
];

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-transparent pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* GLSL Hills Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <GLSLHills speed={0.3} cameraZ={140} />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center justify-center">
        {/* Animated Rotating Tagline */}
        <div className="mb-6 sm:mb-8 min-h-[2.5rem] flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={taglines[taglineIndex]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#272757]/60 border border-[#8686AC]/30 text-[#8686AC] text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide backdrop-blur-md text-center max-w-[90vw]"
            >
              <span>{taglines[taglineIndex]}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase leading-[1.1] sm:leading-[1.05] text-white drop-shadow-lg"
        >
          Video Editor &amp; Sound Designer <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8686AC] via-[#C4C4E0] to-white">
            for YouTubers &amp; Podcasters
          </span>
        </motion.h1>
      </div>
    </section>
  );
}


