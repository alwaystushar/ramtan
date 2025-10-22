import React from "react";
import BottomLeftBtn from "../../../components/BottomLeftBtn";

export default function PartnersFirst() {
  return (
    <div
      className="relative h-screen text-white header-dark"
      style={{
        backgroundImage: "url('./img/partnersFirst.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >


        <div className="absolute bottom-[3vw] right-[26vw] text-[7vw] font-semibold leading-[90%]">
            <h1>
                Partners
 <br />Success
            </h1>
        </div>
      <BottomLeftBtn 
        borderColor="border-white"
        rippleColor="rgba(255,255,255,0.5)"
      />
    </div>
  );
}
