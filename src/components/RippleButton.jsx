import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

/**
 * GsapHoverRippleButton
 *
 * - Circular ripple effect starts from the hover side and fades out.
 * - Button border and ripple colors are fully customizable.
 *
 * Props:
 *  - children: ReactNode (icon / text)
 *  - size: font size (default "1vw")
 *  - onClick: click handler
 *  - className: extra Tailwind classes
 *  - borderColor: Tailwind-compatible color class (default "border-white/55")
 *  - rippleColor: CSS color value (default "rgba(255,255,255,0.95)")
 */
export default function RippleButton({
  children = "Button",
  size = "1vw",
  onClick,
  className = "",
  borderColor = "border-white/55", // ✅ default border color
  rippleColor = "rgba(255,255,255,0.95)", // ✅ default ripple color
}) {
  const btnRef = useRef(null);
  const rippleRef = useRef(null);
  const activeTween = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const ripple = rippleRef.current;
    if (!btn || !ripple) return;

    const playRippleAt = (clientX, clientY) => {
      const rect = btn.getBoundingClientRect();

      const x =
        typeof clientX === "number" ? clientX - rect.left : rect.width / 2;
      const y =
        typeof clientY === "number" ? clientY - rect.top : rect.height / 2;

      const distTL = Math.hypot(x - 0, y - 0);
      const distTR = Math.hypot(rect.width - x, y - 0);
      const distBL = Math.hypot(x - 0, rect.height - y);
      const distBR = Math.hypot(rect.width - x, rect.height - y);
      const maxDist = Math.max(distTL, distTR, distBL, distBR);
      const diameter = Math.ceil(maxDist * 2);

      if (activeTween.current) {
        activeTween.current.kill();
        activeTween.current = null;
      }

      gsap.set(ripple, {
        width: diameter,
        height: diameter,
        left: x,
        top: y,
        xPercent: -50,
        yPercent: -50,
        scale: 0,
        opacity: 0.45,
        backgroundColor: rippleColor, // ✅ uses your custom color
        pointerEvents: "none",
      });

      activeTween.current = gsap.to(ripple, {
        scale: 1,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        onComplete: () => {
          gsap.set(ripple, { opacity: 0, scale: 0 });
          activeTween.current = null;
        },
      });
    };

    const onPointerEnter = (e) => playRippleAt(e.clientX, e.clientY);
    const onMouseEnter = (e) => playRippleAt(e.clientX, e.clientY);

    btn.addEventListener("pointerenter", onPointerEnter);
    btn.addEventListener("mouseenter", onMouseEnter);

    return () => {
      btn.removeEventListener("pointerenter", onPointerEnter);
      btn.removeEventListener("mouseenter", onMouseEnter);
      if (activeTween.current) activeTween.current.kill();
    };
  }, [rippleColor]); // ✅ reapply if rippleColor changes dynamically

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      style={{ fontSize: size }}
      className={`relative overflow-hidden border ${borderColor} px-[1vw] py-[1vw] rounded-full flex items-center justify-center transition-all duration-300 ${className}`}
    >
      {/* Ripple Element */}
      <span
        ref={rippleRef}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 0,
          height: 0,
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
          opacity: 0,
          willChange: "transform, opacity, width, height",
          filter: "blur(0.15vw)",
        }}
      />

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </button>
  );
}
