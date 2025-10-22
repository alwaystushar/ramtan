import React from "react";
import BottomLeftBtn from "../../../components/BottomLeftBtn";

export default function OurServicesThird() {
  return (
    <div
      className="relative flex items-center justify-center h-screen overflow-hidden text-white header-dark"
      style={{
        backgroundImage: "url('./img/OurServics.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ↑ adjust opacity (/40 to /80) or color as needed */}

      {/* Text */}
      <div className="  text-center text-[4vw] font-semibold leading-[120%] z-20">
        <h1>
          Crafting Unforgettable
 <br /> Event Experiences
        </h1>
      </div>

      {/* Button */}
      <BottomLeftBtn
        borderColor="border-white"
        rippleColor="rgba(255,255,255,0.5)"
      />

            {/* === Bottom Right Learn More Button === */}
      <div className="absolute bottom-[2vw] right-[3vw] z-30">
        <button className="group px-[2vw] py-[0.8vw] bg-transparent border border-white/40 rounded-full flex items-center gap-[0.5vw] text-[0.9vw] hover:bg-white hover:text-[#001F4D] transition-all duration-300">
          <span className="w-[0.5vw] h-[0.5vw] bg-white rounded-full animate-pulse transition-colors duration-300 group-hover:bg-[#001F4D]"></span>
          Learn more
        </button>
      </div>
    </div>

    
  );
}
