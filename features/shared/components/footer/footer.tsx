"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { brands } from "@/features/shared/data/brands";
import { useLanguage } from "@/features/i18n/use-language";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FooterProps {
  variant?: "default" | "ecosystem";
}

export function Footer({ variant = "default" }: FooterProps) {
  if (variant === "ecosystem") {
    return <FooterEcosystem />;
  }
  return <FooterDefault />;
}

function FooterDefault() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
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

      if (gridRef.current) {
        const columns = gridRef.current.querySelectorAll(":scope > div");
        gsap.from(columns, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (bottomRef.current) {
        gsap.from(bottomRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bottomRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      id="colophon"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          {t.footer.sectionLabel}
        </span>
        <h2 className="mt-4 font-(--font-bebas) text-5xl md:text-7xl tracking-tight">
          {t.footer.title}
        </h2>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 md:gap-10"
      >
        {/* Services */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            {t.footer.services}
          </h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">
              {t.footer.webDev}
            </li>
            <li className="font-mono text-xs text-foreground/80">
              {t.footer.mobileApps}
            </li>
          </ul>
        </div>

        {/* Ecosystem / Sub-brands */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            {t.ecosystem.sectionLabel.split(" / ")[1] || "Ecosystem"}
          </h4>
          <ul className="space-y-2">
            {brands.map((brand) => (
              <li key={brand.slug}>
                <Link
                  href={`/${brand.slug}`}
                  className="font-mono text-xs text-foreground/80 hover:text-foreground transition-colors duration-200"
                  style={
                    { "--hover-color": brand.accent } as React.CSSProperties
                  }
                >
                  {brand.displayName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Stack */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            {t.footer.stack}
          </h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">Next.js</li>
            <li className="font-mono text-xs text-foreground/80">
              Tailwind CSS
            </li>
            <li className="font-mono text-xs text-foreground/80">Vercel</li>
          </ul>
        </div>

        {/* Typography */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            {t.footer.typography}
          </h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">Bebas Neue</li>
            <li className="font-mono text-xs text-foreground/80">
              IBM Plex Sans
            </li>
            <li className="font-mono text-xs text-foreground/80">
              IBM Plex Mono
            </li>
          </ul>
        </div>

        {/* Location */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            {t.footer.location}
          </h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">
              {t.footer.remote}
            </li>
            <li className="font-mono text-xs text-foreground/80">
              {t.footer.everywhere}
            </li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            {t.footer.contact}
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:hello@founder.dev"
                className="font-mono text-xs text-foreground/80 hover:text-accent transition-colors duration-200"
              >
                {t.footer.email}
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-foreground/80 hover:text-accent transition-colors duration-200"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-foreground/80 hover:text-accent transition-colors duration-200"
              >
                {t.footer.twitter}
              </a>
            </li>
          </ul>
        </div>

        {/* Year */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            {t.footer.year}
          </h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">
              {new Date().getFullYear()}
            </li>
            <li className="font-mono text-xs text-foreground/80">
              {t.footer.ongoing}
            </li>
          </ul>
        </div>
      </div>

      <div
        ref={bottomRef}
        className="mt-24 pt-8 border-t border-border/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
          {t.footer.copyright.replace(
            "{year}",
            String(new Date().getFullYear()),
          )}
        </p>
        <p className="font-mono text-[10px] text-muted-foreground">
          {t.footer.tagline}
        </p>
      </div>
    </footer>
  );
}

function FooterEcosystem() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          y: 20,
          opacity: 0.5, // Subtle fade instead of 0
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        });
      }

      const items = listRef.current?.querySelectorAll(".brand-index-item");
      if (items && items.length > 0) {
        gsap.from(items, {
          y: 15,
          opacity: 0.5, // Content is always mostly visible
          duration: 0.6,
          stagger: 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (bottomRef.current) {
        gsap.from(bottomRef.current, {
          y: 10,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bottomRef.current,
            start: "top 98%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="relative py-24 px-6 md:px-12 lg:px-20 border-t border-border/30 bg-background"
      id="colophon"
    >
      <div
        ref={headerRef}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div className="max-w-xl">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent">
            {t.footerEcosystem.sectionLabel}
          </span>
          <h2 className="mt-2 font-(--font-bebas) text-4xl md:text-5xl tracking-tight leading-none">
            {t.footerEcosystem.title}
          </h2>
        </div>
        <p className="max-w-xs font-mono text-[11px] text-muted-foreground leading-relaxed">
          {t.footerEcosystem.description}
        </p>
      </div>

      <div
        ref={listRef}
        className="flex flex-col border-y border-border/10 divide-y divide-border/10"
      >
        {brands.map((brand) => {
          const brandSlug = brand.slug as keyof typeof t.brand.brands;
          const brandI18n = t.brand.brands[brandSlug];

          return (
            <Link
              key={brand.slug}
              href={`/${brand.slug}`}
              className="brand-index-item group flex flex-col md:flex-row md:items-center py-6 transition-all duration-300 hover:bg-white/2"
            >
              {/* Brand Number/Index */}
              <span className="hidden md:block font-mono text-[9px] text-muted-foreground/30 w-12">
                0{brands.indexOf(brand) + 1}
              </span>

              {/* Brand Name */}
              <div className="flex-1">
                <h3
                  className="font-(--font-bebas) text-3xl md:text-4xl tracking-wide group-hover:text-accent transition-colors duration-300"
                  style={{ "--brand-accent": brand.accent } as any}
                >
                  {brand.displayName}
                </h3>
              </div>

              {/* Tagline (Desktop) */}
              <div className="mt-2 md:mt-0 flex-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {brandI18n?.tagline || brand.tagline}
                </span>
              </div>

              {/* Arrow/CTA */}
              <div className="mt-4 md:mt-0 flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-all duration-300">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  {t.footerEcosystem.visitBrand}
                </span>
                <span className="text-accent">→</span>
              </div>
            </Link>
          );
        })}
      </div>

      <div
        ref={bottomRef}
        className="mt-20 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 opacity-60"
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
          <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-[0.2em]">
            {t.footer.copyright.replace(
              "{year}",
              String(new Date().getFullYear()),
            )}
          </p>
          <p className="font-mono text-[9px] text-muted-foreground/50 uppercase tracking-widest">
            {t.footer.tagline}
          </p>
        </div>

        <Link
          href="/"
          className="group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest hover:text-foreground transition-colors duration-200"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          {t.footerEcosystem.backToFounder}
        </Link>
      </div>
    </footer>
  );
}
