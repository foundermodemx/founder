"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

interface MediaVideoProps {
  src: string;
  poster?: string;
  caption?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  aspectRatio?: string;
  className?: string;
}

export function MediaVideo({
  src,
  poster,
  caption,
  autoPlay = false,
  loop = true,
  muted = true,
  controls = true,
  aspectRatio = "16/9",
  className,
}: MediaVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <figure className={cn("relative w-full", className)}>
      <div
        className="relative w-full overflow-hidden border border-border/30 bg-card"
        style={{ aspectRatio }}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          controls={controls}
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
