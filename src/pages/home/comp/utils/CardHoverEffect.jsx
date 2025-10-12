import React from "react";
import { HoverEffect } from "../../../../components/CardHover";
import  RippleButton  from "../../../../components/RippleButton"; // ✅ ensure correct import path
import BlogSlide from "../../../../components/blogslide";
import { ArrowDown } from "lucide-react"; // ✅ using lucide-react icon set

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
    description: "eveloping innovative event oncepts and creative direction",
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
          className="absolute top-[0vw] left-0 w-[50vw] h-[50vw] bg-[#fafbff]"
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

        {/* ✅ Top Right Small Polygon */}
        {/* <div
          className="absolute top-[24vw] right-[-5vw] w-[15vw] h-[10vw] bg-[#F4F6FB]"
          style={{
            clipPath: "polygon(0 0, 15% 0, 100% 63%, 0 62%)",
          }}
        ></div> */}
      </div>

      {/* === Content === */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-start justify-between px-[8vw] py-[6vw] gap-[6vw]">
        <div
          className="mx-auto px-[3vw] max-w-[80vw] py-[5vw] flex flex-col justify-center items-center gap-[2vw]"
        >
<BlogSlide />

          <HoverEffect items={projects} />
        </div>
      </div>

      {/* === Bottom Left: Call to Action === */}
      <div className="absolute bottom-[2vw] left-[3vw] flex flex-row gap-[1.2vw] z-30 text-[1vw] items-center">
        <p className="leading-tight opacity-90">
          Discover how we can <br />
          elevate your business
        </p>

        <RippleButton
          bg="rgba(0,0,0,0.4)"
          hoverBg="rgba(255,255,255,0.8)"
          color="#000"
          hoverColor="#000"
          borderColor="border-blue-900"
          rippleColor="rgba(0,31,77,0.5)"
        >
          <ArrowDown className="w-[1.2vw] h-[1.2vw]" />
        </RippleButton>
      </div>
    </section>
  );
}



export default CardHoverEffect;







