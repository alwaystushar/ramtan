import React from "react";
import BottomLeftBtn from "../../../components/BottomLeftBtn";

export default function OurServicesSixth() {
  return (
    <div
      className="relative h-screen text-white header-dark"
      style={{
        backgroundImage: "url('./img/ourServicesSixth.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

              {/*left Polygon background */}
      <div
        className="absolute bottom-0 left-0 w-[26vw] h-[45vw] bg-[#204fd750] z-0"
        style={{
          clipPath: "polygon(0px 0px, 100% 60%, 100% 100%, 0% 100%)",
        }}
      ></div>


        <div className="absolute bottom-[10vw] left-[3vw]  ">
            <div className="flex flex-col gap-[1vw]">
                <h3 className="text-[3.5vw]">
                    Energy
                </h3>
                <p className="text-[1vw] max-w-[35vw]">
                    International Energy Symposium & Riyadh International Petroleum, Gas, and
Petrochemical Industries Exhibition (Riyadh): Held at the Riyadh
InterContinental Hotel. Commemoration of the Kingdom's 50th Anniversary
of OPEC Membership: Under the supervision of the Ministry of Petroleum
and Mineral Resources.
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
