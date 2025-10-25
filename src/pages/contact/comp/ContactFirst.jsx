import React from "react";
import FoundationLeft from "./utils/FoundationLeft";
import FoundationRight from "./utils/FoundationRight";

export default function ContactFirst() {
  return (
    <>
      <section
        id="about"
        className="
          relative
          grid grid-cols-12
          w-full
          min-h-screen
          overflow-hidden
          pt-[6vw]
          bg-white
        "
      >

              {/* Left Polygon background */}
      <div
        className="absolute bottom-0 left-0 w-[78vw] h-[46vh] bg-[#f2f2f2] z-0"
        style={{
          clipPath: "polygon(15% 0%, 100% 0%, 75% 100%, 0% 100%, 0% 55%)",
        }}
      ></div>

      {/* Right Polygon background */}
      <div
        className="absolute top-0 right-0 w-[22vw] h-[54vh] bg-[#f2f2f2] z-0"
        style={{
          clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",
        }}
      ></div>
                {/* === Image with Absolute Position === */}
      <img
        src="/img/Saudi_man.png"
        alt="Saudi man"
        className="absolute  pointer-events-none bottom-0 left-[5vw] w-[40vw] h-auto object-contain"
      />
        {/* === Left Side === */}
        <div className="relative z-10 col-span-12 lg:col-span-6">
          <FoundationLeft />
        </div>

        {/* === Right Side === */}
        <div className="relative z-10 col-span-12 lg:col-span-6">
          <FoundationRight />
        </div>



      </section>
    </>
  );
}
