import React from "react";
import BottomLeftBtn from "../../../components/BottomLeftBtn";

export default function EventsSecond() {
  return (
    <div
      className="relative h-screen text-white header-dark"
      style={{
        backgroundImage: "url('./img/ManandEtherealWhale.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

              {/*back Polygon background */}
      <div
        className="absolute bottom-0 right-0
         lg:w-[80vw] lg:h-[100vh] 
         w-[150vw] h-[77vh]
          bg-[#081c93] z-0
          [clip-path:polygon(100%_0px,_100%_100%,_0%_100%)]
          lg:[clip-path:polygon(70%_0px,_100%_0px,_100%_100%,_0%_100%)]
          "

      ></div>
                    {/*front Polygon background */}
      <div
        className="absolute bottom-0 right-0 
        lg:w-[60vw] lg:h-[100vh]
        w-[120vw] h-[60vh]
         bg-[#06178b] z-0
         [clip-path:polygon(100%_0px,_100%_100%,_0px_125%,_43%_80%,_43%_64%)]"

      ></div>


        <div className="absolute lg:bottom-[10vw] bottom-[40vw] right-[10vw]  ">
            <div className="flex flex-col gap-[1vw]">
                <h3 className="lg:text-[3.5vw] text-[12vw]">
                    Water
                </h3>
                <p className="lg:text-[1vw] text-[3vw] lg:w-[40vw] w-[60vw] font-light leading-[150%]">
                   Under the patronage of The Custodian of the Two Holy Mosques, King Abdullah bin Abdulaziz. ARWATEX International Water Conference in Arab Countries: In Beirut, Lebanon, under the patronage of the Lebanese President.
                </p>
            </div>
        </div>
      <BottomLeftBtn 
        borderColor="border-white"
        rippleColor="rgba(255,255,255,0.5)"

        
      />
                  {/* === Bottom Right Learn More Button === */}
      <div className="absolute bottom-[2vw] right-[3vw] z-30 max-sm:hidden">
        <button className="group px-[2vw] py-[0.8vw] bg-transparent border border-white/40 rounded-full flex items-center gap-[0.5vw] text-[0.9vw] hover:bg-white hover:text-[#001F4D] transition-all duration-300">
          Ask questions
        </button>
      </div>
    </div>
  );
}
