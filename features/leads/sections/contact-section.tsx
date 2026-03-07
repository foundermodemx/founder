"use client";

import { useRef, useEffect } from "react";
import { LeadForm } from "../components/lead-form";
import { useLanguage } from "@/features/i18n/use-language";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ContactSectionProps {
  accentColor?: string;
}

export function ContactSection({ accentColor }: ContactSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (formRef.current) {
        gsap.from(formRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 px-6 md:px-12 lg:px-20 border-t border-border/30"
      style={
        accentColor
          ? ({ "--brand-accent": accentColor } as React.CSSProperties)
          : undefined
      }
    >
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          {t.lead.sectionLabel}
        </span>
        <h2 className="mt-4 font-(--font-bebas) text-5xl md:text-7xl tracking-tight">
          {t.lead.title}
        </h2>
        <p className="mt-6 max-w-2xl font-mono text-sm text-muted-foreground leading-relaxed">
          {t.lead.description}
        </p>
      </div>

      <div ref={formRef} className="max-w-3xl">
        <LeadForm />
      </div>
    </section>
  );
}
