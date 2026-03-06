"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/features/shared/components/section-header";
import type { Brand } from "@/features/shared/data/brands";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface BrandServicesProps {
  brand: Brand;
  sectionNumber?: string;
}

export function BrandServices({
  brand,
  sectionNumber = "02",
}: BrandServicesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll("article");
      if (cards) {
        gsap.fromTo(
          cards,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-32 px-6 md:px-12 lg:px-20"
    >
      <SectionHeader
        number={sectionNumber}
        label="Services"
        title="WHAT WE DO"
        accentColor={brand.accent}
      />

      {/* Horizontal scroll container */}
      <div
        ref={cardsRef}
        className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {brand.services.map((service, index) => (
          <article
            key={index}
            className={cn(
              "group relative shrink-0 w-80",
              "transition-transform duration-500 ease-out",
              "hover:-translate-y-2",
            )}
          >
            <div className="relative bg-card border border-border/50 md:border-t md:border-l md:border-r-0 md:border-b-0 p-8">
              <div className="absolute -top-px left-0 right-0 h-px bg-linear-to-r from-transparent via-border/40 to-transparent" />

              <div className="flex items-baseline justify-between mb-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Service {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3
                className="font-(--font-bebas) text-4xl tracking-tight mb-4 transition-colors duration-300"
                style={
                  {
                    // Use brand accent on hover via CSS
                  }
                }
              >
                <span className="group-hover:opacity-0 transition-opacity duration-300 absolute">
                  {service.title}
                </span>
                <span
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: brand.accent }}
                >
                  {service.title}
                </span>
                {/* Invisible spacer */}
                <span className="invisible">{service.title}</span>
              </h3>

              <div
                className="w-12 h-px mb-6 group-hover:w-full transition-all duration-500"
                style={{
                  backgroundColor: `color-mix(in oklch, ${brand.accent} 60%, transparent)`,
                }}
              />

              <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <div className="absolute bottom-0 right-0 w-6 h-6 overflow-hidden">
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-background rotate-45 translate-x-4 translate-y-4 border-t border-l border-border/30" />
              </div>
            </div>

            <div
              className="absolute inset-0 -z-10 translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundColor: `color-mix(in oklch, ${brand.accent} 5%, transparent)`,
              }}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
