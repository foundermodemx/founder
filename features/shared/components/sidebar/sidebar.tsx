"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  brand?: string;
  items?: { id: string; label: string }[];
}

/**
 * Reusable sidebar navigation.
 * Reads section IDs from the page DOM via IntersectionObserver.
 * Accent color adapts to the --brand-accent CSS variable set by the layout.
 */
export function Sidebar({ brand, items }: SidebarProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [navItems, setNavItems] = useState<{ id: string; label: string }[]>(
    items ?? [],
  );

  // Auto-detect sections from the DOM if no items provided
  useEffect(() => {
    if (items && items.length > 0) {
      setNavItems(items);
      setActiveSection(items[0].id); // Reset active section to top when items/brand changes
      return;
    }

    // Find all sections with IDs
    const sections = document.querySelectorAll(
      "section[id], main > div > section[id]",
    );
    const detected: { id: string; label: string }[] = [];
    sections.forEach((section) => {
      const id = section.id;
      if (id) {
        // Generate label from id: "brand-hero" → "Brand Hero"
        const label = id
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        detected.push({ id, label });
      }
    });

    if (detected.length > 0) {
      setNavItems(detected);
      setActiveSection(detected[0].id);
    }
  }, [items, brand]); // Added brand dependency

  // IntersectionObserver for active section tracking
  useEffect(() => {
    if (navItems.length === 0) return;

    // Use a small timeout to let the new DOM settle
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          // Find the section that is most visible
          const visibleEntry = entries.find((e) => e.isIntersecting);
          if (visibleEntry) {
            setActiveSection(visibleEntry.target.id);
          }
        },
        {
          rootMargin: "-20% 0px -70% 0px", // Focus on the upper-middle of the screen
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
        },
      );

      navItems.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [navItems, brand]); // Added brand dependency

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (navItems.length === 0) return null;

  return (
    <nav
      className="fixed left-0 top-0 z-40 h-screen w-16 md:w-20 hidden md:flex flex-col justify-center border-r border-border/30 bg-background/80 backdrop-blur-sm"
      data-brand={brand}
    >
      <div className="flex flex-col gap-6 px-4">
        {navItems.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="group relative flex items-center gap-3"
          >
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-all duration-300",
                activeSection === id
                  ? "scale-125"
                  : "bg-muted-foreground/40 group-hover:bg-foreground/60",
              )}
              style={
                activeSection === id
                  ? { backgroundColor: "var(--brand-accent, white)" }
                  : undefined
              }
            />
            <span
              className={cn(
                "absolute left-6 font-mono text-[10px] uppercase tracking-widest opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:left-8 whitespace-nowrap",
                activeSection === id ? "text-current" : "text-muted-foreground",
              )}
              style={
                activeSection === id
                  ? { color: "var(--brand-accent, white)" }
                  : undefined
              }
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
