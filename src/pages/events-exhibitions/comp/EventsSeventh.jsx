import React from "react";
import BottomLeftBtn from "../../../components/BottomLeftBtn";

export default function OurServices() {
  return (
    <div
      className="relative flex flex-col justify-center h-screen text-white header-dark"
      style={{
        backgroundImage: "url('./img/home-hero2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >


        <div className=" left-[2vw] text-[7vw] font-semibold leading-[90%]">
            <h1>
                Empower
                <br /> Your Business
                <br /> Growth
            </h1>
        </div>
        <div className="absolute bottom-[5vw] left-[2vw] text-[1vw] leading-[100%]">
            <h2 className="mt-[0.5vw]">Contact Us</h2>
            <p className="mt-[0.5vw]">m: +966 11 217 1717</p>
            <p className="mt-[0.5vw]">e: hello@ramtan-expo.com</p>
            <p className="mt-[0.5vw]">King Fahad Road, Riyadh, KSA</p>
        </div>
    </div>
  );
}
