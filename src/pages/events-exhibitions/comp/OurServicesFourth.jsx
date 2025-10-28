import React from "react";
import { Clock } from "lucide-react"; 
import MotionFadeUp from "../../../components/MotionFadeUp";

export default function OurServicesFourth() {
  return (
    <div
      className="relative min-h-screen text-white bg-center bg-cover header-dark"
      style={{
        backgroundImage: "url('./img/ourservicesfourth.jpg')",
      }}
    >

      <MotionFadeUp>
              {/* Main Content */}
      <div className="relative z-10 flex flex-col items-end justify-end lg:py-[8vw] py-[26vw]  lg:px-[4vw] h-[100vh]">
        <div className="bg-white text-gray-900 lg:max-w-[30vw] max-w-[90vw] lg:pt-[2.5vw] pt-[6vw] lg:pb-[1.5vw] pb-[4vw] lg:mr-[15vw]">

          <div className="lg:px-[1vw] px-[6vw]">
          {/* Small heading */}
          <p className="lg:mb-[0.6vw] mb-[6.6vw] lg:text-[0.6vw] text-[2.6vw] border border-gray-300 rounded-full px-[1vw] py-[0.3vw] font-semibold tracking-[0.15vw] uppercase text-gray-500 inline-block">
            Experiences
          </p>

          {/* Title */}
          <h2 className="lg:mb-[1vw] mb-[6vw] lg:text-[2.4vw] text-[6vw] text-blue-900 font-medium leading-[120%]">
            Creating unique and memorable event experiences for our clients and attendees
          </h2>

          {/* Date */}
          
          <div className="flex items-center gap-[0.7vw] lg:mb-[3.5vw] mb-[5.5vw] text-gray-500">
            <p className="lg:text-[0.9vw] text-[2.6vw]">Apr 4, 2023</p>
            <Clock className="lg:w-[1vw] lg:h-[1vw] w-[3vw] h-[3vw]" strokeWidth={2} />
          </div>
            
          </div>

          {/* Profile Section */}
          <div className="lg:px-[1vw]  px-[6vw] border-t-[.1vw] border-gray-300 lg:pt-[1vw] pt-[4vw]">
          <div className="flex items-center lg:gap-[1vw] gap-[4vw]">
            <div className="w-[10vw] h-[10vw] lg:w-[3vw] lg:h-[3vw] rounded-full bg-blue-700"></div>

            <div>
              <p className="lg:text-[0.9vw] text-[3vw]">Mohamed Biuomy</p>
              <p className="lg:text-[0.9vw] text-[3vw]">Strategy Director</p>
            </div>
          </div>            
          </div>

        </div>
      </div>
      </MotionFadeUp>

    </div>
  );
}
