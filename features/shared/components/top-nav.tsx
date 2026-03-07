"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { brands } from "@/features/shared/data/brands";
import { BrandSplitFlap } from "./brand-split-flap";
import { LanguageSwitcher } from "@/features/i18n/language-switcher";

export function TopNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 h-14">
        {/* Logo */}
        <Link href="/" className="flex justify-center items-center mt-3">
          <BrandSplitFlap
            text="F"
            color="var(--brand-accent)"
            speed={80}
            showMuteToggle={false}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {brands.map((brand) => {
            const isActive = pathname === `/${brand.slug}`;
            return (
              <Link
                key={brand.slug}
                href={`/${brand.slug}`}
                className={cn(
                  "font-mono text-[10px] uppercase tracking-widest transition-colors duration-200",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
                style={{ color: isActive ? brand.accent : undefined }}
              >
                {brand.name}
              </Link>
            );
          })}
          <LanguageSwitcher />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "w-5 h-px bg-foreground transition-all duration-300",
              isMenuOpen && "rotate-45 translate-y-[3px]",
            )}
          />
          <span
            className={cn(
              "w-5 h-px bg-foreground transition-all duration-300",
              isMenuOpen && "-rotate-45 -translate-y-[2px]",
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 border-b border-border/30 bg-background/95 backdrop-blur-md",
          isMenuOpen ? "max-h-96" : "max-h-0 border-b-0",
        )}
      >
        <div className="px-6 py-4 space-y-3">
          <Link
            href="/"
            className={cn(
              "block font-mono text-xs uppercase tracking-widest transition-colors duration-200",
              pathname === "/" ? "text-foreground" : "text-muted-foreground",
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          {brands.map((brand) => {
            const isActive = pathname === `/${brand.slug}`;
            return (
              <Link
                key={brand.slug}
                href={`/${brand.slug}`}
                className={cn(
                  "block font-mono text-xs uppercase tracking-widest transition-colors duration-200",
                  isActive ? "text-foreground" : "text-muted-foreground",
                )}
                style={{ color: isActive ? brand.accent : undefined }}
                onClick={() => setIsMenuOpen(false)}
              >
                {brand.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
