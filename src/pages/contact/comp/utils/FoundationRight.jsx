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
      className="relative flex items-center justify-center overflow-hidden max-sm:px-[3vw]"
    >
      {/* Container for text (auto height) */}
      <div className="relative w-full flex justify-center py-[1vw]">
        {/* Background Text */}
        <div className="relative z-[1] text-[#8d8d95]  lg:text-[4vw] text-[8.5vw] leading-[110%] text-start pointer-events-none font-medium">
          <p>
            Ready to elevate your
next event? Contact
us to discover how
Ramtan can
transform your vision
into an unforgettable
experience.
          </p>
        </div>

        {/* Foreground Mask Layer */}
        <motion.div
          className="absolute top-0 font left-0 w-full h-full flex items-center justify-center text-start lg:text-[4vw] font-medium text-[8.5vw] leading-[110%] text-[#061685] z-[2] pointer-events-none"
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
                        Ready to elevate your
next event? Contact
us to discover how
Ramtan can
transform your vision
into an unforgettable
experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}