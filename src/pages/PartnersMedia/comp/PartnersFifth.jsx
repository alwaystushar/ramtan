import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BusinessGrowth() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full text-white overflow-hidden lg:py-[8vw] py-[28vw] lg:px-[6vw] header-dark lg:h-screen"
      style={{
        backgroundImage: "url('./img/home-hero1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* === Overlay === */}
      <div className="absolute inset-0 bg-[#001489]/80"></div>

      {/* === Content === */}
      <div className="relative z-10 max-w-[90%] mx-auto">
        {/* Heading */}
        <div className="mb-[4vw]">
          <h4 className="text-[1.1vw] max-sm:text-[4vw] font-medium text-[#5FA0FF] mb-[0.8vw] tracking-wide">
            Business Growth
          </h4>
          <h2 className="text-[2.8vw] max-sm:text-[7vw] leading-[1.2] font-semibold">
            Transforming Visions into <br /> Exceptional Events
          </h2>
        </div>

        {/* Cards Section */}
        <div
          className="
            flex justify-between gap-[2vw] lg:mt-[6vw] mt-[16vw] flex-wrap
            max-sm:flex-nowrap max-sm:overflow-x-auto max-sm:overflow-y-hidden
            max-sm:scroll-smooth max-sm:pb-[4vw] max-sm:gap-[6vw]
          "
        >
          {/* Card 1 */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="relative w-[22%] max-sm:w-[75vw] flex-shrink-0 text-white"
          >
            <h3 className="text-[2vw] max-sm:text-[8vw] font-semibold mb-[0.5vw]">
              20%
            </h3>
            <p className="text-[0.95vw] max-sm:text-[4vw] leading-[1.5] text-gray-200 mb-[0.8vw]">
              Increase in brand awareness after a Ramtan-designed exhibition.
            </p>
            <p className="text-[0.75vw] max-sm:text-[3.5vw] text-gray-400">
              Source: <br />
              Ramtan Client Case Studies
            </p>
            <div className="absolute left-[-1vw] top-[0vw] w-[0.1vw] h-[12vw] bg-white/60"></div>
            <div className="absolute left-[-1.1vw] bottom-[2vw] w-[0.3vw] h-[6vw] bg-white"></div>
          </div>

          {/* Card 2 */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="relative w-[22%] max-sm:w-[75vw] flex-shrink-0 text-white"
          >
            <h3 className="text-[2vw] max-sm:text-[8vw] font-semibold mb-[0.5vw]">
              35–50%
            </h3>
            <p className="text-[0.95vw] max-sm:text-[4vw] leading-[1.5] text-gray-200 mb-[0.8vw]">
              Higher engagement rates at events managed by Ramtan.
            </p>
            <p className="text-[0.75vw] max-sm:text-[3.5vw] text-gray-400">
              Source: <br />
              Event Industry Benchmarks
            </p>
            <div className="absolute left-[-1vw] top-[0vw] w-[0.1vw] h-[12vw] bg-white/60"></div>
            <div className="absolute left-[-1.1vw] bottom-[2vw] w-[0.3vw] h-[6vw] bg-white"></div>
          </div>

          {/* Card 3 */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="relative w-[22%] max-sm:w-[75vw] flex-shrink-0 text-white"
          >
            <h3 className="text-[2vw] max-sm:text-[8vw] font-semibold mb-[0.5vw]">
              15–25%
            </h3>
            <p className="text-[0.95vw] max-sm:text-[4vw] leading-[1.5] text-gray-200 mb-[0.8vw]">
              Growth in new business leads through Ramtan’s strategic event
              planning.
            </p>
            <p className="text-[0.75vw] max-sm:text-[3.5vw] text-gray-400">
              Source: <br />
              Ramtan Client Data
            </p>
            <div className="absolute left-[-1vw] top-[0vw] w-[0.1vw] h-[12vw] bg-white/60"></div>
            <div className="absolute left-[-1.1vw] bottom-[2vw] w-[0.3vw] h-[6vw] bg-white"></div>
          </div>

          {/* Card 4 */}
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="relative w-[22%] max-sm:w-[75vw] flex-shrink-0 text-white"
          >
            <h3 className="text-[2vw] max-sm:text-[8vw] font-semibold mb-[0.5vw]">
              80%
            </h3>
            <p className="text-[0.95vw] max-sm:text-[4vw] leading-[1.5] text-gray-200 mb-[0.8vw]">
              Client satisfaction with Ramtan’s ability to deliver memorable,
              unique, and impactful experiences.
            </p>
            <p className="text-[0.75vw] max-sm:text-[3.5vw] text-gray-400">
              Source: <br />
              Client Satisfaction Surveys
            </p>
            <div className="absolute left-[-1vw] top-[0vw] w-[0.1vw] h-[12vw] bg-white/60"></div>
            <div className="absolute left-[-1.1vw] bottom-[2vw] w-[0.3vw] h-[6vw] bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
