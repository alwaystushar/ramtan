import React from "react";
import BottomLeftBtn from "../../../components/BottomLeftBtn";

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
        className="absolute bottom-0 left-0 w-[46vw] h-[100vh] bg-[#204fd750] z-0"
        style={{
          clipPath: "polygon(100% 0, 100% 86%, 64% 100%, 0 100%, 0% 48%)",
        }}
      ></div>


        <div className="absolute bottom-[10vw] left-[3vw]  ">
            <div className="flex flex-col gap-[1vw]">
                <h3 className="text-[3.5vw]">
                    Technology & Science
                </h3>
                <p className="text-[1vw] max-w-[29.2vw]">
                    Third Symposium on Prospects of Scientific Research in the Arab World (Riyadh): In collaboration with King Abdulaziz City for Science and Technology and under the patronage of The Custodian of the Two Holy Mosques, King Abdullah bin Abdulaziz.
                </p>
            </div>
        </div>
      <BottomLeftBtn 
        borderColor="border-white"
        rippleColor="rgba(255,255,255,0.5)"
      />
    </div>
  );
}
