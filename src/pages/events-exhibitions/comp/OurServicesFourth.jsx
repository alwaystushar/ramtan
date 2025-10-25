import React from "react";
import { Clock } from "lucide-react"; 

export default function OurServicesFourth() {
  return (
    <div
      className="relative min-h-screen text-white bg-center bg-cover header-dark"
      style={{
        backgroundImage: "url('./img/ourservicesfourth.jpg')",
      }}
    >
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-end justify-end py-[8vw] px-[4vw] h-[100vh]">
        <div className="bg-white text-gray-900 max-w-[30vw] pt-[2.5vw] pb-[1.5vw] mr-[15vw]">

          <div className="px-[1vw]">
          {/* Small heading */}
          <p className="mb-[0.6vw] text-[0.6vw] border border-gray-300 rounded-full px-[1vw] py-[0.3vw] font-semibold tracking-[0.15vw] uppercase text-gray-500 inline-block">
            Our Services
          </p>

          {/* Title */}
          <h2 className="mb-[1vw] text-[2.4vw] text-blue-900 font-bold leading-[120%]">
            Seminar & Workshop Organization
          </h2>

          {/* Date */}
          
          <div className="flex items-center gap-[0.7vw] mb-[3.5vw] text-gray-500">
            <p className="text-[0.9vw]">Apr 4, 2023</p>
            <Clock className="w-[1vw] h-[1vw]" strokeWidth={2} />
          </div>
            
          </div>

          {/* Profile Section */}
          <div className="px-[1vw] border-t-[.1vw] border-gray-300 pt-[1vw]">
          <div className="flex items-center gap-[1vw]">
            <div className="w-[3vw] h-[3vw] rounded-full bg-blue-700"></div>

            <div>
              <p className="text-[0.9vw]">Mohamed Biuomy</p>
              <p className="text-[0.9vw]">Strategy Director</p>
            </div>
          </div>            
          </div>

        </div>
      </div>
    </div>
  );
}
