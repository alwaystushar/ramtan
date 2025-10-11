import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ✅ Register plugin safely (SSR-safe)
if (
  typeof window !== "undefined" &&
  gsap &&
  !gsap.core.globals().ScrollTrigger
) {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * GsapFadeUp
 * Smooth fade-up animation for elements when entering the viewport.
 *
 * Props:
 * - children: ReactNode
 * - duration: number (default: 1)
 * - delay: number (default: 0)
 * - y: number (slide distance, default: 60)
 * - offsetStart: string ("100%" = play immediately, default "90%")
 * - className: string
 */
const GsapFadeUp = ({
  children,
  duration = 1,
  delay = 0,
  y = 60,
  offsetStart = "90%", // "100%" → play immediately on mount
  className = "",
}) => {
  const elRef = useRef(null);

  useEffect(() => {
    // Prevent execution during SSR
    if (typeof window === "undefined") return;

    const el = elRef.current;
    if (!el) return;

    // Set initial state
    gsap.set(el, { opacity: 0, y });

    const ctx = gsap.context(() => {
      if (offsetStart === "100%") {
        // Play immediately (for hero sections)
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: "power3.out",
        });
      } else {
        // Scroll-triggered animation
        const tween = gsap.to(el, {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: `top ${offsetStart}`,
            toggleActions: "play none none none",
            once: true,
          },
        });

        // Refresh ScrollTrigger after layout changes
        setTimeout(() => {
          if (ScrollTrigger?.refresh) ScrollTrigger.refresh();
        }, 100);

        // Cleanup scroll trigger
        return () => {
          if (tween.scrollTrigger) tween.scrollTrigger.kill();
        };
      }
    }, el);

    // Revert GSAP context on unmount
    return () => ctx.revert();
  }, [duration, delay, y, offsetStart]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
};

export default GsapFadeUp;
