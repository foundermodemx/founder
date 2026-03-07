"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { MediaImage } from "./media-image";
import { MediaVideo } from "./media-video";

export interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
  poster?: string;
}

interface MediaGalleryProps {
  items: MediaItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function MediaGallery({
  items,
  columns = 3,
  className,
}: MediaGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % items.length : null,
    );
  }, [items.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + items.length) % items.length : null,
    );
  }, [items.length]);

  const colClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : columns === 4
        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      <div className={cn("grid gap-4 md:gap-6", colClass, className)}>
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="text-left cursor-pointer group"
          >
            {item.type === "image" ? (
              <MediaImage
                src={item.src}
                alt={item.alt ?? ""}
                caption={item.caption}
                fill
              />
            ) : (
              <MediaVideo
                src={item.src}
                poster={item.poster}
                caption={item.caption}
                controls={false}
                autoPlay
                muted
                loop
              />
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200 z-10"
          >
            ✕ Close
          </button>

          {/* Nav: Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200 font-mono text-2xl z-10"
          >
            ←
          </button>

          {/* Content */}
          <div
            className="relative max-w-5xl max-h-[80vh] w-full mx-12"
            onClick={(e) => e.stopPropagation()}
          >
            {items[lightboxIndex].type === "image" ? (
              <MediaImage
                src={items[lightboxIndex].src}
                alt={items[lightboxIndex].alt ?? ""}
                caption={items[lightboxIndex].caption}
              />
            ) : (
              <MediaVideo
                src={items[lightboxIndex].src}
                poster={items[lightboxIndex].poster}
                caption={items[lightboxIndex].caption}
                controls
                autoPlay={false}
              />
            )}
          </div>

          {/* Nav: Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200 font-mono text-2xl z-10"
          >
            →
          </button>

          {/* Counter */}
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            {lightboxIndex + 1} / {items.length}
          </span>
        </div>
      )}
    </>
  );
}
