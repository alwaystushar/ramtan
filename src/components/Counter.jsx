// src/components/Counter.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

export default function Counter({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals, // optional — auto-detect if not given
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  // 👇 Auto-detect number of decimals from the value (e.g., 45.678 → 3)
  const decimalPlaces =
    decimals !== undefined
      ? decimals
      : value % 1 !== 0
      ? value.toString().split(".")[1]?.length || 0
      : 0;

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Number(latest.toFixed(decimalPlaces)));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration, decimalPlaces]);

  return (
    <motion.span ref={ref}>
      {prefix}
      {displayValue.toLocaleString(undefined, {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      })}
      {suffix}
    </motion.span>
  );
}
