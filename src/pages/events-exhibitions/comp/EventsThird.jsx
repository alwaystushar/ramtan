import React from "react";
import MotionFadeUp from "../../../components/MotionFadeUp";


export default function EventsThird() {
  return (
   <div className="relative overflow-hidden bg-white text-[#001489] lg:h-[48vw]">
      {/* Left Polygon background */}
      <div
        className="absolute lg:bottom-0 bottom-[10.4vw] lg:left-0 left-[-25vw] lg:w-[78vw] w-[103vw] lg:h-[25vw] h-[35vw] bg-[#f0f1f8] z-0"
        style={{
          clipPath: "polygon(15% 0%, 100% 0%, 75% 100%, 0% 100%, 0% 55%)",
        }}
      ></div>

      {/* Right Polygon background */}
      <div
        className="absolute lg:top-0 top-[104vw] right-0 lg:w-[22vw] w-[22vw] h-[23vw] bg-[#f0f1f8] z-0"
        style={{
          clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",
        }}
      ></div>


        {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-between h-full lg:px-[2vw] px-[6vw] py-[4vw] lg:pt-[8vw] pt-[14vw]">
        {/* Subheading */}
        <MotionFadeUp>
        <div className="lg:mb-[1vw] mb-[26vw]">
          <p className="lg:text-[0.9vw] text-[2.9vw] text-gray-500 mb-[0.3vw] tracking-wide">
            Success Story
          </p>
          <h4 className="lg:text-[1.4vw] text-[5.2vw] font-medium">
            Leading Technology Company
          </h4>
        </div>          
        </MotionFadeUp>


        <div>
          <MotionFadeUp>
                    {/* Tags */}
        <div className="flex flex-wrap lg:gap-[1vw] gap-[3vw] lg:mb-[1.5vw] mb-[4.5vw]">
          <span className="border border-gray-900 text-black rounded-full px-[1.2vw] py-[0.4vw] lg:text-[0.8vw] text-[2.5vw] font-medium">
            Strategic Planning
          </span>
          <span className="border border-gray-900 text-black rounded-full px-[1.2vw] py-[0.4vw] lg:text-[0.8vw] text-[2.5vw] font-medium">
            Brand Activation
          </span>
        </div>            
          </MotionFadeUp>

          <MotionFadeUp>
                   {/* Heading */}
        <h1 className="lg:max-w-[70vw] lg:text-[5.2vw] text-[10vw] font-medium leading-[110%] max-sm:mb-[52vw]">
          Leading Tech <br className="lg:hidden" /> Firm Hosts Groundbreaking Innovation Summit
        </h1> 
            </MotionFadeUp>


        </div>

      </div>


    </div>
  );
}
