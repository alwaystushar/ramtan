// src/components/AnimatedShape.jsx
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function AnimatedShape() {
   const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        scale: 1,
        height: "29vw", // final height for lg screens
        transition: { duration: 1.2, ease: "easeOut" },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className="lg:w-[28vw] w-[68vw] mt-[4vw] relative overflow-hidden border-t-[0.3vw] border-[#89b7ff] bg-[#1132b4]"
      initial={{ opacity: 0, scale: 0.9, height: "0vw" }}
      animate={controls}
    >
      {/* Inner Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(325deg, rgb(106, 165, 255) 0px, rgb(106, 165, 255) 1px, transparent .1vw, transparent .5vw)",
        }}
      ></div>

      {/* Top Highlight Border */}
      <div className="absolute top-0 left-0 w-full h-[0.3vw] bg-[#89b7ff]"></div>
    </motion.div>
  );
}