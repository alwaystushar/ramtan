import React from "react";
import BottomLeftBtn from "../../../components/BottomLeftBtn";
import MotionFadeUp from "../../../components/MotionFadeUp";


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
<div className="absolute bottom-0 left-0 lg:w-[30vw] w-[90vw] lg:h-[70vh] h-[100vh] bg-[#03092b90] z-0 
lg:[clip-path:polygon(0px_0px,_100%_90%,_100%_100%,_0%_100%)]
[clip-path:polygon(0px_0px,_100%_50%,_100%_100%,_0%_100%)]"></div>



          <div className="absolute lg:bottom-[10vw] bottom-[90vw] lg:left-[2vw] left-[6vw]  ">
            <div className="flex flex-col gap-[1vw]">
              <MotionFadeUp>
                <h3 className="lg:text-[2.5vw] text-[9vw]">
                    Energy
                </h3>
                </MotionFadeUp>

                <MotionFadeUp>
                <p className="lg:text-[0.75vw]  lg:max-w-[26vw] max-w-[80vw] text-[3vw] font-light leading-[150%]">
                    International Energy Symposium & Riyadh International Petroleum, Gas, and
Petrochemical Industries Exhibition (Riyadh): Held at the Riyadh
InterContinental Hotel. Commemoration of the Kingdom's 50th Anniversary
of OPEC Membership: Under the supervision of the Ministry of Petroleum
and Mineral Resources.
                </p>
                </MotionFadeUp>


            </div>
        </div>

<div className=" max-sm:hidden">
        <BottomLeftBtn 
        borderColor="border-white"
        rippleColor="rgba(255,255,255,0.5)"
      />
    </div>
</div>

  );
}
