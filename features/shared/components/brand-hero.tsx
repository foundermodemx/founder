"use client";

import { useRef, useEffect } from "react";
import type { Brand } from "@/features/shared/data/brands";
import { ScrambleTextOnHover } from "@/components/scramble-text";
import { BitmapChevron } from "@/components/bitmap-chevron";
import { BrandSplitFlap } from "@/features/shared/components/brand-split-flap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface BrandHeroProps {
  brand: Brand;
}

export function BrandHero({ brand }: BrandHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 w-1 h-full"
        style={{
          backgroundColor: `color-mix(in oklch, ${brand.accent} 30%, transparent)`,
        }}
      />

      <div
        ref={contentRef}
        className="flex-1 w-full max-w-full overflow-hidden"
      >
        {/* Brand label */}
        <span
          className="font-mono text-[10px] uppercase tracking-[0.3em]"
          style={{ color: brand.accent }}
        >
          Founder / {brand.name}
        </span>

        {/* Animated brand name */}
        <div className="mt-6">
          <BrandSplitFlap
            text={brand.displayName}
            color={brand.accent}
            speed={80}
          />
        </div>

        {/* Tagline */}
        <h2 className="font-(--font-bebas) text-muted-foreground/60 text-[clamp(1rem,3vw,2rem)] mt-4 tracking-wide">
          {brand.tagline}
        </h2>

        {/* Description */}
        <p className="mt-12 max-w-lg font-mono text-sm text-muted-foreground leading-relaxed">
          {brand.description}
        </p>

        {/* CTAs */}
        <div className="mt-16 flex items-center gap-8">
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-3 border px-6 py-3 font-mono text-xs uppercase tracking-widest transition-all duration-200"
            style={{
              borderColor: `color-mix(in oklch, ${brand.accent} 40%, transparent)`,
              color: brand.accent,
            }}
          >
            <ScrambleTextOnHover
              text="View Projects"
              as="span"
              duration={0.6}
            />
            <BitmapChevron className="transition-transform duration-400 ease-in-out group-hover:rotate-45" />
          </a>
          <a
            href="#services"
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Floating brand tag */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
        <div
          className="border px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
          style={{
            borderColor: `color-mix(in oklch, ${brand.accent} 20%, transparent)`,
          }}
        >
          Founder Ecosystem / {brand.name}
        </div>
      </div>
    </section>
  );
}
