import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 0,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",

  // ✅ Typography props
  fontSize = "clamp(1.6rem, 4vw, 3rem)",
  fontWeight = "500",
  lineHeight = "1.5",
  color = "inherit",
  letterSpacing = "normal",

  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) => {
  const containerRef = useRef(null);
  const scrollTriggers = useRef([]);

  // ✅ Split text into individual letters (preserve spaces)
  const splitText = useMemo(() => {
    if (typeof children !== "string") return children; // return JSX as-is
    const text = children;
    return text.split("").map((char, index) => {
      if (char === " ") return <span key={index}>&nbsp;</span>;
      return (
        <span className="inline-block letter" key={index}>
          {char}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // ✅ Kill old triggers to prevent duplication
    scrollTriggers.current.forEach((trigger) => trigger.kill());
    scrollTriggers.current = [];

    const scroller =
      scrollContainerRef?.current && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    // === 1️⃣ Fade in + rotation (whole text block) ===
    gsap.fromTo(
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

    // === 2️⃣ Letter-by-letter reveal ===
    const letterElements = el.querySelectorAll(".letter");
    if (!letterElements.length) return;

    const letterTween = gsap.fromTo(
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
    scrollTriggers.current.push(letterTween.scrollTrigger);

    // ✅ Cleanup triggers on unmount
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
