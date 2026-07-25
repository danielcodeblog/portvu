'use client';

import { motion } from 'motion/react';
import { Globe, ShieldCheck, Zap, MessageSquare } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 max-w-[90rem] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left Column: Visual Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0F0E47] via-[#272757] to-[#0A0933] p-8 md:p-12 flex flex-col justify-between border border-[#8686AC]/20 text-white"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8686AC]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-[#8686AC]/20 text-[#8686AC] text-xs font-mono font-bold tracking-widest uppercase mb-6 border border-[#8686AC]/30">
              100% Remote Editor
            </span>
            <p className="text-2xl md:text-3xl font-display font-bold leading-tight text-white/90">
              &quot;Cutting stories, designing sound, and building creator brands worldwide.&quot;
            </p>
          </div>

          <div className="relative z-10 mt-auto">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-5 h-5 text-[#8686AC] animate-spin-slow shrink-0" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#8686AC]/90">US · UK · Canada · Europe · Global</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white">
              JCEED
            </h2>
            <p className="text-[#8686AC] text-sm font-semibold tracking-wider uppercase mt-1">
              Video Editor &amp; Sound Designer
            </p>
          </div>
        </motion.div>

        {/* Right Column: Bio & Core Pitch */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-white border border-[#0F0E47]/10 shadow-xl"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#505081] text-xs font-mono font-bold tracking-[0.2em] uppercase">
              REPUTATION &amp; TRUSTED EXPERIENCE
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6 text-[#0F0E47] leading-[1.2]">
            Crafting High-Retention Video &amp; Broadcast-Grade Sound for Creators
          </h3>
          
          <div className="space-y-4 text-[#0F0E47]/90 text-sm md:text-base mb-8 leading-relaxed font-normal">
            <p className="font-semibold text-[#0F0E47] text-base md:text-lg border-l-2 border-[#505081] pl-4 py-0.5">
              I’m Jceed — a dedicated video editor and audio post-production specialist with 3–5 years of proven results empowering top YouTubers, creators, and podcast networks.
            </p>
            <p className="text-[#0F0E47]/80">
              By pairing sharp storytelling instincts with broadcast-grade audio engineering, I ensure every production delivers both maximal viewer retention and pristine studio sound.
            </p>
            <p className="text-[#0F0E47]/80">
              Operating with absolute remote reliability, I provide guaranteed deadlines, transparent communication, and an editor-on-demand workflow built for scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#0F0E47]/10">
            <div className="p-4 rounded-2xl bg-white border border-[#0F0E47]/10 shadow-sm flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#0F0E47]/5 text-[#505081] shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#505081] uppercase block mb-0.5">VERIFIED TRACK RECORD</span>
                <h4 className="text-sm font-bold text-[#0F0E47] tracking-tight">3–5 Years Industry Expertise</h4>
                <p className="text-xs text-[#0F0E47]/70 mt-0.5 leading-relaxed">Specialized in YouTube retention architecture &amp; audio mixing</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#0F0E47]/10 shadow-sm flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#0F0E47]/5 text-[#505081] shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#505081] uppercase block mb-0.5">GLOBAL STANDARD</span>
                <h4 className="text-sm font-bold text-[#0F0E47] tracking-tight">Full Remote SLA &amp; Speed</h4>
                <p className="text-xs text-[#0F0E47]/70 mt-0.5 leading-relaxed">Timezone-flexible, strict NDA compliance &amp; on-time delivery</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
