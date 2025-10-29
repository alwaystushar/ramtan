import React from "react";
import BottomLeftBtn from "../../../components/BottomLeftBtn";
import MotionFadeUp from "../../../components/MotionFadeUp";


export default function EventsFourth() {
  return (
    <div
      className="relative h-screen text-white header-dark"
      style={{
        backgroundImage: "url('./img/technology.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

              {/*left Polygon background */}
      <div
        className="absolute bottom-0 left-0 lg:w-[46vw] w-[100vw] h-[100vh] bg-[#1C36C095] z-0"
        style={{
          clipPath: "polygon(100% 0, 100% 86%, 64% 100%, 0 100%, 0% 48%)",
        }}
      ></div>


        <div className="absolute lg:bottom-[10vw] bottom-[40vw] lg:left-[2vw] left-[6vw]  ">
            <div className="flex flex-col gap-[1vw]">
              <MotionFadeUp>
                                <h3 className="lg:text-[3.5vw] text-[9vw] lg:leading-[110%]">
                    Technology & Science
                </h3>
              </MotionFadeUp>
              <MotionFadeUp>
                                <p className="lg:text-[1vw]  lg:max-w-[35vw] max-w-[80vw] text-[3vw] font-light leading-[150%]">
                    Third Symposium on Prospects of Scientific Research in the Arab World (Riyadh): In collaboration with King Abdulaziz City for Science and Technology and under the patronage of The Custodian of the Two Holy Mosques, King Abdullah bin Abdulaziz.
                </p>
                </MotionFadeUp>

            </div>
        </div>
      <BottomLeftBtn 
        borderColor="border-white"
        rippleColor="rgba(255,255,255,0.5)"
      />
    </div>
  );
}
