import React from "react";

export default function EventsFirst() {
  return (
    <div className="relative overflow-hidden bg-white text-[#001489] h-[48vw]">
      {/* Left Polygon background */}
      <div
        className="absolute bottom-0 left-0 w-[78vw] h-[25vw] bg-[#E9ECF7] z-0"
        style={{
          clipPath: "polygon(15% 0%, 100% 0%, 75% 100%, 0% 100%, 0% 55%)",
        }}
      ></div>

      {/* Right Polygon background */}
      <div
        className="absolute top-0 right-0 w-[22vw] h-[23vw] bg-[#E9ECF7] z-0"
        style={{
          clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10  flex flex-col justify-between h-full px-[2vw] py-[4vw] pt-[8vw]">
        {/* Subheading */}
        <div className="mb-[1vw]">
          <p className="text-[0.9vw] text-gray-500 mb-[0.3vw] tracking-wide">
            Success Story
          </p>
          <h4 className="text-[1.2vw] font-medium">
            Leading Water Company
          </h4>
        </div>

        <div>
                    {/* Tags */}
        <div className="flex flex-wrap gap-[1vw] mb-[1.5vw]">
          <span className="border border-[#001489] text-[#001489] rounded-full px-[1.2vw] py-[0.4vw] text-[0.8vw] font-medium">
            Strategic Planning
          </span>
          <span className="border border-[#001489] text-[#001489] rounded-full px-[1.2vw] py-[0.4vw] text-[0.8vw] font-medium">
            Brand Activation
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-[65vw] text-[5.2vw] font-semibold leading-[110%]">
          Sixth Gulf Water Conference & Exhibition
        </h1>
        </div>

      </div>
    </div>
  );
}
