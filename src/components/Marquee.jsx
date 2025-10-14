import React from "react";
import Marquee from "react-fast-marquee";

/**
 * MarqueeText Component
 *
 * Props:
 * - text: string (required)
 * - className: string (Tailwind text styles — e.g. "text-white text-xl font-semibold")
 * - speed: number (default 50)
 * - direction: "left" | "right" (default "left")
 * - gradient: boolean (default false)
 */
const MarqueeText = ({
  text = "We are committed to delivering exceptional event experiences that are both unique and innovative",
  className = "text-base font-medium",
  speed = 50,
  direction = "left",
  gradient = false,
}) => {
  return (
    <Marquee
      speed={speed}
      direction={direction}
      gradient={gradient}
      pauseOnHover={true}
    >
      <p className={`mx-8 whitespace-nowrap ${className}`}>
        {text}
      </p>
    </Marquee>
  );
};

export default MarqueeText;
