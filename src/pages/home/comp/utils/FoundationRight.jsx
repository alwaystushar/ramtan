import { useState, useRef } from "react";
import { motion } from "framer-motion";
import useMousePosition from "./useMousePosition";

export default function FoundationRight() {
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);
  const { x, y } = useMousePosition(sectionRef, isHovered);
  const size = isHovered ? 20 : 0.1; // 400px → 20vw, 40px → 2vw

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center overflow-hidden bg-black "
    >
      {/* Container for text (auto height) */}
      <div className="relative w-full flex justify-center py-[1vw] bg-[var(--blue)]">
        {/* Background Text */}
        <div className="relative z-[1] text-[#283a9c] bg-[var(--blue)] lg:text-[4.5vw] text-[8.95vw] leading-[110%] text-start pointer-events-none">
          <p>
            We are recognized as a leading organizer of specialized exhibitions,
            national events, and government-sponsored seminars,
            <br className="max-sm:hidden"/> consistently exceeding expectations and shaping successful
            event experiences.
          </p>
        </div>

        {/* Foreground Mask Layer */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-start lg:text-[4.5vw] text-[8.95vw] leading-[110%] text-white bg-[var(--blue)] z-[2] pointer-events-none"
          style={{
            WebkitMaskImage: 'url("/svg/mask.svg")',
            maskImage: 'url("/svg/mask.svg")',
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
          // ✅ Add initial numeric mask size
          initial={{
            WebkitMaskSize: "2vw",
            maskSize: "2vw",
            WebkitMaskPosition: "0vw 0vw",
            maskPosition: "0vw 0vw",
          }}
          animate={{
            WebkitMaskPosition: `${x - size / 2}vw ${y - size / 2}vw`,
            maskPosition: `${x - size / 2}vw ${y - size / 2}vw`,
            WebkitMaskSize: `${size}vw`,
            maskSize: `${size}vw`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <p>
            We are recognized as a leading organizer of specialized exhibitions,
            national events, and government-sponsored seminars,
            <br className="max-sm:hidden"/> consistently exceeding expectations and shaping successful
            event experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
