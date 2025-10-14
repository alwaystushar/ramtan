// =====================================================
// HoverEffect Component (Smooth & Stable)
// -----------------------------------------------------
// - Fixed hover animation flicker caused by layoutId conflicts.
// - Each card now animates independently for perfect smoothness.
// =====================================================

import { cn } from "./lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// ==========================
// MAIN COMPONENT
// ==========================
export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr items-stretch pb-[5vw] gap-[1vw]",
        className
      )}
    >
      {items.map((item, idx) => {
        const uniqueKey = `${item.title}-${idx}`;

        return (
          <div
            key={uniqueKey}
            className="relative w-full h-full overflow-hidden group"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* === Animated Blue Hover Background === */}
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  key={`hover-bg-${uniqueKey}`} // ✅ unique per card
                  className="absolute inset-0 block w-full h-full bg-blue-900"
                  initial={{ opacity: 0, scaleY: 0, originY: 1 }}
                  animate={{
                    opacity: 1,
                    scaleY: 1,
                    transition: { duration: 0.35, ease: [0.25, 0.8, 0.25, 1] },
                  }}
                  exit={{
                    opacity: 0,
                    scaleY: 0,
                    transition: { duration: 0.25, ease: "easeInOut" },
                  }}
                />
              )}
            </AnimatePresence>

            {/* === Card Content === */}
            <Card>
              <div className="h-[22vw] flex flex-col justify-between">
                <div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>

                <div className="flex items-end justify-between w-full">
                  <CardDate>{item.date}</CardDate>
                </div>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

// ==========================
// CARD WRAPPER
// ==========================
export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "w-full p-[1vw] border border-black/75 group-hover:border-blue-900 relative z-20 transition-all duration-300 min-h-[22vw]",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-[1vw] transition-colors duration-300 group-hover:text-white">
          {children}
        </div>
      </div>
    </div>
  );
};

// ==========================
// CARD TITLE
// ==========================
export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-[1.4vw] sm:text-[1.2vw] md:text-[1vw] lg:text-[0.8vw] p-[0.1vw] px-[0.6vw] max-w-[6.6vw] border border-black/75 group-hover:border-white rounded-full text-black/85 mt-[0.8vw] transition-colors duration-300 group-hover:text-white",
        className
      )}
    >
      {children}
    </h4>
  );
};

// ==========================
// CARD DESCRIPTION
// ==========================
export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-[1.8vw] text-[1.6vw] text-blue-900 font-medium tracking-wide leading-[120%] transition-colors duration-300 group-hover:text-white",
        className
      )}
    >
      {children}
    </p>
  );
};

// ==========================
// CARD DATE
// ==========================
export const CardDate = ({ className, children }) => {
  return (
    <p
      className={cn(
        "text-[0.8vw] text-black/85 tracking-wide group-hover:text-zinc-200 transition-colors duration-300",
        className
      )}
    >
      {children}
    </p>
  );
};
