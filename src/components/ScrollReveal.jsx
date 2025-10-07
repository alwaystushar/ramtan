import React, { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 0,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",

  // Typography props
  fontSize = "4vw",
  fontWeight = "500",
  lineHeight = "1.5",
  color = "inherit",
  letterSpacing = "normal",

  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) => {
  const containerRef = useRef(null);
  const scrollTriggers = useRef([]);

  const splitText = useMemo(() => {
    if (typeof children !== "string") return children;
    return children.split("").map((char, index) =>
      char === " " ? (
        <span key={index}>&nbsp;</span>
      ) : (
        <span className="inline-block letter" key={index}>
          {char}
        </span>
      )
    );
  }, [children]);

  useEffect(() => {
    // ✅ Run only in browser
    if (typeof window === "undefined") return;

    // ✅ Dynamic import of ScrollTrigger (guarded)
    (async () => {
      try {
        const mod = await import("gsap/ScrollTrigger");
        const ScrollTrigger = mod?.ScrollTrigger || gsap.core?.globals?.().ScrollTrigger || mod?.default;
        if (ScrollTrigger && !gsap.core.globals().ScrollTrigger) {
          gsap.registerPlugin(ScrollTrigger);
        }

        const el = containerRef.current;
        if (!el) return;

        // Clear old triggers
        scrollTriggers.current.forEach((trigger) => trigger && trigger.kill && trigger.kill());
        scrollTriggers.current = [];

        const scroller = scrollContainerRef?.current && scrollContainerRef.current ? scrollContainerRef.current : window;

        // 1️⃣ Fade in + rotation of the entire text
        let mainTween = null;
        try {
          mainTween = gsap.fromTo(
            el,
            { opacity: baseOpacity, rotate: baseRotation, transformOrigin: "0% 50%" },
            {
              opacity: 1,
              rotate: 0,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                scroller,
                start: "top bottom",
                end: rotationEnd,
                scrub: true,
              },
            }
          );
        } catch (err) {
          // If GSAP complains about null targets, avoid crashing and skip this tween
          // console.warn("ScrollReveal: mainTween failed", err);
        }
        if (mainTween && mainTween.scrollTrigger) scrollTriggers.current.push(mainTween.scrollTrigger);

        // 2️⃣ Letter-by-letter reveal
        const nodeList = el.querySelectorAll(".letter");
        const letterElements = Array.from(nodeList).filter((n) => n instanceof Element);
        if (letterElements.length) {
          let letterTween = null;
          try {
            letterTween = gsap.fromTo(
              letterElements,
              {
                opacity: 0,
                filter: enableBlur ? `blur(${blurStrength}px)` : "none",
                y: "0.5vw",
                willChange: "opacity, filter, transform",
              },
              {
                opacity: 1,
                filter: "blur(0px)",
                y: "0vw",
                stagger: 0.03,
                ease: "none",
                scrollTrigger: {
                  trigger: el,
                  scroller,
                  start: "top bottom-=20%",
                  end: wordAnimationEnd,
                  scrub: true,
                },
              }
            );
          } catch (err) {
            // console.warn("ScrollReveal: letterTween failed", err);
          }
          if (letterTween && letterTween.scrollTrigger) scrollTriggers.current.push(letterTween.scrollTrigger);
        }
      } catch (importErr) {
        // If dynamic import fails, don't break the app — GSAP animations will be skipped
        // console.error("ScrollReveal: failed to load ScrollTrigger", importErr);
      }
    })();

    // ✅ Cleanup
    return () => {
      scrollTriggers.current.forEach((trigger) => trigger.kill());
      scrollTriggers.current = [];
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  return (
    <div ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p
        className={`font-semibold ${textClassName}`}
        style={{
          fontSize,
          fontWeight,
          lineHeight,
          color,
          letterSpacing,
        }}
      >
        {splitText}
      </p>
    </div>
  );
};

export default ScrollReveal;
