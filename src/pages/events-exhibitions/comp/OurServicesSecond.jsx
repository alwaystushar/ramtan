import React from "react";
import BottomLeftBtn from "../../../components/BottomLeftBtn";
import MarqueeText from "../../../components/Marquee";

export default function OurServicesSecond() {
  return (
    <div className="relative overflow-hidden lg:h-screen h-[60vh]">

                      {/* Bottom Right Polygon */}
          <div
            className="absolute bottom-[-1vw] right-[-3vw] lg:w-[65vw] w-[103%] h-[30vh] bg-[#F4F6FB]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 48% 100%)",
            }}
          ></div>

          
      {/* Marquee positioned absolutely */}
      <div className="absolute top-[35%] w-full">
        <MarqueeText
          text="We are committed to delivering exceptional event experiences that are both unique and innovative"
          className="text-[7vw] text-blue-900 tracking-tight"
          speed={60}
          direction="left"
        />
      </div>

      {/* Right-side text block */}
      <div className="absolute lg:bottom-[30%] bottom-[35%] text-blue-900 lg:right-[20vw] right-[7vw] lg:w-[21vw] w-[44vw] lg:text-[1.4vw] text-[4vw] leading-[110%]">
        <h1>
          Paying close attention to every detail to ensure an unforgettable event marked by creativity.
        </h1>
      </div>


      {/* Bottom Left Button */}
      <div className="text-blue-900">
       <BottomLeftBtn /> 
      </div>
      
    </div>
  );
}
