'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "JCEED POSSESSES A RARE, INTUITIVE GRASP OF <span class='text-[#505081] font-extrabold'>PACING</span>. HE DOESN'T JUST ASSEMBLE FOOTAGE; HE ELEVATES THE ENTIRE CINEMATIC LANGUAGE.",
    author: "CHIDI OKAFOR",
    role: "CREATIVE DIRECTOR, LAGOS FILMS"
  },
  {
    quote: "HIS KINETIC APPROACH TO THE <span class='text-[#505081] font-extrabold'>EDIT</span> IS TRANSFORMATIVE. HE HAS A UNIQUE ABILITY TO FIND THE EMOTIONAL CORE IN EVERY SEQUENCE.",
    author: "ADEBISI ADEYEMI",
    role: "EXECUTIVE PRODUCER, MAVIN RECORDS"
  },
  {
    quote: "COLLABORATING WITH JCEED IS AKIN TO WORKING WITH A <span class='text-[#505081] font-extrabold'>COMPOSER</span>. HIS SENSE OF RHYTHM IS SURGICAL AND ALWAYS PERFECT.",
    author: "IFEANYI NWOSU",
    role: "DIRECTOR, ABUJA CREATIVE HUB"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32 px-6 border-y border-[#0F0E47]/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <span className="text-[#0F0E47]/50 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Industry Voice</span>
          <h2 className="text-3xl md:text-6xl font-display font-bold tracking-tighter uppercase text-[#0F0E47]">Reputation <span className="text-[#505081] font-display italic">&amp;</span> Trust</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col gap-6 lg:gap-8 p-6 lg:p-8 rounded-2xl bg-white border border-[#0F0E47]/10 shadow-lg hover:shadow-xl hover:border-[#8686AC] transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-[#505081] opacity-30" />
              <p 
                className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight leading-snug text-[#0F0E47]"
                dangerouslySetInnerHTML={{ __html: t.quote }}
              />
              <div className="mt-auto">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-8 h-[2px] bg-[#505081]" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#0F0E47]">{t.author}</span>
                </div>
                <span className="text-[8px] font-bold tracking-widest text-[#0F0E47]/50 uppercase">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
