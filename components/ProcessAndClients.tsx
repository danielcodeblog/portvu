'use client';

import { motion } from 'motion/react';
import { 
  Users, 
  Podcast, 
  Building2, 
  Globe2, 
  SlidersHorizontal, 
  CalendarCheck,
  RotateCcw,
  Send
} from 'lucide-react';

const clientsList = [
  {
    title: 'YouTubers & Content Creators',
    icon: Users,
    detail: 'Solo creators, faceless channels, vloggers, and educational channels needing high retention cuts & thumbnail-ready hooks.'
  },
  {
    title: 'Podcasters',
    icon: Podcast,
    detail: 'Multi-cam video & multi-track audio podcasts, interview shows, and highlight clips engineered for YouTube & audio platforms.'
  },
  {
    title: 'Small Brands & Businesses',
    icon: Building2,
    detail: 'Companies requiring ongoing video editing for promo clips, product showcases, social channels, and brand stories.'
  },
  {
    title: 'Global & Nigeria-Based Creators',
    icon: Globe2,
    detail: 'Primary focus on international clients (US, UK, Canada, Europe, Worldwide) and Nigeria-based creators with solid production budgets.'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Edit Draft',
    desc: 'I craft and deliver a polished first cut within your agreed turnaround timeline.',
    icon: SlidersHorizontal
  },
  {
    step: '02',
    title: 'Revisions',
    desc: 'Iterative feedback rounds to tweak pacing, graphics, or sound until it is 100% right.',
    icon: RotateCcw
  },
  {
    step: '03',
    title: 'Final Delivery',
    desc: 'Exported in pristine master resolution formatted for YouTube, Spotify, or social channels.',
    icon: Send
  },
  {
    step: '04',
    title: 'Ongoing Support',
    desc: 'Choose between flexible per-project work or an editor-on-retainer package for weekly uploads.',
    icon: CalendarCheck
  }
];



export default function ProcessAndClients() {
  return (
    <div id="process" className="py-20 md:py-32 px-6 max-w-[90rem] mx-auto space-y-28">
      {/* SECTION: WHO I WORK WITH */}
      <section className="relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-[#0F0E47] uppercase tracking-tight">
            Who I Work With
          </h2>
          <p className="mt-4 text-[#0F0E47]/80 text-base md:text-lg max-w-xl mx-auto font-medium">
            Tailored post-production workflows for ambitious creators and brands demanding consistency and broadcast quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientsList.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-7 rounded-3xl bg-white text-[#0F0E47] border border-[#0F0E47]/10 shadow-md hover:shadow-xl hover:border-[#8686AC]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F0E47]/5 text-[#505081] flex items-center justify-center border border-[#0F0E47]/10">
                    <client.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#505081]/70 tracking-widest uppercase">
                    PARTNER // 0{idx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-[#0F0E47] mb-3 leading-tight tracking-tight">
                  {client.title}
                </h3>
                <p className="text-[#0F0E47]/80 text-sm leading-relaxed font-normal">
                  {client.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION: HOW IT WORKS (PROCESS) */}
      <section className="relative p-8 md:p-14 rounded-3xl bg-[#0F0E47] text-white overflow-hidden shadow-2xl border border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8686AC]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[#8686AC] text-xs font-mono font-bold tracking-[0.25em] uppercase">
              STRUCTURED SLA &amp; WORKFLOW
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-[#8686AC]/90 text-base md:text-lg max-w-xl mx-auto font-normal">
            A transparent 5-step engineering process guaranteeing speed, precision, and peak viewer engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {processSteps.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#8686AC] uppercase">
                    PHASE {s.step}
                  </span>
                  <s.icon className="w-4 h-4 text-[#8686AC]/80" />
                </div>
                <h3 className="text-base font-display font-bold text-white mb-2 leading-snug tracking-tight">
                  {s.title}
                </h3>
                <p className="text-zinc-300 text-xs leading-relaxed font-normal">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


    </div>
  );
}
