import React from "react";

export default function PartnersNinth() {
  return (
    <section className="relative flex w-full items-start justify-end px-[6vw] py-[6vw] bg-white overflow-hidden h-screen">
            {/* top Polygon background */}
      <div
        className="absolute lg:top-0 top-[20.4vw] left-0 w-[48.4vw] h-[46vw] bg-[#F9F9F9] z-0"
        style={{
          clipPath: "polygon(0px 0px, 1% 0px, 100% 100%, 26% 100%, 0% 57%)",
        }}
      ></div>

      {/* btm Polygon background */}
      <div
        className="absolute lg:bottom-0 bottom-[74vw] right-0 w-[60vw] h-[19vw] bg-[#F9F9F9] z-0"
        style={{
          clipPath: "(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      ></div>

      {/* === Background Image Box === */}
      <div
        className="absolute left-0 bottom-0 lg:w-[94vw] lg:h-[52vw] w-[160vw] h-[128vw] bg-cover bg-center "
        style={{
          backgroundImage: "url('/img/partnersImg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>


      

      {/* === Text Content === */}
      <div className="absolute max-sm:top-[10vw] lg:right-[4.3vw] lg:left-[2vw] left-[6vw] z-10 lg:max-w-[40vw] text-[#001489] ml-auto">
        <h2 className="lg:text-[4vw] text-[9.5vw] font-medium leading-[110%] lg:mb-[3vw] mb-[3vw]">
          We're here to <br />
          collaborate.{" "}
          <span className="text-[#204fd5]">Reach <br />out—we welcome <br />your call
          or email.</span>
        </h2>

        <p className="lg:text-[1vw]  text-gray-600 leading-[1.7] lg:max-w-[32vw] max-w-[79vw]">
          Committed to shaping unforgettable experiences for clients and
          attendees through precision, creativity, and a dedication to client
          success in advancing Saudi Arabia's ambitious development vision.
        </p>
      </div>
    </section>
  );
}
