"use client";

import { cn } from "@/lib/utils";
import { getBrandAsset } from "./brand-config";

interface BrandLogoProps {
  brand: string;
  variant?: "imagotype" | "isotype";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { iso: "w-8 h-8 text-xs", imagoText: "text-sm" },
  md: { iso: "w-12 h-12 text-base", imagoText: "text-lg" },
  lg: { iso: "w-16 h-16 text-xl", imagoText: "text-2xl" },
};

export function BrandLogo({
  brand,
  variant = "imagotype",
  size = "md",
  className,
}: BrandLogoProps) {
  const asset = getBrandAsset(brand);
  if (!asset) return null;

  const sizes = sizeMap[size];

  if (variant === "isotype") {
    return (
      <div
        className={cn(
          "inline-flex items-center justify-center font-mono font-bold tracking-tight border",
          sizes.iso,
          className,
        )}
        style={{
          borderColor: `color-mix(in oklch, ${asset.color} 40%, transparent)`,
          color: asset.color,
        }}
      >
        {asset.symbol}
      </div>
    );
  }

  // imagotype — symbol + name
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <div
        className={cn(
          "inline-flex items-center justify-center font-mono font-bold tracking-tight border",
          sizes.iso,
        )}
        style={{
          borderColor: `color-mix(in oklch, ${asset.color} 40%, transparent)`,
          color: asset.color,
        }}
      >
        {asset.symbol}
      </div>
      <span
        className={cn("font-(--font-bebas) tracking-wide", sizes.imagoText)}
        style={{ color: asset.color }}
      >
        {asset.displayName}
      </span>
    </div>
  );
}
