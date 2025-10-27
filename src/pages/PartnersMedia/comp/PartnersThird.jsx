import React from "react";
import MotionFadeUp from "../../../components/MotionFadeUp"; // adjust path if needed
import BottomLeftBtn from "../../../components/BottomLeftBtn";



const PartnersThird = () => {
  return (
    <section
    
     className="relative  w-full overflow-hidden bg-[var(--blue)] text-white flex flex-col justify-between header-dark">
      {/* Background Shapes */}

        {/* Shapes top */}

          <div
            className="absolute lg:top-[0vw] top-[40vw] lg:left-[0vw] left-[-40vw] lg:w-[48vw] w-[78vw] h-[26vw] bg-[#F4F6FB10]"
            style={{
              clipPath: "polygon(50% 0%, 100% 100%, 0 100%, 0 0)",
            }}
          ></div>

        {/* Shapes bottom */}

          <div
            className="absolute lg:bottom-[0vw] bottom-[35.4vw] lg:right-0 right-[-37vw] lg:w-[52vw] w-[100vw] h-[25.2vw] bg-[#F4F6FB10]"
            style={{
              clipPath: "polygon(81% 0px, 100% 35%, 100% 100%, 48% 100%, 0px 0px)",
            }}
          ></div>

      {/* Hero Content */}
      <div className="flex flex-col justify-between h-full  lg:px-[6vw] px-[2vw] lg:pt-[6vw] pt-[16vw] relative z-10 gap-[6vw]">
        {/* Heading */}
        <MotionFadeUp delay={0.3}>
            <div className="flex lg:flex-row flex-col justify-between lg:items-end w-full mb-[14vw]">
                <div>
                    <div>
                        <h3 className="lg:text-[3vw] text-[6vw] font-semibold leading-[110%]">Increased Event <br />Engagement</h3>
                    </div>
                    <div>
                        <p className="lg:text-[1vw] text-[3vw] text-white/80 lg:mt-[0.5vw] mt-[3.5vw] lg:max-w-[30vw] max-w-[50vw] opacity-40">
Boost Attendance & Impact at Your Next Event                        </p>
                    </div>
                </div>
               <h1 className=" lg:text-[12vw] lg:text-start text-end text-[28vw] leading-[1.1]  lg:mt-[6vw] mt-[26vw]">
            750%
          </h1> 
            </div>
          
        </MotionFadeUp>

        {/* Bottom Section */}
        <div className="flex items-end justify-between pb-[8vw]">
          {/* Left Side */}
          <div className="flex flex-col gap-3">
            <MotionFadeUp delay={0.4}>
              <h2 className="text-[14vw] font-semibold leading-none"></h2>
            </MotionFadeUp>

      {/* === Bottom Left Text + Ripple Button === */}
<div className="hidden sm:block">
  <BottomLeftBtn
    borderColor="border-white"
    rippleColor="#ffffff80"
  />
</div>

      {/* === Bottom Right Learn More Button === */}
      <div className="absolute bottom-[2vw] right-[3vw] z-30 max-sm:hidden">
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

export default PartnersThird;
