"use client";

import { useRef, useEffect } from "react";
import { getProjectsByBrand } from "@/features/shared/data/projects";
import { ProjectCard } from "@/features/shared/components/project-card";
import { SectionHeader } from "@/features/shared/components/section-header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PortfolioGridProps {
  brandSlug: string;
  accentColor?: string;
  sectionNumber?: string;
}

export function PortfolioGrid({
  brandSlug,
  accentColor,
  sectionNumber = "03",
}: PortfolioGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const projects = getProjectsByBrand(brandSlug);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll("article");
      if (cards && cards.length > 0) {
        gsap.set(cards, { y: 60, opacity: 0 });
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, gridRef);

    return () => ctx.revert();
  }, []);

  if (projects.length === 0) return null;

  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-20">
      <SectionHeader
        number={sectionNumber}
        label="Portfolio"
        title="SELECTED WORK"
        description="Projects delivered in this vertical."
        accentColor={accentColor}
      />

      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[200px]"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            accentColor={accentColor}
            persistHover={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
