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
<div className="absolute bottom-0 left-0 w-[100vw] h-[100vh] bg-[#081C8590] z-0 
lg:[clip-path:polygon(0px_0px,_100%_80%,_100%_100%,_0%_100%)]
[clip-path:polygon(0px_0px,_100%_50%,_100%_100%,_0%_100%)]"></div>


        <div className="absolute lg:bottom-[10vw] bottom-[90vw] left-[2vw]  ">
            <div className="flex flex-col gap-[1vw]">
                <h3 className="lg:text-[3.5vw] text-[12vw]">
                    Energy
                </h3>
                <p className="lg:text-[1vw]  lg:max-w-[35vw] max-w-[80vw] text-[3vw] font-light leading-[150%]">
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
