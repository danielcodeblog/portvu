'use client';

import { motion } from 'motion/react';
import { Video, Disc3, Layers, CheckCircle2 } from 'lucide-react';

const serviceCategories = [
  {
    id: 'video-editing',
    title: 'A. Video Editing',
    subtitle: 'High-Retention Visual Storytelling',
    icon: Video,
    color: 'from-emerald-600 to-green-500',
    description: 'Fast-paced, high-retention video post-production for YouTube, social reels, and podcasts.',
    items: [
      'YouTube long-form & Shorts/Reels editing',
      'Multi-cam podcast video assembly',
      'Color grading & motion graphics',
      'Animated captions & burned-in subtitles'
    ]
  },
  {
    id: 'sound-design',
    title: 'B. Sound Design & Audio Post',
    subtitle: 'Broadcast-Quality Audio Engineering',
    icon: Disc3,
    color: 'from-emerald-500 to-teal-600',
    description: 'Crisp, immersive audio post-production delivering studio-grade dialogue and soundscapes.',
    items: [
      'Podcast multi-track audio mixing',
      'Vocal cleanup & noise reduction',
      'Custom sound FX & music scoring',
      'Mastering for Spotify, Apple & YouTube'
    ]
  },
  {
    id: 'add-ons',
    title: 'C. Add-On Services',
    subtitle: 'Scale Your Creator System',
    icon: Layers,
    color: 'from-teal-600 to-emerald-700',
    description: 'Strategic workflows to repurpose content and maintain consistent publishing schedules.',
    items: [
      'Content repurposing (long-form → viral clips)',
      'Custom intros, lower thirds & channel overlays',
      'Monthly editor-on-retainer packages'
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
      <div className="text-center mb-10 md:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-[#0F0E47] uppercase tracking-tight"
        >
          Core Services &amp; Solutions
        </motion.h2>
        <p className="mt-2 text-[#0F0E47]/70 text-sm md:text-base max-w-xl mx-auto font-medium">
          Comprehensive picture &amp; sound workflows engineered specifically for creators and podcasters.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceCategories.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="group relative p-5 md:p-6 rounded-2xl bg-[#0F0E47] text-white border border-white/10 hover:border-[#8686AC]/50 shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-end mb-3">
                <span className="text-xs font-mono font-bold text-[#8686AC]/60">0{idx + 1}</span>
              </div>

              <span className="text-[10px] font-bold tracking-[0.2em] text-[#8686AC] uppercase mb-1 block">
                {cat.subtitle}
              </span>
              <h3 className="text-lg md:text-xl font-display font-bold text-white mb-2 tracking-tight">
                {cat.title}
              </h3>
              <p className="text-[#8686AC]/80 text-xs mb-4 leading-relaxed">
                {cat.description}
              </p>

              <div className="w-full h-px bg-white/10 mb-4" />

              <ul className="space-y-2 mb-5">
                {cat.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-zinc-200 text-xs font-medium leading-tight">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8686AC] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/message/QSVQ7RD23NMGM1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-[#8686AC] text-[#0F0E47] hover:text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md"
              >
                Inquire Service
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
