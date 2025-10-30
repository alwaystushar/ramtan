import React from "react";
import MotionFadeUp from "../../../components/MotionFadeUp";
import Counter from "../../../components/Counter";
import AnimatedShape from "./utils/AnimatedShape";

const ImpressiveMilestone = () => {
  return (
    <section
    id="about"
    className="relative h-full w-full overflow-hidden bg-[var(--blue)] text-white flex flex-col justify-center header-dark">
      {/* Background Pattern */}

        {/* Shapes top */}

          <div
            className="absolute lg:top-[0vw] top-[30.6vw] left-[0vw] w-[48vw] h-[30vw] bg-[#F4F6FB10]"
            style={{
              clipPath: "polygon(50% 0%, 100% 100%, 0 100%, 0 0)",
            }}
          ></div>

        {/* Shapes bottom */}

          <div
            className="absolute lg:bottom-[0vw] top-[60.6vw] right-0 w-[52vw] h-[28.2vw] bg-[#F4F6FB10]"
            style={{
              clipPath: "polygon(81% 0px, 100% 35%, 100% 100%, 48% 100%, 0px 0px)",
            }}
          ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full lg:px-[2vw] px-[6vw] max-sm:mt-[20vw] pt-[10.1vw] pb-[0vw]">
        <div className="flex lg:flex-row flex-col lg:justify-between lg:gap-[4vw] gap-[28vw] lg:items-center">
          {/* Left Text Section */}
          <MotionFadeUp delay={0.3}>
            <div className="flex flex-col gap-4">
              <h2 className="lg:text-[2.5vw] text-[6vw] font-medium leading-tight">
                Impressive Milestone
              </h2>
              <p className="lg:text-[0.98vw] font-light text-[3.5vw] leading-relaxed text-gray-200 lg:w-[25vw] w-[65vw]">
                We are excited to share that we have crossed the milestone of
                2.2 million visitors. This achievement reflects our growing
                popularity and the trust.
              </p>
            </div>
          </MotionFadeUp>

          {/* Right Number + Bar Section */}
          <div className="relative flex flex-col items-end justify-center">
            {/* Number */}
            <MotionFadeUp delay={0.5}>
              <h3 className="lg:text-[14vw] text-[24vw] leading-none"><Counter value={2.2} suffix="m" /></h3>
            </MotionFadeUp>


          </div>


        </div>

        <div className="flex justify-center w-full">
                           <div className="lg:w-[28vw] lg:h-[29vw] w-[68vw] h-[49vw] mt-[4vw] relative overflow-hidden border-t-[0.3vw] border-[#89b7ff] bg-[#1132b4]">
                {/* Inner Pattern */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(325deg, rgb(106, 165, 255) 0px, rgb(106, 165, 255) 1px, transparent .1vw, transparent .5vw)",
                  }}
                ></div>

                {/* Top highlight border */}
                <div className="absolute top-0 left-0 w-full h-[0.3vw] bg-[#89b7ff]"></div>
              </div>  
              
        </div>

               
      </div>
    </section>
  );
};

export default ImpressiveMilestone;
