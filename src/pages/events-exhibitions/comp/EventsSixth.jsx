import React from "react";
import BottomLeftBtn from "../../../components/BottomLeftBtn";
import MotionFadeUp from "../../../components/MotionFadeUp";

export default function EventsSixth() {
  return (
    <div
      className="relative h-screen text-white header-dark"
      style={{
        backgroundImage: "url('./img/womenBg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >


      

              {/*back Polygon background */}
      <div
        className="absolute bottom-0 right-0
         lg:w-[75vw] lg:h-[100vh] 
         w-[150vw] h-[77vh]
          bg-[#081c93] z-0
          [clip-path:polygon(100%_0px,_100%_100%,_0%_100%)]
          lg:[clip-path:polygon(70%_0px,_100%_0px,_100%_100%,_0%_100%)]
          "

      ></div>
                    {/*front Polygon background */}
      <div
        className="absolute bottom-0 right-0 
        lg:w-[55vw] lg:h-[100vh]
        w-[120vw] h-[60vh]
         bg-[#06178b] z-0
         [clip-path:polygon(100%_0px,_100%_100%,_0px_125%,_43%_80%,_43%_64%)]"

      ></div>


        <div className="absolute lg:bottom-[10vw] bottom-[40vw] right-[10vw]  ">
            <div className="flex flex-col gap-[1vw]">
              <MotionFadeUp>
                <h3 className="lg:text-[2.5vw] text-[9vw]">
                    Healthcare
                </h3>                
              </MotionFadeUp>

              <MotionFadeUp>
                <p className="lg:text-[0.75vw] text-[3vw] lg:w-[34vw] w-[60vw] font-light leading-[150%]">
First Riyadh International Meeting for Dentistry and Healthcare: and the accompanying exhibition in collaboration with Riyadh Colleges of Dentistry and Pharmacy - Under the patronage of his Excellency the Minister of Higher Education.                </p>                
                </MotionFadeUp>

            </div>
        </div>
      <BottomLeftBtn 
        borderColor="border-white"
        rippleColor="rgba(255,255,255,0.5)"

        
      />
                  {/* === Bottom Right Learn More Button === */}
      <div className="absolute bottom-[2vw] right-[3vw] z-30 max-sm:hidden">
        <button className="group px-[2vw] py-[0.8vw] bg-transparent border border-white/40 rounded-full flex items-center gap-[0.5vw] text-[0.9vw] hover:bg-white hover:text-[#001F4D] transition-all duration-300">
          Ask questions
        </button>
      </div>
    </div>
  );
}
