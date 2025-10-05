// src/components/GsapFadeUp.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (!gsap.core.plugins || !gsap.core.plugins.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * GsapFadeUp (scroll-triggered, plays once)
 *
 * Props:
 * - children
 * - duration (default 1)
 * - delay (default 0)
 * - y (default 60)
 * - opacity (default 0)
 * - offsetStart (string like "90%" or "100%")
 *    - if "100%" -> play immediately on mount (no ScrollTrigger)
 *    - otherwise uses ScrollTrigger start: `top ${offsetStart}`
 * - className
 */
const GsapFadeUp = ({
  children,
  duration = 1,
  delay = 0,
  y = 60,
  opacity = 0,
  offsetStart = "90%", // "100%" => play on mount
  className = "",
}) => {
  const elRef = useRef(null);

  useEffect(() => {
    // helper that asks ScrollTrigger to re-evaluate positions
    const refreshST = () => {
      try {
        ScrollTrigger.refresh();
      } catch (e) {
        // noop if ScrollTrigger isn't ready — defensive
      }
    };

    // notify function used on start/enter/complete to help other systems (header) recheck
    const notify = () => window.dispatchEvent(new Event("recheckHeaderOverlap"));

    const ctx = gsap.context(() => {
      // If offsetStart === "100%" animate immediately on mount (no ScrollTrigger)
      if (offsetStart === "100%") {
        gsap.from(elRef.current, {
          y,
          opacity,
          duration,
          delay,
          ease: "power3.out",
          onStart: notify,
          onComplete: notify,
          immediateRender: false,
        });
        // still refresh in case other triggers depend on layout
        setTimeout(refreshST, 50);
      } else {
        // scroll-triggered animation, play once when element reaches start
        gsap.from(elRef.current, {
          y,
          opacity,
          duration,
          delay,
          ease: "power3.out",
          immediateRender: false, // important so it doesn't snapshot wrong initial state
          scrollTrigger: {
            trigger: elRef.current,
            start: `top ${offsetStart}`,
            once: true,
            toggleActions: "play none none none",
            onEnter: () => {
              notify();
            },
            onEnterBack: () => {
              // in case user scrolls back up
              notify();
            },
            onRefresh: (self) => {
              // if element already in active range on refresh, call notify
              try {
                if (self && self.isActive) notify();
              } catch (e) {}
            },
          },
          onComplete: notify,
        });

        // Immediately refresh positions so that elements that are already in view will play
        // Use a microtask + timeout to cover different render timings (fast & robust)
        Promise.resolve().then(() => {
          refreshST();
          setTimeout(refreshST, 60);
        });
      }
    }, elRef);

    // Listen for global refresh events (header/navigation already uses 'recheckHeaderOverlap')
    const refreshHandler = () => {
      // debounce-ish tiny guard not required here; ScrollTrigger.refresh is cheap
      try {
        ScrollTrigger.refresh();
      } catch (e) {}
    };
    window.addEventListener("recheckHeaderOverlap", refreshHandler);
    // also support an explicit event name if you want: 'gsapRefresh'
    window.addEventListener("gsapRefresh", refreshHandler);

    return () => {
      window.removeEventListener("recheckHeaderOverlap", refreshHandler);
      window.removeEventListener("gsapRefresh", refreshHandler);
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration, delay, y, opacity, offsetStart]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
};

export default GsapFadeUp;
