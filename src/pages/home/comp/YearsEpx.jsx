import React from "react";
import MotionFadeUp from "../../../components/MotionFadeUp"; // adjust path if needed
import BottomLeftBtn from "../../../components/BottomLeftBtn";



import { ArrowDown } from "lucide-react";

const YearsExp = () => {
  return (
    <section
    id="about"
     className="relative  w-full overflow-hidden bg-[var(--blue)] text-white flex flex-col justify-between header-dark">
      {/* Background Shapes */}

        {/* Shapes top */}

          <div
            className="absolute top-[0vw] left-[0vw] w-[48vw] h-[26vw] bg-[#F4F6FB10]"
            style={{
              clipPath: "polygon(50% 0%, 100% 100%, 0 100%, 0 0)",
            }}
          ></div>

        {/* Shapes bottom */}

          <div
            className="absolute bottom-[0vw] right-0 w-[52vw] h-[25.2vw] bg-[#F4F6FB10]"
            style={{
              clipPath: "polygon(81% 0px, 100% 35%, 100% 100%, 48% 100%, 0px 0px)",
            }}
          ></div>

      {/* Hero Content */}
      <div className="flex flex-col justify-between h-full container-box pt-[6vw] relative z-10 gap-[6vw]">
        {/* Heading */}
        <MotionFadeUp delay={0.3}>
            <div className="flex justify-end w-full ">
               <h1 className=" text-[6vw] leading-[1.1] font-semibold mt-[6vw]">
            Years of Event <br /> Excellence
          </h1> 
            </div>
          
        </MotionFadeUp>

        {/* Bottom Section */}
        <div className="flex items-end justify-between pb-[8vw]">
          {/* Left Side */}
          <div className="flex flex-col gap-3">
            <MotionFadeUp delay={0.4}>
              <h2 className="text-[14vw] font-semibold leading-none">+40</h2>
            </MotionFadeUp>

      {/* === Bottom Left Text + Ripple Button === */}
<BottomLeftBtn
        borderColor="border-white" 
  rippleColor="#ffffff80" 
   />

      {/* === Bottom Right Learn More Button === */}
      <div className="absolute bottom-[2vw] right-[3vw] z-30">
        <button className="group px-[2vw] py-[0.8vw] bg-transparent border border-white/40 rounded-full flex items-center gap-[0.5vw] text-[0.9vw] hover:bg-white hover:text-[#001F4D] transition-all duration-300">
          <span className="w-[0.5vw] h-[0.5vw] bg-white rounded-full animate-pulse transition-colors duration-300 group-hover:bg-[#001F4D]"></span>
          Learn more
        </button>
      </div>


          </div>


        </div>
      </div>
    </section>
  );
};

export default YearsExp;
