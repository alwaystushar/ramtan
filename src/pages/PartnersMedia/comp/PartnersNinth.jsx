import React from "react";

export default function PartnersNinth() {
  return (
    <section className="relative flex w-full items-start justify-end px-[6vw] py-[6vw] bg-white overflow-hidden h-screen">
      {/* === Background Image Box === */}
      <div
        className="absolute left-0 bottom-0 lg:w-[60vw] lg:h-[38vw] w-[160vw] h-[128vw] bg-cover bg-center "
        style={{
          backgroundImage: "url('/img/partnersImg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      {/* === Text Content === */}
      <div className="absolute max-sm:top-[10vw] lg:right-[12vw] left-[2vw] z-10 lg:max-w-[40vw] text-[#001489] ml-auto">
        <h2 className="lg:text-[4.5vw] text-[8.5vw] font-semibold leading-[110%] mb-[3vw]">
          We're here to <br />
          collaborate.{" "}
          <span className="text-[#204fd5]">Reach <br />out—we welcome <br />your call
          or email.</span>
        </h2>

        <p className="lg:text-[1vw]  text-gray-600 leading-[1.7] lg:max-w-[32vw] max-w-[62vw]">
          Committed to shaping unforgettable experiences for clients and
          attendees through precision, creativity, and a dedication to client
          success in advancing Saudi Arabia's ambitious development vision.
        </p>
      </div>
    </section>
  );
}
