"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { Brand } from "@/features/shared/data/brands";

interface BrandCardProps {
  brand: Brand;
  index: number;
}

export function BrandCard({ brand, index }: BrandCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/${brand.slug}`}>
      <article
        className={cn(
          "group relative border border-border/40 p-6 md:p-8 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden min-h-[220px]",
        )}
        style={{
          borderColor: isHovered
            ? `color-mix(in oklch, ${brand.accent} 60%, transparent)`
            : undefined,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background layer */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0",
          )}
          style={{
            backgroundColor: `color-mix(in oklch, ${brand.accent} 5%, transparent)`,
          }}
        />

        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 h-[2px] transition-all duration-700 ease-out"
          style={{
            backgroundColor: brand.accent,
            width: isHovered ? "100%" : "0%",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {brand.tagline}
          </span>
          <h3
            className="mt-3 font-(--font-bebas) text-3xl md:text-4xl tracking-tight transition-colors duration-300"
            style={{ color: isHovered ? brand.accent : undefined }}
          >
            {brand.displayName}
          </h3>
        </div>

        {/* Description */}
        <div className="relative z-10 mt-4">
          <p
            className={cn(
              "font-mono text-xs text-muted-foreground leading-relaxed transition-all duration-500 max-w-[320px]",
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-70 translate-y-0",
            )}
          >
            {brand.description.substring(0, 120)}...
          </p>
        </div>

        {/* Index marker */}
        <span
          className="absolute bottom-4 right-4 font-mono text-[10px] transition-colors duration-300"
          style={{
            color: isHovered ? brand.accent : "var(--muted-foreground)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Corner accent */}
        <div
          className={cn(
            "absolute top-0 right-0 w-12 h-12 transition-all duration-500",
            isHovered ? "opacity-100" : "opacity-0",
          )}
        >
          <div
            className="absolute top-0 right-0 w-full h-[1px]"
            style={{ backgroundColor: brand.accent }}
          />
          <div
            className="absolute top-0 right-0 w-[1px] h-full"
            style={{ backgroundColor: brand.accent }}
          />
        </div>

        {/* Arrow indicator */}
        <div
          className={cn(
            "absolute bottom-6 right-14 font-mono text-xs transition-all duration-300",
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-2",
          )}
          style={{ color: brand.accent }}
        >
          →
        </div>
      </article>
    </Link>
  );
}
