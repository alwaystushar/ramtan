import React from "react";

export default function OurServicesFifth() {
  return (
    <div className="relative overflow-hidden h-[48vw] bg-white text-[#001489]">
      {/*left Polygon background */}
      <div
        className="absolute bottom-0 left-0 w-[80vw] h-[25vw] bg-[#E9ECF7] z-0"
        style={{
          clipPath: "polygon(15% 0px, 100% 0px, 75% 100%, 0px 100%, 0px 56%)",
        }}
      ></div>

            {/*Right Polygon background */}
      <div
        className="absolute top-0 right-0 w-[20vw] h-[23vw] bg-[#E9ECF7] z-0"
        style={{
          clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 px-[2vw] pt-[6vw] pb-[10vw] flex flex-col justify-between h-screen">
        {/* Subheading */}
        <div className="mb-[1vw]">
          <p className="text-[0.9vw] text-gray-500 mb-[0.4vw]">Success Story</p>
          <h4 className="text-[1.2vw] font-medium">Leading Energy Company</h4>
        </div>


<div>
           {/* Tags */}
        <div className="flex gap-[1vw] mb-[1vw]">
          <span className="border-black text-black border rounded-full px-[1.2vw] py-[0.4vw] text-[0.8vw] font-medium">
            Strategic Planning
          </span>
          <span className="border-black text-black border rounded-full px-[1.2vw] py-[0.4vw] text-[0.8vw] font-medium">
            Brand Activation
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-[85vw] text-[6.5vw] font-semibold leading-[110%]">
          Global Energy Leader Hosts Groundbreaking Energy Exhibition
        </h1> 
</div>

      </div>
    </div>
  );
}
