import React from "react";
import BottomLeftBtn from "../../../components/BottomLeftBtn";
import MotionFadeUp from "../../../components/MotionFadeUp";

export default function PartnersFirst() {
  return (
    <div
      className="relative h-screen text-white header-dark"
      style={{
        backgroundImage: "url('./img/partnersFirst.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >


        <div className="absolute lg:bottom-[3vw] bottom-[94vw] lg:right-[26vw] right-[6vw] lg:text-[6vw] text-[17vw] font-semibold leading-[90%]">
           
           <MotionFadeUp>
             <h1>
                Partners
 <br />Success
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
