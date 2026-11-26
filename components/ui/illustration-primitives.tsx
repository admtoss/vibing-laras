"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Responsive 1:1 HTML/CSS illustration stage.
 * Scales down smoothly on narrow viewports so layered windows and floating badges
 * never clip, collide, or overflow.
 */
export function IllustrationStage({
  width,
  height,
  children,
}: {
  width: number;
  height: number;
  children: ReactNode;
}) {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = outerRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const update = () => {
      const w = el.clientWidth;
      if (w > 0) setScale(Math.min(1, w / width));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  return (
    <div
      ref={outerRef}
      aria-hidden
      className="relative mx-auto w-full select-none overflow-hidden"
      style={{ height: Math.round(height * scale) }}
    >
      <div
        className="absolute top-0 left-1/2 origin-top"
        style={{
          width,
          height,
          transform: `translateX(-50%) scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/** Tiny 3-ray accent ticks */
export function AccentRays({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      className={`pointer-events-none h-5 w-5 ${className}`}
    >
      <line
        x1="4"
        y1="12"
        x2="10"
        y2="14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="9"
        y1="5"
        x2="13"
        y2="10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="17"
        y1="3"
        x2="17"
        y2="9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Shared macOS-style traffic light dots */
export function WindowDots({ muted = false }: { muted?: boolean }) {
  return (
    <div className="flex items-center gap-1" aria-hidden>
      <span
        className={`h-1.5 w-1.5 rounded-full ${muted ? "bg-[#F87171]/75" : "bg-[#F87171]"}`}
      />
      <span
        className={`h-1.5 w-1.5 rounded-full ${muted ? "bg-[#FBBF24]/75" : "bg-[#FBBF24]"}`}
      />
      <span
        className={`h-1.5 w-1.5 rounded-full ${muted ? "bg-[#34D399]/75" : "bg-[#34D399]"}`}
      />
    </div>
  );
}

/** Shared two-tone security shield with padlock */
export function SecurityShieldSvg({
  primaryColor,
  secondaryColor,
  className = "h-[52px] w-[46px]",
}: {
  primaryColor: string;
  secondaryColor: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 52 58" fill="none" className={className}>
      <path
        d="M26 3L6 11.5V26.5C6 40.2 14.5 51.4 26 55.5C37.5 51.4 46 40.2 46 26.5V11.5L26 3Z"
        fill={primaryColor}
      />
      <path
        d="M26 3V55.5C37.5 51.4 46 40.2 46 26.5V11.5L26 3Z"
        fill={secondaryColor}
      />
      <path
        d="M21 26V22.5C21 19.7 23.2 17.5 26 17.5C28.8 17.5 31 19.7 31 22.5V26"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <rect x="18.5" y="25.5" width="15" height="12.5" rx="3" fill="white" />
      <circle cx="26" cy="30.8" r="1.5" fill={secondaryColor} />
      <path
        d="M26 31.8V34.5"
        stroke={secondaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
