import React from "react";
import MotionFadeUp from "../../../components/MotionFadeUp";

const ImpressiveMilestone = () => {
  return (
    <section
    id="about"
    className="relative h-full w-full overflow-hidden bg-[var(--blue)] text-white flex flex-col justify-center header-dark">
      {/* Background Pattern */}

        {/* Shapes top */}

          <div
            className="absolute top-[0vw] left-[0vw] w-[48vw] h-[30vw] bg-[#F4F6FB10]"
            style={{
              clipPath: "polygon(50% 0%, 100% 100%, 0 100%, 0 0)",
            }}
          ></div>

        {/* Shapes bottom */}

          <div
            className="absolute bottom-[0vw] right-0 w-[52vw] h-[28.2vw] bg-[#F4F6FB10]"
            style={{
              clipPath: "polygon(81% 0px, 100% 35%, 100% 100%, 48% 100%, 0px 0px)",
            }}
          ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-[2vw] pt-[10.1vw] pb-[0vw]">
        <div className="flex flex-row justify-between gap-[4vw] items-center">
          {/* Left Text Section */}
          <MotionFadeUp delay={0.3}>
            <div className="flex flex-col gap-4">
              <h2 className="text-[2.5vw] font-semibold leading-tight">
                Impressive Milestone
              </h2>
              <p className="text-[0.98vw] leading-relaxed text-gray-200 max-w-[25vw]">
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
              <h3 className="text-[14vw]  leading-none">2.2m</h3>
            </MotionFadeUp>


          </div>


        </div>

        <div className="flex justify-center w-full">
                           <div className="w-[28vw] h-[29vw] mt-[4vw] relative overflow-hidden border-t-[0.3vw] border-[#89b7ff] bg-[#1132b4]">
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
