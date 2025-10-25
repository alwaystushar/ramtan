import React from "react";
import BottomLeftBtn from "../../../components/BottomLeftBtn";

export default function EventsSixth() {
  return (
    <div
      className="relative h-screen text-white header-dark"
      style={{
        backgroundImage: "url('./img/womenBg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

              {/*back Polygon background */}
      <div
        className="absolute bottom-0 right-0 w-[80vw] h-[100vh] bg-[#081c93] z-0"
        style={{
          clipPath: "polygon(70% 0px, 100% 0px, 100% 100%, 0% 100%)",
        }}
      ></div>
                    {/*front Polygon background */}
      <div
        className="absolute bottom-0 right-0 w-[60vw] h-[100vh] bg-[#06178b] z-0"
        style={{
          clipPath: "polygon(100% 0px, 100% 100%, 0px 125%, 43% 80%, 43% 64%)",
        }}
      ></div>


        <div className="absolute bottom-[10vw] right-[10vw]  ">
            <div className="flex flex-col gap-[1vw]">
                <h3 className="text-[3.5vw]">
                    Healthcare
                </h3>
                <p className="text-[1vw] max-w-[40vw]">
First Riyadh International Meeting for Dentistry and Healthcare: and the accompanying exhibition in collaboration with Riyadh Colleges of Dentistry and Pharmacy - Under the patronage of his Excellency the Minister of Higher Education.                </p>
            </div>
        </div>
      <BottomLeftBtn 
        borderColor="border-white"
        rippleColor="rgba(255,255,255,0.5)"

        
      />
                  {/* === Bottom Right Learn More Button === */}
      <div className="absolute bottom-[2vw] right-[3vw] z-30">
        <button className="group px-[2vw] py-[0.8vw] bg-transparent border border-white/40 rounded-full flex items-center gap-[0.5vw] text-[0.9vw] hover:bg-white hover:text-[#001F4D] transition-all duration-300">
          Ask questions
        </button>
      </div>
    </div>
  );
}
