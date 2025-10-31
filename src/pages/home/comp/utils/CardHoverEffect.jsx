import React from "react";
import { HoverEffect } from "../../../../components/CardHover";
import BlogSlide from "../../../../components/BlogSlide.jsx";
import BottomLeftBtn from "../../../../components/BottomLeftBtn.jsx";
import FadeUp from "../../../../components/FadeUp.jsx";

// ✅ Example project data (replace with your real data)
const projects = [
  {
    title: "Deep Expertise",
    description: "Creating unique and memorable event experiences for our clients and attendees",
    date: "17 March 2023",
  },
  {
    title: "Planning",
    description: "Ensuring seamless event execution through careful planning and precise attention to detail",
    date: "15 March 2023",
  },
  {
    title: "Vision",
    description: "Eveloping innovative event oncepts and creative direction",
    date: "15 March 2023",
  },
];


export function CardHoverEffect() {
  return (
    <section
      id="about"
      className="relative w-full bg-white flex flex-col justify-center items-center overflow-hidden text-[#001F4D]"
    >
      {/* === Background Polygon Shapes === */}
      <div className="absolute inset-0 z-0">
        {/* ✅ Top Left Polygon */}
        <div
          className="absolute top-[0vw] left-0 w-[50vw]  h-[50vw] bg-[#fafbff]"
          style={{
            clipPath: "polygon(0 0, 15% 0, 100% 63%, 0 62%)",
          }}
        ></div>

        {/* ✅ Bottom Right Polygon */}
        <div
          className="absolute bottom-[-36vw] right-[0vw] w-[50vw] h-[61.5vw] bg-[#fafbff]"
          style={{
            clipPath: "polygon(83% 0px, 100% 8%, 100% 50%, 75% 42%, 0px 0px)",
          }}
        ></div>


      </div>

      {/* === Content === */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-start justify-between px-[5.4vw]  py-[6vw] gap-[6vw] max-sm:pb-[2vw]">
        <div
          className="mx-auto lg:px-[3vw] lg:w-[80vw] w-full py-[5vw] flex flex-col justify-center items-center gap-[1vw]"
        >

          
<BlogSlide />

          <HoverEffect items={projects} />
        </div>
      </div>

      {/* === Bottom Left: Call to Action === */}
      <div className="text-[#081c83]  max-sm:hidden">
        <BottomLeftBtn />
      </div>
     
    </section>
  );
}



export default CardHoverEffect;







