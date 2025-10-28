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
          h-[50vh]
          lg:min-h-screen
          overflow-hidden
          lg:pt-[6vw]
          pt-[18vw]
          bg-white
        "
      >

              {/* Left Polygon background */}
      <div
        className="absolute bottom-0 left-0 lg:w-[78vw] lg:h-[46vh] w-[78vw] h-[16vh] bg-[#f2f2f2] z-0"
        style={{
          clipPath: "polygon(15% 0%, 100% 0%, 75% 100%, 0% 100%, 0% 55%)",
        }}
      ></div>

      {/* Right Polygon background */}
      <div
        className="absolute lg:top-0 top-[43.4vw] right-0 lg:w-[22vw] lg:h-[54vh] w-[22vw] h-[14vh] bg-[#f2f2f2] z-0"
        style={{
          clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",
        }}
      ></div>
                {/* === Image with Absolute Position === */}
      <img
        src="/img/Saudi_man.png"
        alt="Saudi man"
        className="absolute  pointer-events-none bottom-0 left-[5vw] lg:w-[40vw] w-[55vw] h-auto object-contain"
      />
        {/* === Left Side === */}
        <div className="relative z-10 col-span-12 lg:col-span-6 max-sm:hidden">
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
