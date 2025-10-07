import React from "react";
import { ArrowDown } from "lucide-react";
import GsapFadeUp from "../../../components/GsapFadeUp.jsx";
import RippleButton from "../../../components/RippleButton";


import ScrollReveal from "../../../components/ScrollReveal.jsx";

export default function AboutUsSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-white flex flex-col justify-center items-center overflow-hidden text-[#001F4D]"
    >

      {/* === Content Container === */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-start justify-between px-[8vw] py-[6vw] gap-[6vw]">
     
             {/* === Background Polygon Shapes === */}
      <div className="absolute inset-0">
        {/* Top Left Polygon */}
        <div
          className="absolute top-[6vw] left-0 w-[30vw]  h-[22vw] bg-[#F4F6FB]"
          style={{
            clipPath: "(0 0, 100% 0%, 100% 100%, 0% 100%)",
          }}
        ></div>

        {/* Bottom Right Polygon */}
        <div
          className="absolute bottom-[-1vw] right-[-3vw] w-[65vw] h-[20vw] bg-[#F4F6FB]"
          style={{
            clipPath: "polygon(0 0, 80% 0, 45% 100%, 0% 100%)",
          }}
        ></div>
        <div
          className="absolute top-[18vw] right-[-5vw] w-[15vw] h-[10vw] bg-[#F4F6FB]"
          style={{
            clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
          }}
        ></div>
      </div>       
       
        {/* === Left: Image with Polygon Mask === */}
        <GsapFadeUp y={60}>
          <div
            className="relative w-[30vw] h-[35vw] overflow-hidden bg-gray-200"
            style={{
              clipPath: "polygon(50% 0%, 100% 0, 100% 63%, 0 63%, 0 28%)",
            }}
          >
            <img
              src="/img/Al-Faraj.png" // ✅ replace with your image path
              alt="Founder Hussein Al-Faraj"
              className="w-full h-full object-cover"
            />
          </div>
        </GsapFadeUp>


 

        {/* === Right: Text === */}
        
          <div className="max-w-[45vw] text-left">
            <h2 className="text-[3.5vw] font-semibold mb-[1vw]  leading-none">
              About us
            </h2>

<ScrollReveal
  baseOpacity={0.1}
  enableBlur={true}
  blurStrength={6}
  fontSize="2vw"
  fontWeight="300"
  lineHeight="130%"
  color="#05178B"
  letterSpacing="0.02vw"
>
  Established in Riyadh in 1996 by founder
  <strong> Hussein Al-Faraj </strong> (may God have mercy on him),
  Ramtan has emerged as a prominent force in the exhibitions and
  conferences industry, both in Saudi Arabia and internationally.
</ScrollReveal>

          </div>
     
      </div>

      {/* === Bottom Left: Call to Action === */}
      <div className="absolute bottom-[2vw] left-[3vw] flex flex-row gap-[1.2vw] z-30 text-[1vw] f">
        <p className="opacity-90">Discover how we can <br />elevate your business</p>
        <RippleButton
          bg="rgba(0,0,0,0.4)"
          hoverBg="rgba(255,255,255,0.8)"
          color="#000"
          hoverColor="#000"
          borderColor="border-blue-900"
          rippleColor="rgba(0,31,77,0.5)"
          
        >
         <div className=" ">
         <ArrowDown className="w-[1.2vw] h-[1.2vw] " />   
        </div>   
        </RippleButton>
        
      </div>
    </section>
  );
}
