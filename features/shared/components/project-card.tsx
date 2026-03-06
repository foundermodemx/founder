"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Project } from "@/features/shared/data/projects";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  project: Project;
  index: number;
  accentColor?: string;
  persistHover?: boolean;
}

export function ProjectCard({
  project,
  index,
  accentColor,
  persistHover = false,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  const [isScrollActive, setIsScrollActive] = useState(false);

  useEffect(() => {
    if (!persistHover || !cardRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 80%",
        onEnter: () => setIsScrollActive(true),
      });
    }, cardRef);

    return () => ctx.revert();
  }, [persistHover]);

  const isActive = isHovered || isScrollActive;
  const accent = accentColor || "var(--accent)";

  return (
    <article
      ref={cardRef}
      className={cn(
        "group relative border border-border/40 p-5 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden",
        project.span,
      )}
      style={{
        borderColor: isActive
          ? `color-mix(in oklch, ${accent} 60%, transparent)`
          : undefined,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background layer */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          isActive ? "opacity-100" : "opacity-0",
        )}
        style={{
          backgroundColor: `color-mix(in oklch, ${accent} 5%, transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {project.medium}
        </span>
        <h3
          className={cn(
            "mt-3 font-(--font-bebas) text-2xl md:text-4xl tracking-tight transition-colors duration-300",
          )}
          style={{ color: isActive ? accent : undefined }}
        >
          {project.title}
        </h3>
      </div>

      {/* Description - reveals on hover */}
      <div className="relative z-10">
        <p
          className={cn(
            "font-mono text-xs text-muted-foreground leading-relaxed transition-all duration-500 max-w-[280px]",
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          )}
        >
          {project.description}
        </p>
      </div>

      {/* Tags */}
      {isActive && project.tags.length > 1 && (
        <div className="absolute top-4 right-4 flex gap-1 z-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[8px] uppercase tracking-widest px-2 py-0.5 border border-border/60 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Index marker */}
      <span
        className={cn(
          "absolute bottom-4 right-4 font-mono text-[10px] transition-colors duration-300",
        )}
        style={{ color: isActive ? accent : "var(--muted-foreground)" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Corner line */}
      <div
        className={cn(
          "absolute top-0 right-0 w-12 h-12 transition-all duration-500",
          isActive ? "opacity-100" : "opacity-0",
        )}
      >
        <div
          className="absolute top-0 right-0 w-full h-[1px]"
          style={{ backgroundColor: accent }}
        />
        <div
          className="absolute top-0 right-0 w-[1px] h-full"
          style={{ backgroundColor: accent }}
        />
      </div>
    </article>
  );
}
