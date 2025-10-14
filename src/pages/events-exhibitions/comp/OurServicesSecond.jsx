import React from "react";
import BottomLeftBtn from "../../../components/BottomLeftBtn";
import MarqueeText from "../../../components/Marquee";

export default function OurServicesSecond() {
  return (
    <div className="relative h-screen overflow-hidden">

                      {/* Bottom Right Polygon */}
          <div
            className="absolute bottom-[-1vw] right-[-3vw] w-[65vw] h-[26.2vw] bg-[#F4F6FB]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 48% 100%)",
            }}
          ></div>

          
      {/* Marquee positioned absolutely */}
      <div className="absolute top-[35%] w-full">
        <MarqueeText
          text="We are committed to delivering exceptional event experiences that are both unique and innovative"
          className="text-[7vw] text-blue-900 tracking-tight"
          speed={40}
          direction="left"
        />
      </div>

      {/* Right-side text block */}
      <div className="absolute bottom-[30%] text-blue-900 right-[20vw] max-w-[21vw] text-[1.4vw] font-semibold leading-[110%]">
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
