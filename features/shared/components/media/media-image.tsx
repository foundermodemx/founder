"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface MediaImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  caption?: string;
  priority?: boolean;
  className?: string;
  fill?: boolean;
}

export function MediaImage({
  src,
  alt,
  width,
  height,
  aspectRatio = "16/9",
  caption,
  priority = false,
  className,
  fill = false,
}: MediaImageProps) {
  return (
    <figure className={cn("relative w-full", className)}>
      <div
        className="relative w-full overflow-hidden border border-border/30 bg-card"
        style={{ aspectRatio: fill ? aspectRatio : undefined }}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
            priority={priority}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width ?? 800}
            height={height ?? 450}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            priority={priority}
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
