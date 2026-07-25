import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sky-50 text-sky-950 px-6">
      <div className="text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter">404</h1>
        <p className="text-sm uppercase tracking-[0.2em] text-[#3B82F6] font-medium">Page Not Found</p>
        <p className="text-sky-950/60 max-w-sm mx-auto text-sm">
          The project or page you are looking for has shifted out of view. Let&apos;s get you back to the portfolio.
        </p>
        <div>
          <Link 
            href="/"
            className="inline-flex items-center justify-center bg-sky-950 text-white px-6 py-3 rounded-full font-bold text-xs tracking-widest hover:bg-[#3B82F6] transition-colors uppercase duration-300"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
