'use client';

import { motion } from 'motion/react';
import { 
  Video, 
  Mic, 
  Sliders, 
  Layers, 
  Film
} from 'lucide-react';

const tools = [
  { name: 'ADOBE PREMIERE PRO', icon: Video, category: 'VIDEO EDITING', level: 'Mastery', description: 'Industry-standard timeline editing, multi-cam sync, color grading, and rapid assembly.' },
  { name: 'ADOBE AUDITION', icon: Mic, category: 'AUDIO CLEANUP & MIXING', level: 'Expert', description: 'Advanced spectral repair, noise reduction, vocal processing, and audio restoration.' },
  { name: 'PRO TOOLS', icon: Sliders, category: 'SOUND DESIGN & POST', level: 'Advanced', description: 'Broadcast-grade mixing, voiceover editing, multi-track alignment, and final mastering.' },
  { name: 'ADOBE AFTER EFFECTS', icon: Layers, category: 'MOTION GRAPHICS', level: 'Expert', description: 'Custom text animations, lower thirds, intros, outros, and dynamic visual effects.' },
  { name: 'ADOBE MEDIA ENCODER', icon: Film, category: 'ENCODING & EXPORTS', level: 'Mastery', description: 'High-efficiency rendering across platform-specific YouTube, Spotify & Reel specifications.' },
];

export default function Toolkit() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-[90rem] mx-auto relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-2/5">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#505081]">PRODUCTION ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 uppercase text-[#0F0E47] leading-[0.95]">
              Tools &amp; <br/> Software
            </h2>
            <p className="text-[#0F0E47]/70 text-lg font-medium leading-relaxed max-w-lg mb-8">
              Built on a foundation of professional, industry-standard software. Every edit and sound mix is crafted using reliable tools that guarantee pristine export quality and seamless multi-track workflows.
            </p>
          </div>

          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-7 rounded-3xl bg-[#0F0E47]/5 border border-[#0F0E47]/10 hover:bg-white hover:shadow-xl hover:border-[#8686AC] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3.5 rounded-2xl bg-white shadow-sm group-hover:bg-[#272757] group-hover:text-white transition-all duration-300">
                    <tool.icon className="w-6 h-6 text-[#0F0E47] group-hover:text-white" />
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-mono text-[#0F0E47]/40 block mb-0.5">PROFICIENCY</span>
                    <span className="text-xs font-mono font-bold text-[#505081] uppercase">{tool.level}</span>
                  </div>
                </div>
                
                <div>
                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#505081] mb-1.5 block uppercase">{tool.category}</span>
                  <h3 className="text-xl font-display font-bold text-[#0F0E47] uppercase tracking-tight mb-2">{tool.name}</h3>
                  <p className="text-xs text-[#0F0E47]/60 leading-relaxed font-medium">{tool.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
