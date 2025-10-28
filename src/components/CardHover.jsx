import { cn } from "./lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Embla setup for mobile carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
    loop: false,
  });

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Disable hover while dragging (UX improvement)
  const handlePointerDown = useCallback(() => setHoveredIndex(null), []);
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("pointerDown", handlePointerDown);
    return () => emblaApi.off("pointerDown", handlePointerDown);
  }, [emblaApi, handlePointerDown]);

  return (
    <div className={cn("pb-[5vw]", className)}>
      {isMobile ? (
        // ===== MOBILE: Embla Carousel =====
        <div className="w-full overflow-hidden embla" ref={emblaRef}>
          <div className="embla__container flex gap-[1vw] px-[8vw]">
            {items.map((item, idx) => (
              <div
                key={`${item.title}-${idx}`}
                className="embla__slide flex-[0_0_80%] min-w-0 relative overflow-hidden"
              >
                <Card isMobile>
                  <div className="flex flex-col justify-between h-[55vw]">
                    <div>
                      <CardTitle isMobile>{item.title}</CardTitle>
                      <CardDescription isMobile>
                        {item.description}
                      </CardDescription>
                    </div>
                    <div className="flex items-end justify-between w-full">
                      <CardDate isMobile>{item.date}</CardDate>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // ===== DESKTOP: Grid with Hover =====
        <div className="grid grid-cols-3 gap-[1vw] items-stretch auto-rows-fr ">
          {items.map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              className="relative w-full h-full overflow-hidden transition-all duration-300 group"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    key={`hover-bg-${item.title}-${idx}`}
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

              <Card>
                <div className="flex flex-col justify-between lg:h-[22vw]">
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
          ))}
        </div>
      )}
    </div>
  );
};

// CARD COMPONENTS ==================================

export const Card = ({ className, children, isMobile }) => (
  <div
    className={cn(
      "w-full  border border-black/75 relative z-20 transition-all duration-300",
      isMobile ? "min-h-[55vw] border-black/50 p-[1.45vw]" : "lg:min-h-[22vw] group-hover:border-blue-900 p-[1vw]",
      className
    )}
  >
    <div className="relative z-50">
      <div className={cn(" transition-colors duration-300", isMobile ? "text-black p-[2vw]" : "group-hover:text-white p-[1vw]")}>
        {children}
      </div>
    </div>
  </div>
);

export const CardTitle = ({ className, children, isMobile }) => (
  <h4
    className={cn(
      "w-fit whitespace-nowrap rounded-full mt-[0.8vw] border border-black/75 text-black/85 transition-colors duration-300",
      isMobile
        ? "text-[2vw] px-[2vw] py-[1vw] border-black/50"
        : "text-[0.8vw] px-[0.6vw] py-[0.1vw] group-hover:border-white group-hover:text-white",
      className
    )}
  >
    {children}
  </h4>
);

export const CardDescription = ({ className, children, isMobile }) => (
  <p
    className={cn(
      "font-medium tracking-wide leading-[120%] transition-colors duration-300 mt-[1.8vw]",
      isMobile
        ? "text-[4vw] font-medium text-blue-900"
        : "lg:text-[1.6vw] text-blue-900 group-hover:text-white",
      className
    )}
  >
    {children}
  </p>
);

export const CardDate = ({ className, children, isMobile }) => (
  <p
    className={cn(
      "tracking-wide transition-colors duration-300",
      isMobile
        ? "text-[3vw] text-black/70"
        : "text-[0.8vw] text-black/85 group-hover:text-zinc-200",
      className
    )}
  >
    {children}
  </p>
);
