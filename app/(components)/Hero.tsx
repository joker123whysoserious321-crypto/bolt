'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollPosition / windowHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blurAmount = 2 + (scrollProgress * 6);
  const fadeOpacity = scrollProgress * 0.8;

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      aria-label="Hero section with background video"
    >
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 text-[clamp(0.9rem,1.3vw,1.1rem)] font-medium text-white/90 hover:text-white transition-colors"
      >
        foreseeai.com
      </Link>

      <div
        className="absolute inset-0 transition-all duration-100"
        style={{ filter: `blur(${blurAmount}px)` }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source src="/videos/1015.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none transition-opacity duration-100"
        style={{ opacity: fadeOpacity }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="text-[clamp(4rem,14vw,16rem)] font-extrabold tracking-tighter text-white text-center leading-none drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
          foresee
        </h1>
        <p className="text-[clamp(1rem,2.5vw,2rem)] font-light text-white text-center mt-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          your success
        </p>
      </div>
    </section>
  );
}
