import React from "react";

export default function PartnersNinth() {
  return (
    <section className="relative flex w-full items-start justify-end px-[6vw] py-[6vw] bg-white overflow-hidden h-screen">
      {/* === Background Image Box === */}
      <div
        className="absolute left-0 bottom-0 w-[60vw] h-[38vw] bg-cover bg-center "
        style={{
          backgroundImage: "url('/img/partnersImg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      {/* === Text Content === */}
      <div className="relative z-10 max-w-[40vw] text-[#001489] ml-auto">
        <h2 className="text-[3.5vw] font-semibold leading-[110%] mb-[1.5vw]">
          We're here to <br />
          collaborate.{" "}
          <span className="text-[#2C4FFF]">Reach <br />out—we welcome <br />your call
          or email.</span>
        </h2>

        <p className="text-[1vw] text-gray-600 leading-[1.7] max-w-[32vw]">
          Committed to shaping unforgettable experiences for clients and
          attendees through precision, creativity, and a dedication to client
          success in advancing Saudi Arabia's ambitious development vision.
        </p>
      </div>
    </section>
  );
}
