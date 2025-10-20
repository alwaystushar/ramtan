import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PartnersFourth() {
  const sectionRef = useRef(null);
  const fillsRef = useRef([]);
  const numbersRef = useRef([]);
  const descRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      fillsRef.current.forEach((fill, i) => {
        const finalHeight = parseInt(fill.dataset.height);
        const num = numbersRef.current[i];
        const desc = descRef.current[i];
        const counter = { val: 0 };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        // Animate bar growing
        tl.fromTo(
          fill,
          { height: "0%" },
          {
            height: `${finalHeight}%`,
            duration: 1.5,
            ease: "power3.out",
            delay: i * 0.2,
          }
        );

        // Animate number counting and moving up
        tl.to(
          counter,
          {
            val: finalHeight,
            duration: 1.5,
            ease: "power3.out",
            onUpdate: () => {
              num.innerText = Math.round(counter.val) + "%";
              num.style.bottom = `${counter.val - 20}%`; // slightly above bar top
              desc.style.bottom = `${counter.val - 22}%`; // follows lower part of bar
            },
          },
          "<" // runs in sync with bar animation
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white text-[#001489] py-[8vw] pb-[1vw] px-[6vw] overflow-hidden relative"
    >
      {/* === Heading === */}
      <div className="flex justify-between flex-wrap items-start mb-[4vw] relative">
        <div className="absolute top-[4vw]">
          <h2 className="text-[3vw] font-semibold leading-[1.1]">
            Maximize Your <br /> Business Performance
          </h2>
        </div>

        <p className="max-w-[18vw] text-[1.1vw] leading-[1.6] text-gray-600 absolute right-0 top-0">
          Optimize your business journey and foster strong customer relationships
          with each transaction.
        </p>
      </div>

      {/* === Bar Chart === */}
      <div className="relative w-full h-[24vw] mt-[6vw]">
                {/* ==== BAR 4 ==== */}
        <div className="absolute left-[48%] bottom-0 w-[18vw] h-full flex flex-col items-center justify-end">


          <div className="relative w-full h-full overflow-hidden rounded-t-md">
            <div
              ref={(el) => (fillsRef.current[3] = el)}
              data-height="95"
              className="absolute bottom-0 left-0 w-full border border-[#001489] border-b-0 border-t-[0.3vw] bg-white"
            />
          </div>

                    <span
            ref={(el) => (numbersRef.current[3] = el)}
            className="absolute text-[3vw] font-semibold text-[#001489]"
            style={{ bottom: "0%" }}
          >
            0%
          </span>

          <p
            ref={(el) => (descRef.current[3] = el)}
            className="absolute text-[0.8vw] text-gray-600 text-center leading-snug"
            style={{ bottom: "0%" }}
          >
            Program success rate
          </p>
        </div>


        {/* ==== BAR 2 ==== */}
        <div className="absolute left-[30%] bottom-0 w-[18vw] h-full flex flex-col items-center justify-end">


          <div className="relative w-full h-full overflow-hidden rounded-t-md">
            <div
              ref={(el) => (fillsRef.current[1] = el)}
              data-height="55"
              className="absolute bottom-0 left-0 w-full border border-[#001489] border-b-0 border-t-[0.3vw] bg-white"
            />
          </div>

                    <span
            ref={(el) => (numbersRef.current[1] = el)}
            className="absolute text-[3vw] font-semibold text-[#001489]"
            style={{ bottom: "0%" }}
          >
            0%
          </span>

          <p
            ref={(el) => (descRef.current[1] = el)}
            className="absolute text-[0.8vw] text-gray-600 text-center leading-snug"
            style={{ bottom: "0%" }}
          >
            Rise in average deal value
          </p>
        </div>

        {/* ==== BAR 1 ==== */}
        <div className="absolute left-[15%] bottom-0 w-[18vw] h-full flex flex-col items-center justify-end">


          {/* Bar */}
          <div className="relative w-full h-full overflow-hidden rounded-t-md">
            <div
              ref={(el) => (fillsRef.current[0] = el)}
              data-height="40"
              className="absolute bottom-0 left-0 w-full border border-[#001489] border-b-0 border-t-[0.3vw] bg-white"
            />
          </div>

          {/* Number */}
          <span
            ref={(el) => (numbersRef.current[0] = el)}
            className="absolute text-[3vw] font-semibold text-[#001489]"
            style={{ bottom: "0%" }}
          >
            0%
          </span>

          {/* Description */}
          <p
            ref={(el) => (descRef.current[0] = el)}
            className="absolute text-[0.8vw] text-gray-600 text-center leading-snug"
            style={{ bottom: "0%" }}
          >
            Customer satisfaction boost
          </p>
          
        </div>
        {/* ==== BAR 3 ==== */}
        <div className="absolute left-[67%] bottom-0 w-[18vw] h-full flex flex-col items-center justify-end">


          <div className="relative w-full h-full overflow-hidden rounded-t-md">
            <div
              ref={(el) => (fillsRef.current[2] = el)}
              data-height="75"
              className="absolute bottom-0 left-0 w-full border border-[#001489] border-b-0 border-t-[0.3vw] bg-white"
            />
          </div>

          <span
            ref={(el) => (numbersRef.current[2] = el)}
            className="absolute text-[3vw] font-semibold text-[#001489]"
            style={{ bottom: "0%" }}
          >
            0%
          </span>

          <p
            ref={(el) => (descRef.current[2] = el)}
            className="absolute text-[0.8vw] text-gray-600 text-center leading-snug"
            style={{ bottom: "0%" }}
          >
            Additional sales secured
          </p>
          
        </div>


      </div>
    </section>
  );
}
