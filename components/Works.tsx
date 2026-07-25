'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'SILENT ECHOES',
    category: 'NARRATIVE',
    video: 'https://player.vimeo.com/video/1212580971?autoplay=0&loop=1&badge=0&autopause=0&api=1&muted=1&controls=0',
    poster: 'https://picsum.photos/seed/silent-echoes/1920/1080',
  },
  {
    id: 2,
    title: 'NIGERIA',
    category: 'FEATURED',
    video: 'https://player.vimeo.com/video/1212580564?autoplay=0&loop=1&badge=0&autopause=0&api=1&muted=1&controls=0',
    poster: 'https://picsum.photos/seed/new-project-2/1920/1080',
  },
  {
    id: 3,
    title: 'VLOG',
    category: 'FEATURED',
    video: 'https://player.vimeo.com/video/1212580562?autoplay=0&loop=1&badge=0&autopause=0&api=1&muted=1&controls=0',
    poster: 'https://picsum.photos/seed/new-project/1920/1080',
  },
  {
    id: 4,
    title: 'URBAN PULSE',
    category: 'COMMERCIALS',
    video: 'https://player.vimeo.com/video/1212579450?autoplay=0&loop=1&badge=0&autopause=0&api=1&muted=1&controls=0',
    poster: 'https://picsum.photos/seed/p2/800/1000',
  },
  {
    id: 5,
    title: 'DINOVATE',
    category: 'JUST TALKS',
    video: 'https://player.vimeo.com/video/1212580563?autoplay=0&loop=1&badge=0&autopause=0&api=1&muted=1&controls=0',
    poster: 'https://picsum.photos/seed/p2/800/1000',
  },
  {
    id: 6,
    title: 'CLASSIC CUT',
    category: 'CLASSIC',
    video: 'https://player.vimeo.com/video/1212579449?autoplay=0&loop=1&badge=0&autopause=0&api=1&muted=1&controls=0',
    poster: 'https://picsum.photos/seed/p2/800/1000',
  },
  {
    id: 7,
    title: 'ELEVATE',
    category: 'CREATIVE',
    video: 'https://player.vimeo.com/video/1212579448?autoplay=0&loop=1&badge=0&autopause=0&api=1&muted=1&controls=0',
    poster: 'https://picsum.photos/seed/elevate/1920/1080',
  },
];

function VideoCard({ project, isActive }: { project: typeof projects[0], isActive: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const isVimeo = project.video.includes('vimeo');

  useEffect(() => {
    // Automatic pause/play logic
    if (isVimeo && iframeRef.current) {
      if (isActive) {
        // Trigger play for active Vimeo embeds
        iframeRef.current.contentWindow?.postMessage(JSON.stringify({ method: 'play' }), '*');
        setIsPlaying(true);
      } else {
        iframeRef.current.contentWindow?.postMessage(JSON.stringify({ method: 'pause' }), '*');
        setIsPlaying(false);
      }
    } else if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
         setIsPlaying(false);
      }
    }
  }, [isActive, isVimeo]);

  useEffect(() => {
    if (isVimeo && iframeRef.current) {
      const message = {
        method: 'setVolume',
        value: isMuted ? 0 : 1
      };
      iframeRef.current.contentWindow?.postMessage(JSON.stringify(message), '*');
    }
  }, [isMuted, isVimeo]);

  const togglePlay = () => {
    if (isVimeo && iframeRef.current) {
      const method = isPlaying ? 'pause' : 'play';
      iframeRef.current.contentWindow?.postMessage(JSON.stringify({ method }), '*');
      setIsPlaying(!isPlaying);
    } else if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-full group transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl bg-black">
      {isVimeo ? (
        <div className="absolute inset-0 overflow-hidden bg-black">
          <iframe
            ref={iframeRef}
            src={project.video}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77777778vh] min-w-full h-[56.25vw] min-h-full transition-all duration-700"
            allow="fullscreen"
            style={{ border: 0 }}
          />
        </div>
      ) : (
        <video
          ref={videoRef}
          src={project.video}
          poster={project.poster}
          loop
          muted={isMuted}
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className={`w-full h-full object-cover transition-all duration-700 ${isActive ? 'grayscale-0 scale-100' : 'grayscale opacity-100 scale-95'}`}
        />
      )}
      
      {/* Controls Overlay */}
      <div className={`absolute inset-0 bg-black/25 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'} pointer-events-none`}>
        <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-8">
          <div className="flex justify-between items-start">
            <span className="text-[8px] md:text-[10px] font-bold text-zinc-950 tracking-widest uppercase bg-emerald-400 px-2 md:px-3 py-1 rounded-full shadow-lg">
              {project.category}
            </span>
            <button 
              onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
              className="p-2 bg-white text-black rounded-full hover:bg-zinc-100 transition-colors shadow-md pointer-events-auto flex items-center justify-center"
            >
              {isMuted ? <VolumeX size={14} className="md:w-4 md:h-4" /> : <Volume2 size={14} className="md:w-4 md:h-4" />}
            </button>
          </div>

          <div className="flex items-end justify-between">
            <div className="drop-shadow-md pb-4">
              <h3 className="text-2xl md:text-5xl font-bold tracking-tighter mb-1 md:mb-2 text-white">{project.title}</h3>
              <p className="text-white/80 text-[10px] md:text-xs font-medium">Director&apos;s Cut • 2026</p>
            </div>
            <button 
              onClick={(e) => { e.stopPropagation(); togglePlay(); }}
              className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-emerald-500 text-zinc-950 rounded-full hover:bg-emerald-400 hover:scale-110 transition-all shadow-xl pointer-events-auto"
            >
              {isPlaying ? <Pause fill="currentColor" size={20} className="md:w-6 md:h-6" /> : <Play fill="currentColor" size={20} className="ml-1 md:w-6 md:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Background Number */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <span className="text-[100px] md:text-[200px] font-display font-bold text-black select-none">
          {project.id.toString().padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, scrollYProgress, total, activeIndex }: { project: typeof projects[0], index: number, scrollYProgress: any, total: number, activeIndex: number }) {
  const targetScale = 1 - ((total - 1 - index) * 0.05);
  
  // Calculate range for this specific card
  const start = index / total;
  const end = (index + 1) / total;
  
  // Clamping ranges to [0, 1] to avoid Web Animations API issues with negative offsets
  const scale = useTransform(scrollYProgress, [start, end], [1, targetScale]);
  const opacity = useTransform(
    scrollYProgress, 
    [Math.max(0, start - 0.1), start, end, Math.min(1, end + 0.1)], 
    [1, 1, 1, 1]
  );

  return (
    <motion.div
      style={{ 
        scale,
        opacity,
        top: `calc(10% + ${index * 30}px)`,
      }}
      className="sticky top-0 mx-auto w-full max-w-[80rem] aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/9] mb-[12vh] sm:mb-[18vh] md:mb-[25vh]"
    >
      <div className="w-full h-full overflow-hidden bg-black shadow-2xl relative rounded-[1.5rem] md:rounded-[2.5rem] border border-black/5">
        <VideoCard 
          project={project} 
          isActive={index === activeIndex} 
        />
      </div>
    </motion.div>
  );
}

export default function Works() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Update active index based on scroll
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const index = Math.floor(latest * projects.length);
      setActiveIndex(Math.min(index, projects.length - 1));
    });
  }, [scrollYProgress]);

  return (
    <section id="works" ref={containerRef} className="relative pt-16 pb-12">
      <div className="px-6 max-w-[90rem] mx-auto mb-16 md:mb-32">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="flex flex-col items-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-[#0F0E47] uppercase tracking-tight mb-4"
            >
              SELECTED WORKS
            </motion.h2>
            <p className="text-[#0F0E47]/70 text-sm max-w-md font-medium">
              A curated selection of high-fidelity edits. From the kinetic energy of music videos to the surgical precision of commercial storytelling.
            </p>
          </div>
        </div>
      </div>

      {/* iPhone Stacked Carousel */}
      <div className="relative max-w-[90rem] mx-auto px-6 pb-[20vh] -mt-10 md:-mt-20">
        {projects.map((project, idx) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={idx} 
            scrollYProgress={scrollYProgress}
            total={projects.length}
            activeIndex={activeIndex}
          />
        ))}
      </div>

    </section>
  );
}
