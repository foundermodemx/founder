"use client";

import { useLanguage } from "./use-language";
import { cn } from "@/lib/utils";
import type { Language } from "./language-provider";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const options: Language[] = ["en", "es"];

  return (
    <div className="flex items-center gap-0.5 border border-border/40 p-0.5">
      {options.map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={cn(
            "px-2 py-1 font-mono text-[10px] uppercase tracking-widest transition-all duration-200",
            language === lang
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
