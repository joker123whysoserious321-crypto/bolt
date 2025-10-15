'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function FadeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen w-full bg-black flex flex-col items-center justify-center px-6 py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold text-white leading-tight">
            Where study turns into momentum.
          </h2>
        </div>

        <div className="flex-1 w-full max-w-lg">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <Image
              src="/videos/2.png"
              alt="Platform preview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
