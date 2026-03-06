"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
  description?: string;
  accentColor?: string;
}

export function SectionHeader({
  number,
  label,
  title,
  description,
  accentColor,
}: SectionHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={headerRef} className="mb-16 flex items-end justify-between">
      <div>
        <span
          className="font-mono text-[10px] uppercase tracking-[0.3em]"
          style={{ color: accentColor || "var(--accent)" }}
        >
          {number} / {label}
        </span>
        <h2 className="mt-4 font-(--font-bebas) text-5xl md:text-7xl tracking-tight">
          {title}
        </h2>
      </div>
      {description && (
        <p className="hidden md:block max-w-xs font-mono text-xs text-muted-foreground text-right leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
