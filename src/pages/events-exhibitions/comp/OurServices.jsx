import React from "react";
import BottomLeftBtn from "../../../components/BottomLeftBtn";
import MotionFadeUp from "../../../components/MotionFadeUp";

export default function OurServices() {
  return (
    <div
      className="relative h-screen text-white header-dark"
      style={{
        backgroundImage: "url('./img/home-hero2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >


        <div className="absolute lg:bottom-[3vw] max-sm:top-[50%] lg:right-[17vw] right-[8vw] lg:text-[7vw] text-[14vw] font-semibold leading-[90%]">
           
           <MotionFadeUp>
            <h1>
                Our <br />Services
            </h1>
            </MotionFadeUp> 
        </div>
      <BottomLeftBtn 
        borderColor="border-white"
        rippleColor="rgba(255,255,255,0.5)"
      />
    </div>
  );
}
