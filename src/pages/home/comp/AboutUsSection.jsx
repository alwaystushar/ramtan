import React from "react";
import { ArrowDown } from "lucide-react";
import GsapFadeUp from "../../../components/GsapFadeUp.jsx";
import RippleButton from "../../../components/RippleButton";
import BottomLeftBtn from "../../../components/BottomLeftBtn.jsx";

import ScrollReveal from "../../../components/ScrollReveal.jsx";

export default function AboutUsSection() {
  return (
    <section
      id="about"
      className="relative w-full  bg-white flex flex-col justify-center items-center overflow-hidden text-[#001F4D]"
    >
      {/* === Content Container === */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-start justify-between px-[8vw] py-[6vw] pt-[12vw] gap-[6vw]">
        {/* === Background Polygon Shapes === */}
        <div className="absolute inset-0">
          {/* Top Left Polygon */}
          <div
            className="absolute top-[12vw] left-0 lg:w-[30vw] w-[70vw] lg:h-[22vw] h-[24vw] bg-[#F4F6FB] "
            style={{
              clipPath: "(0 0, 100% 0%, 100% 100%, 0% 100%)",
            }}
          ></div>

          {/* Bottom Right Polygon */}

                    <div
            className="absolute bottom-[-10vw] lg:left-[38vw] left-[vw] lg:w-[65vw] lg:h-[20vw] w-[90vw] h-[50vw] bg-[#F4F6FB] lg:hidden"
            style={{
              clipPath: "polygon(0 0, 80% 0, 45% 100%, 0% 100%)",
            }}
          ></div>
          <div
            className="absolute bottom-[-10vw] lg:left-[38vw] left-[7vw] lg:w-[65vw] lg:h-[29vw]  w-[90vw] h-[50vw] bg-[#F4F6FB]"
            style={{
              clipPath: "polygon(0 0, 80% 0, 45% 100%, 0% 100%)",
            }}
          ></div>
          <div
            className="absolute lg:top-[24vw] bottom-[40vw]  lg:right-[-5vw] right-[-12vw] lg:w-[15vw] lg:h-[10vw] h-[48vw] w-[33vw]  bg-[#F4F6FB]"
            style={{
              clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
            }}
          ></div>
        </div>

        {/* === Left: Image with Polygon Mask === */}
        <GsapFadeUp y={60}>
          <div
  className="
    relative 
    lg:w-[30vw] lg:h-[35vw] 
    h-[60vw] w-[70vw] overflow-hidden bg-gray-200  max-sm:mb-[8vw]
    lg:[clip-path:polygon(50%_0%,100%_0,100%_63%,0_63%,0_28%)]
    [clip-path:polygon(50%_0%,100%_0,100%_100%,0_100%,0_40%)]
  "
          >
            <img
              src="/img/Al-Faraj.png" // ✅ replace with your image path
              alt="Founder Hussein Al-Faraj"
              className="object-cover w-full h-full"
            />
          </div>
        </GsapFadeUp>

        {/* === Right: Text === */}

        <div className="lg:max-w-[36.5vw]  text-left z-50 lg:mb-0 mb-[45vw]">
          <h2 className="lg:text-[3.5vw] text-[12vw] font-semibold lg:mb-[1vw]  mb-[5vw] leading-none">
            About us
          </h2>

          <ScrollReveal
            baseOpacity={0.25}

            fontWeight="300"
            lineHeight="130%"
            color="#05178B"
            letterSpacing="0.02vw"
          >
            Established in Riyadh in 1996 by founder Hussein Al-Faraj (may God have mercy on him), Ramtan has emerged as a prominent force in the exhibitions and conferences industry, both in Saudi Arabia and internationally.
          </ScrollReveal>
        </div>
      </div>

      {/* === Bottom Left: Call to Action === */}

      <div className="text-[#081c83]  max-sm:hidden">
             <BottomLeftBtn />
      </div>
 
    </section>
  );
}
