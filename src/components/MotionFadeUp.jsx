import React from "react";
import { motion } from "framer-motion";

/**
 * Reusable fade + slide animation on scroll
 *
 * Props:
 *  - delay (number): delay before animation starts
 *  - duration (number): animation duration
 *  - y (number): vertical offset (default = 40)
 *  - children: React content to animate
 */

const MotionFadeUp = ({
  children,
  delay = 0.2,
  duration = 0.8,
  y = 40,
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of element is visible
      transition={{ delay, duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default MotionFadeUp;
