import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ✅ Safe plugin registration
if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Fade up elements when they enter the viewport (once)
 * - Starts fully invisible (opacity: 0)
 * - Slides up by `y` distance
 * - Plays smoothly once when visible
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
    const el = elRef.current;
    if (!el) return;

    // Ensure element starts invisible before scroll trigger runs
    gsap.set(el, { opacity: 0, y });

    const ctx = gsap.context(() => {
      // 🔹 Case 1: Play immediately (e.g. hero section)
      if (offsetStart === "100%") {
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: "power3.out",
        });
        return;
      }

      // 🔹 Case 2: Play on scroll
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
          once: true, // play only once
        },
      });

      // Slight delay to refresh ScrollTrigger after layout
      setTimeout(() => {
        try {
          ScrollTrigger.refresh();
        } catch {}
      }, 100);

      return () => {
        try {
          tween.scrollTrigger && tween.scrollTrigger.kill();
        } catch {}
      };
    }, el);

    // Cleanup on unmount
    return () => ctx.revert();
  }, [duration, delay, y, offsetStart]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
};

export default GsapFadeUp;
