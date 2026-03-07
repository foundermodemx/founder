"use client";

import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import {
  SplitFlapAudioProvider,
  SplitFlapMuteToggle,
  useSplitFlapAudio,
} from "@/components/split-flap-text";

// ─── Types ───────────────────────────────────────────────────────────
interface BrandSplitFlapProps {
  /** Text to display (will be uppercased) */
  text: string;
  /** Brand accent color (any CSS color value, e.g. oklch, hsl, hex) */
  color: string;
  /** Speed in ms per flip cycle (default 50) */
  speed?: number;
  /** Show mute toggle below the text (default true) */
  showMuteToggle?: boolean;
  className?: string;
}

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

// ─── Main component ──────────────────────────────────────────────────
export function BrandSplitFlap({
  text,
  color,
  speed = 50,
  showMuteToggle = true,
  className = "",
}: BrandSplitFlapProps) {
  return (
    <div className={`w-full max-w-full h-min overflow-hidden ${className}`}>
      <BrandSplitFlapInner text={text} color={color} speed={speed} />
      {showMuteToggle && (
        <div className="mt-4">
          <SplitFlapMuteToggle />
        </div>
      )}
    </div>
  );
}

// ─── Inner renderer ──────────────────────────────────────────────────
function BrandSplitFlapInner({
  text,
  color,
  speed,
}: {
  text: string;
  color: string;
  speed: number;
}) {
  const chars = useMemo(() => text.split(""), [text]);
  const [animationKey, setAnimationKey] = useState(0);
  const [hasInitialized, setHasInitialized] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(32);
  const audio = useSplitFlapAudio();

  // Dynamically compute the largest font size that fits the container
  useEffect(() => {
    const calculate = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.clientWidth;

      const charCount = text.replace(/\s/g, "").length;
      const spaceCount = (text.match(/\s/g) || []).length;
      // Width formula: each char = 0.65em, space = 0.3em, gap = 0.08em between all
      const totalEmWidth =
        charCount * 0.65 + spaceCount * 0.3 + (text.length - 1) * 0.08;

      const maxFitPx = containerWidth / totalEmWidth;
      // Clamp between 32px (2rem) and 224px (14rem)
      const clamped = Math.max(32, Math.min(224, maxFitPx));
      setFontSize(clamped);
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, [text]);

  const handleMouseEnter = useCallback(() => {
    setAnimationKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setHasInitialized(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      className="inline-flex gap-[0.08em] items-center cursor-pointer w-full max-w-full"
      aria-label={text}
      onMouseEnter={handleMouseEnter}
      style={{ perspective: "1000px", fontSize: `${fontSize}px` }}
    >
      {chars.map((char, index) => (
        <BrandChar
          key={index}
          char={char.toUpperCase()}
          index={index}
          animationKey={animationKey}
          skipEntrance={hasInitialized}
          speed={speed}
          color={color}
          playClick={audio?.playClick}
        />
      ))}
    </div>
  );
}

// ─── Individual tile ─────────────────────────────────────────────────
function BrandChar({
  char,
  index,
  animationKey,
  skipEntrance,
  speed,
  color,
  playClick,
}: {
  char: string;
  index: number;
  animationKey: number;
  skipEntrance: boolean;
  speed: number;
  color: string;
  playClick?: () => void;
}) {
  const displayChar = CHARSET.includes(char) ? char : " ";
  const isSpace = char === " ";
  const [currentChar, setCurrentChar] = useState(
    skipEntrance ? displayChar : " ",
  );
  const [isSettled, setIsSettled] = useState(skipEntrance);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const tileDelay = 0.15 * index;

  // Settled → dark tile with brand-colored text
  // Flipping → brand-colored tile with dark text
  const bgColor = isSettled ? "hsl(0, 0%, 0%)" : color;
  const textColor = isSettled ? color : "hsl(0, 0%, 0%)";

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (isSpace) {
      setCurrentChar(" ");
      setIsSettled(true);
      return;
    }

    setIsSettled(false);
    setCurrentChar(CHARSET[Math.floor(Math.random() * CHARSET.length)]);

    const baseFlips = 8;
    const startDelay = skipEntrance ? tileDelay * 400 : tileDelay * 800;
    let flipIndex = 0;
    let hasStartedSettling = false;

    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        const settleThreshold = baseFlips + index * 3;
        if (flipIndex >= settleThreshold && !hasStartedSettling) {
          hasStartedSettling = true;
          if (intervalRef.current) clearInterval(intervalRef.current);
          setCurrentChar(displayChar);
          setIsSettled(true);
          if (playClick) playClick();
          return;
        }
        setCurrentChar(CHARSET[Math.floor(Math.random() * CHARSET.length)]);
        if (flipIndex % 2 === 0 && playClick) playClick();
        flipIndex++;
      }, speed);
    }, startDelay);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [
    displayChar,
    isSpace,
    tileDelay,
    animationKey,
    skipEntrance,
    index,
    speed,
    playClick,
  ]);

  if (isSpace) {
    return <div style={{ width: "0.3em" }} />;
  }

  return (
    <motion.div
      initial={skipEntrance ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: tileDelay, duration: 0.3, ease: "easeOut" }}
      className="relative overflow-hidden flex items-center justify-center font-(family-name:--font-bebas)"
      style={{
        width: "0.65em",
        height: "1.05em",
        backgroundColor: bgColor,
        transformStyle: "preserve-3d",
        transition: "background-color 0.15s ease",
      }}
    >
      {/* Center divider */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-black/20 pointer-events-none z-10" />

      {/* Top half */}
      <div className="absolute inset-x-0 top-0 bottom-1/2 flex items-end justify-center overflow-hidden">
        <span
          className="block translate-y-[0.52em] leading-none transition-colors duration-150"
          style={{ color: textColor }}
        >
          {currentChar}
        </span>
      </div>

      {/* Bottom half */}
      <div className="absolute inset-x-0 top-1/2 bottom-0 flex items-start justify-center overflow-hidden">
        <span
          className="-translate-y-[0.52em] leading-none transition-colors duration-150"
          style={{ color: textColor }}
        >
          {currentChar}
        </span>
      </div>

      {/* Flip panel */}
      <motion.div
        key={`${animationKey}-${isSettled}`}
        initial={{ rotateX: -90 }}
        animate={{ rotateX: 0 }}
        transition={{
          delay: skipEntrance ? tileDelay * 0.5 : tileDelay + 0.15,
          duration: 0.25,
          ease: [0.22, 0.61, 0.36, 1],
        }}
        className="absolute inset-x-0 top-0 bottom-1/2 origin-bottom overflow-hidden"
        style={{
          backgroundColor: bgColor,
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          transition: "background-color 0.15s ease",
        }}
      >
        <div className="flex h-full items-end justify-center">
          <span
            className="translate-y-[0.52em] leading-none transition-colors duration-150"
            style={{ color: textColor }}
          >
            {currentChar}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
