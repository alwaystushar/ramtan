import React from "react";
import BottomLeftBtn from "../../../components/BottomLeftBtn";
import MotionFadeUp from "../../../components/MotionFadeUp";


export default function OurServices() {
  return (
    <div
      className="relative flex flex-col justify-center h-screen text-white header-dark"
      style={{
        backgroundImage: "url('./img/oceanBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >


<MotionFadeUp>
        <div className=" left-[2vw] lg:text-[6vw] text-[16vw] font-semibold lg:leading-[90%] leading-[110%] px-[2vw]">
            <h1>
                Empower
                <br /> Your <br className="lg:hidder" /> Business
                <br /> Growth
            </h1>
        </div>
        </MotionFadeUp>

        <MotionFadeUp>
        <div className="absolute bottom-[5vw] left-[2vw] lg:text-[0.8vw] text-[3.8vw] leading-[100%]">
            <h2 className="lg:mt-[0.5vw] mt-[2.5vw]">Contact Us</h2>
            <p className="lg:mt-[0.5vw] mt-[2.5vw]">m: +966 11 217 1717</p>
            <p className="lg:mt-[0.5vw] mt-[2.5vw]">e: hello@ramtan-expo.com</p>
            <p className="lg:mt-[0.5vw] mt-[2.5vw]">King Fahad Road, Riyadh, KSA</p>
        </div>
        </MotionFadeUp>
    </div>
  );
}
