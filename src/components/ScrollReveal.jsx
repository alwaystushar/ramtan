import React, { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";

const ScrollReveal = ({
  children,
  scrollContainerRef,
  baseOpacity = 0.25,
  containerClassName = "",
  textClassName = "",

  // Typography (responsive)
  fontWeight = "300",
  lineHeight = "130%",
  color = "#05178B",
  letterSpacing = "0.02vw",

  // Scroll behavior
  startTrigger = "top 90%", // starts slightly later
  endTrigger = "top 30%", // ends earlier for faster animation
}) => {
  const containerRef = useRef(null);
  const scrollTriggers = useRef([]);

  // 🔠 Split into words → then split each word into letters
  const renderText = (node) => {
    if (typeof node === "string") {
      return node.split(/(\s+)/).map((word, wi) => {
        if (word.trim() === "") return <span key={wi}>&nbsp;</span>;
        return (
          <span key={wi} className="inline-block word whitespace-nowrap">
            {word.split("").map((char, ci) => (
              <span key={ci} className="inline-block letter">
                {char}
              </span>
            ))}
          </span>
        );
      });
    }

    if (React.isValidElement(node)) {
      return React.cloneElement(node, {
        children: React.Children.map(node.props.children, renderText),
      });
    }

    return node;
  };

  const splitText = useMemo(
    () => React.Children.map(children, renderText),
    [children]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    (async () => {
      try {
        const mod = await import("gsap/ScrollTrigger");
        const ScrollTrigger =
          mod?.ScrollTrigger ||
          gsap.core?.globals?.().ScrollTrigger ||
          mod?.default;

        if (ScrollTrigger && !gsap.core.globals().ScrollTrigger) {
          gsap.registerPlugin(ScrollTrigger);
        }

        const el = containerRef.current;
        if (!el) return;

        // Clean old triggers
        scrollTriggers.current.forEach((t) => t.kill());
        scrollTriggers.current = [];

        const scroller =
          scrollContainerRef?.current && scrollContainerRef.current
            ? scrollContainerRef.current
            : window;

        // 🎬 Letter-by-letter opacity reveal inside each word
        const letters = el.querySelectorAll(".letter");

        if (letters.length) {
          const tween = gsap.fromTo(
            letters,
            { opacity: baseOpacity },
            {
              opacity: 1,
              stagger: 0.025, // faster animation
              ease: "none",
              scrollTrigger: {
                trigger: el,
                scroller,
                start: startTrigger,
                end: endTrigger,
                scrub: true,
              },
            }
          );

          scrollTriggers.current.push(tween.scrollTrigger);
        }
      } catch (err) {
        console.warn("ScrollReveal init failed:", err);
      }
    })();

    return () => {
      scrollTriggers.current.forEach((t) => t.kill());
      scrollTriggers.current = [];
    };
  }, [scrollContainerRef, baseOpacity, startTrigger, endTrigger]);

  return (
    <div ref={containerRef} className={`my-[2vw] ${containerClassName}`}>
      <p
        className={`font-light lg:text-[1.7vw] text-[5.5vw] ${textClassName}`}
        style={{
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
