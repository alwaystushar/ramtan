import React from "react";
import MotionFadeUp from "../../../components/MotionFadeUp"; // adjust path if needed
import BottomLeftBtn from "../../../components/BottomLeftBtn";
import Counter from "../../../components/Counter";



import { ArrowDown } from "lucide-react";

const YearsExp = () => {
  return (
    <section
    id="about"
     className="relative  w-full overflow-hidden bg-[var(--blue)] text-white flex flex-col justify-between header-dark">
      {/* Background Shapes */}

        {/* Shapes top */}

          <div
            className="absolute lg:top-[0vw] top-[30vw] lg:left-[0vw] left-[-44vw] lg:w-[48vw] lg:h-[26vw] w-[94vw] h-[46vw] bg-[#F4F6FB10]"
            style={{
              clipPath: "polygon(50% 0%, 100% 100%, 0 100%, 0 0)",
            }}
          ></div>

        {/* Shapes bottom */}

          <div
            className="absolute lg:bottom-[0vw] bottom-[10vw] lg:right-0 right-[-46vw] lg:w-[52vw] lg:h-[26.2vw] w-[95.5vw] h-[40vw] bg-[#F4F6FB10]"
            style={{
              clipPath: "polygon(81% 0px, 100% 35%, 100% 100%, 48% 100%, 0px 0px)",
            }}
          ></div>

      {/* Hero Content */}
      <div className="flex flex-col justify-between h-full container-box pt-[6vw] relative z-10 lg:gap-[6vw] gap-[28vw]">
        {/* Heading */}
        <MotionFadeUp delay={0.3}>
            <div className="flex justify-end w-full ">
               <h1 className=" lg:text-[6vw] text-[16vw] leading-[1.1] font-semibold mt-[6vw] lg:mr-[0.4vw] mr-[2vw]">
            Years of <br className="lg:hidden" /> Event <br /> Excellence
          </h1> 
            </div>
          
        </MotionFadeUp>

        {/* Bottom Section */}
        <div className="flex items-end justify-between pb-[8vw]">
          {/* Left Side */}
          <div className="flex flex-col gap-3">
            <MotionFadeUp delay={0.4}>
              <h2 className="lg:text-[14vw] text-[28vw] leading-none"><Counter value={4} suffix="+" /></h2>
            </MotionFadeUp>

      {/* === Bottom Left Text + Ripple Button === */}
<div className="hidden sm:block">
  <BottomLeftBtn
    borderColor="border-white"
    rippleColor="#ffffff80"
  />
</div>
      {/* === Bottom Right Learn More Button === */}
      <div className="absolute bottom-[2vw] right-[3vw] z-30">
        <button className="group lg:px-[2vw] px-[4vw] lg:py-[0.8vw] py-[1.8vw] bg-transparent border border-white/40 rounded-full flex items-center lg:gap-[0.5vw] gap-[2vw] lg:text-[0.9vw] text-[4vw] hover:bg-white hover:text-[#001F4D] transition-all duration-300">
          <span className="lg:w-[0.5vw] lg:h-[0.5vw] w-[1.5vw] h-[1.5vw] bg-white rounded-full animate-pulse transition-colors duration-300 group-hover:bg-[#001F4D]"></span>
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
