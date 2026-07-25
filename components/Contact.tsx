'use client';

import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Mail, MessageCircle, Clock, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Thank you for reaching out! Your message has been sent. Jceed will reply shortly.');
    reset();
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 max-w-[90rem] mx-auto">
      <div className="text-center mb-16 md:mb-20">
        <span className="text-[#505081] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Get In Touch</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#0F0E47] uppercase tracking-tight">Let&apos;s Build Your Next Project</h2>
        <p className="mt-3 text-[#0F0E47]/70 text-base md:text-lg max-w-xl mx-auto">
          Ready to elevate your video retention and audio quality? Message directly or submit a project brief below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 space-y-8">
          {/* Quick Contact Card */}
          <div className="p-8 rounded-3xl bg-white border border-[#0F0E47]/10 shadow-lg space-y-6">
            <h3 className="text-xl font-bold text-[#0F0E47] mb-4">Direct Contact Channels</h3>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-[#0F0E47]/5 text-[#505081] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#0F0E47]/50 uppercase tracking-wider block">Email Address</span>
                <a href="mailto:jceeagency@gmail.com" className="text-lg font-bold text-[#0F0E47] hover:text-[#505081] transition-colors break-all">
                  jceeagency@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-[#0F0E47]/5 text-[#505081] shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#0F0E47]/50 uppercase tracking-wider block">WhatsApp Direct Chat</span>
                <a 
                  href="https://wa.me/message/QSVQ7RD23NMGM1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-1 px-4 py-2 rounded-full bg-[#0F0E47] hover:bg-[#272757] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-[#0F0E47]/5 text-[#505081] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#0F0E47]/50 uppercase tracking-wider block">Service Coverage</span>
                <p className="text-base font-bold text-[#0F0E47]">100% Remote / Global (US, UK, CA, EU, NG &amp; Worldwide)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-[#0F0E47]/5 text-[#505081] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#0F0E47]/50 uppercase tracking-wider block">Response Time</span>
                <p className="text-base font-bold text-[#0F0E47]">Under 12 Hours (Fast Turnaround)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 p-8 md:p-12 rounded-3xl shadow-xl bg-white border border-[#0F0E47]/10">
            <h3 className="text-2xl font-display font-bold text-[#0F0E47] mb-2">Request a Quote / Project Brief</h3>
            <p className="text-xs text-[#0F0E47]/60 mb-6">Tell us about your content, raw footage length, desired turnaround, and goals.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="text-[10px] font-bold tracking-widest uppercase text-[#0F0E47]/60 mb-2 block">Your Name</label>
                <input
                  {...register('name', { required: true })}
                  type="text"
                  placeholder="e.g. Alex Rivera"
                  className="w-full bg-[#0F0E47]/5 border border-[#0F0E47]/10 rounded-xl px-4 py-3.5 text-sm font-bold text-[#0F0E47] focus:border-[#8686AC] focus:bg-white outline-none transition-all placeholder:text-[#0F0E47]/30"
                />
                {errors.name && <span className="text-[10px] text-red-500 mt-1 block">REQUIRED</span>}
              </div>

              <div className="relative">
                <label className="text-[10px] font-bold tracking-widest uppercase text-[#0F0E47]/60 mb-2 block">Your Email</label>
                <input
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  type="email"
                  placeholder="alex@creator.com"
                  className="w-full bg-[#0F0E47]/5 border border-[#0F0E47]/10 rounded-xl px-4 py-3.5 text-sm font-bold text-[#0F0E47] focus:border-[#8686AC] focus:bg-white outline-none transition-all placeholder:text-[#0F0E47]/30"
                />
                {errors.email && <span className="text-[10px] text-red-500 mt-1 block">INVALID EMAIL</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="text-[10px] font-bold tracking-widest uppercase text-[#0F0E47]/60 mb-2 block">Service Required</label>
                <select
                  {...register('service')}
                  className="w-full bg-[#0F0E47]/5 border border-[#0F0E47]/10 rounded-xl px-4 py-3.5 text-sm font-bold text-[#0F0E47] focus:border-[#8686AC] focus:bg-white outline-none transition-all"
                >
                  <option value="YouTube Editing">YouTube Video Editing (Long-form/Shorts)</option>
                  <option value="Podcast Post-Production">Podcast Video &amp; Audio Post</option>
                  <option value="Sound Design Only">Sound Design &amp; Audio Mixing</option>
                  <option value="Retainer Package">Editor-on-Retainer Package</option>
                  <option value="Other">Other / Custom Request</option>
                </select>
              </div>

              <div className="relative">
                <label className="text-[10px] font-bold tracking-widest uppercase text-[#0F0E47]/60 mb-2 block">Platform / Channel Link (Optional)</label>
                <input
                  {...register('channel')}
                  type="text"
                  placeholder="youtube.com/@yourchannel"
                  className="w-full bg-[#0F0E47]/5 border border-[#0F0E47]/10 rounded-xl px-4 py-3.5 text-sm font-bold text-[#0F0E47] focus:border-[#8686AC] focus:bg-white outline-none transition-all placeholder:text-[#0F0E47]/30"
                />
              </div>
            </div>

            <div className="relative">
              <label className="text-[10px] font-bold tracking-widest uppercase text-[#0F0E47]/60 mb-2 block">Project Details &amp; Timeline</label>
              <textarea
                {...register('message', { required: true })}
                placeholder="Describe your video/audio length, style reference links, and deadline..."
                rows={4}
                className="w-full bg-[#0F0E47]/5 border border-[#0F0E47]/10 rounded-xl px-4 py-3.5 text-sm font-bold text-[#0F0E47] focus:border-[#8686AC] focus:bg-white outline-none transition-all placeholder:text-[#0F0E47]/30 resize-none"
              />
              {errors.message && <span className="text-[10px] text-red-500 mt-1 block">REQUIRED</span>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#0F0E47] hover:bg-[#272757] text-white text-xs font-bold px-10 py-4 rounded-xl transition-all tracking-widest uppercase shadow-lg shadow-[#0F0E47]/20"
            >
              <Send className="w-4 h-4" />
              <span>Send Brief</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
