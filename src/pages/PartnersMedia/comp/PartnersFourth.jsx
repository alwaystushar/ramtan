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
      const finalHeight = parseFloat(fill.dataset.height) || 0;
      const finalNumber = parseFloat(fill.dataset.number) || finalHeight;
      const suffix = fill.dataset.suffix || "";
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
          val: finalNumber,
          duration: 1.5,
          ease: "power3.out",
          onUpdate: () => {
            num.innerText = Math.round(counter.val) + suffix;
            num.style.bottom = `${finalHeight - 20}%`;
            desc.style.bottom = `${finalHeight - 22}%`;
          },
        },
        "<" // sync with bar animation
      );
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <section
      ref={sectionRef}
      className="w-full bg-white text-[#001489] py-[8vw] pb-[1vw] lg:px-[2vw] px-[6vw] overflow-hidden relative"
    >
      {/* === Heading === */}
      <div className="flex lg:flex-row flex-col justify-between items-start mb-[4vw] lg:relative lg:gap-0 gap-[3vw]">
        <div className="lg:absolute top-[4vw]">
          <h2 className="lg:text-[4vw] text-[6vw] text-[#204fd5] font-medium leading-[1.1]">
            Maximize Your <br /> Business Performance
          </h2>
        </div>

        <p className="lg:max-w-[19vw] max-w-[58vw] lg:text-[1.1vw] text-[3.6vw] leading-[1.6] text-[#0021a9] lg:absolute right-[23.4vw] top-0">
          Optimize your business journey and foster strong customer relationships
          with each transaction.
        </p>
      </div>

{/* === Bar Chart === */}
<div className="relative w-full h-[24vw] mt-[12vw] max-sm:h-[60vw]">
  {/* ==== BAR 1 ==== */}
  <div className="absolute lg:left-[55%] left-[35%] bottom-0 w-[18vw] h-full flex flex-col items-center justify-end max-sm:w-[35vw]">
    <div className="relative w-full h-full overflow-hidden ">
      <div
        ref={(el) => (fillsRef.current[3] = el)}
        data-height="100"
        data-number="200"
        className="absolute bottom-0 left-0 w-full border border-[#001489] border-b-0 border-t-[0.3vw] bg-white"
      />
    </div>
    <span
      ref={(el) => (numbersRef.current[3] = el)}
      className="absolute text-[3vw] font-semibold text-[#001489] max-sm:text-[6vw]"
      style={{ bottom: "0%" }}
    >
      0%
    </span>
    <p
      ref={(el) => (descRef.current[3] = el)}
      className="absolute text-[0.8vw] text-gray-600 text-center leading-snug max-sm:text-[2.5vw]"
      style={{ bottom: "0%" }}
    >
      Program success rate
    </p>
  </div>

  {/* ==== BAR 2 ==== */}
  <div className="absolute lg:left-[37%] left-[15%] bottom-0 w-[18vw] h-full flex flex-col items-center justify-end max-sm:w-[35vw]">
    <div className="relative w-full h-full overflow-hidden rounded-t-md">
      <div
        ref={(el) => (fillsRef.current[1] = el)}
        data-height="65"
        data-number="13"
        data-suffix="%"
        className="absolute bottom-0 left-0 w-full border border-[#001489] border-b-0 border-t-[0.3vw] bg-white"
      />
    </div>
    <span
      ref={(el) => (numbersRef.current[1] = el)}
      className="absolute text-[3vw] font-semibold text-[#001489] max-sm:text-[6vw]"
      style={{ bottom: "0%" }}
    >
      0%
    </span>
    <p
      ref={(el) => (descRef.current[1] = el)}
      className="absolute text-[0.8vw] text-gray-600 text-center leading-snug max-sm:text-[2.5vw]"
      style={{ bottom: "0%" }}
    >
      Rise in average deal value
    </p>
  </div>

  {/* ==== BAR 3 ==== */}
  <div className="absolute lg:left-[20%] left-[0%] bottom-0 w-[18vw] h-full flex flex-col items-center justify-end max-sm:w-[35vw]">
    <div className="relative w-full h-full overflow-hidden rounded-t-md">
      <div
        ref={(el) => (fillsRef.current[0] = el)}
        data-height="40"
        data-number="13"
        data-suffix="%"
        className="absolute bottom-0 left-0 w-full border border-[#001489] border-b-0 border-t-[0.3vw] bg-white"
      />
    </div>
    <span
      ref={(el) => (numbersRef.current[0] = el)}
      className="absolute text-[3vw] font-semibold text-[#001489] max-sm:text-[6vw]"
      style={{ bottom: "0%" }}
    >
      0%
    </span>
    <p
      ref={(el) => (descRef.current[0] = el)}
      className="absolute text-[0.8vw] text-gray-600 text-center leading-snug max-sm:text-[2.5vw]"
      style={{ bottom: "0%" }}
    >
      Customer satisfaction boost
    </p>
  </div>

  {/* ==== BAR 4 ==== */}
  <div className="absolute left-[72%] bottom-0 w-[18vw] h-full flex flex-col items-center justify-end max-sm:w-[35vw]">
    <div className="relative w-full h-full overflow-hidden rounded-t-md">
      <div
        ref={(el) => (fillsRef.current[2] = el)}
        data-height="75"
        data-number="95"
        data-suffix="%"
        className="absolute bottom-0 left-0 w-full border border-[#001489] border-b-0 border-t-[0.3vw] bg-white"
      />
    </div>
    <span
      ref={(el) => (numbersRef.current[2] = el)}
      className="absolute text-[3vw] font-semibold text-[#001489] max-sm:text-[6vw]"
      style={{ bottom: "0%" }}
    >
      0%
    </span>
    <p
      ref={(el) => (descRef.current[2] = el)}
      className="absolute text-[0.8vw] text-gray-600 text-center leading-snug max-sm:text-[2.5vw]"
      style={{ bottom: "0%" }}
    >
      Additional sales secured
    </p>
  </div>
</div>


    </section>
  );
}
