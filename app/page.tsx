import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Works from '@/components/Works';
import Services from '@/components/Services';
import Toolkit from '@/components/Toolkit';
import About from '@/components/About';
import ProcessAndClients from '@/components/ProcessAndClients';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-noise white-3d-bg">
      <Navbar />
      <Hero />
      <div className="relative bg-[#F2F2F8] text-[#0F0E47]">
        <Works />
        <Services />
        <Toolkit />
        <About />
        <ProcessAndClients />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
