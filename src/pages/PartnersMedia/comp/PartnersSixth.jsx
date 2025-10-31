import React from "react";
import { ArrowRight, ArrowLeft, Clock } from "lucide-react";

const insights = [
  {
    id: 1,
    title: "Successful Events Drive Business Growth and Innovation.",
    date: "Apr 9, 2025",
  },
  {
    id: 2,
    title: "Creating Memorable Experiences for Global Audiences.",
    date: "Jul 24, 2025",
  },
  {
    id: 3,
    title: "Innovative Event Strategies for the Future.",
    date: "Sep 18, 2025",
  },
];

export default function PartnersSixth() {
  return (
    <section className="w-full bg-[#F8F9FB] text-[#001489] lg:py-[6vw] py-[12vw] px-[6vw] relative overflow-hidden">
      {/* === Heading === */}
      <div className="flex justify-between items-start lg:mb-[3vw] mb-[6vw]">
        <div>
          <h2 className="lg:text-[6vw] text-[10vw] font-semibold leading-[90%]">
          <span className="text-[#2b52cd]">Event</span>   <br className="max-sm:hidden"/>
          <span>Insights</span>
          </h2>
        </div>

        {/* Arrows (hidden in mobile) */}
        <div className="hidden sm:flex gap-[1vw]">
          <button className="w-[3vw] h-[3vw] flex items-center justify-center rounded-full border border-[#001489] hover:bg-[#001489] hover:text-white transition">
            <ArrowLeft className="w-[1.2vw] h-[1.2vw]" />
          </button>
          <button className="w-[3vw] h-[3vw] flex items-center justify-center rounded-full border border-[#001489] hover:bg-[#001489] hover:text-white transition">
            <ArrowRight className="w-[1.2vw] h-[1.2vw]" />
          </button>
        </div>
      </div>

      {/* === Cards Wrapper === */}
      <div
        className="
          flex sm:grid sm:grid-cols-3 gap-[4vw] sm:gap-[2vw]
          overflow-x-auto sm:overflow-visible
          snap-x snap-mandatory sm:snap-none
          scroll-smooth sm:scroll-auto
          pb-[4vw] sm:pb-0
        "
      >
        {insights.map((item) => (
          <div
            key={item.id}
            className="
              relative flex-shrink-0 sm:flex-shrink sm:static
              w-[80vw] sm:w-auto lg:h-[29vw] h-[80vw] p-[1vw]
               border border-[#001489]/30 bg-white text-[#001489]
              flex flex-col justify-between transition-all duration-300 ease-out
              hover:bg-[#001489] hover:text-white hover:border-[#001489]
              cursor-pointer
              snap-center
              max-sm:hover:bg-white max-sm:hover:text-[#001489] max-sm:hover:border-[#001489]/30
            "
          >
            {/* Top - Read More */}
            <div className="px-[4vw] sm:px-[1.5vw] pt-[4vw] sm:pt-[1.5vw]">
              <button className="px-[3vw] sm:px-[1vw] py-[1vw] sm:py-[0.3vw] rounded-full text-[3vw] sm:text-[0.8vw] border border-current transition-all">
                Read More
              </button>
            </div>

            {/* Middle Content */}
            <div className="px-[4vw] sm:px-[2vw] flex flex-col gap-[3vw] sm:gap-[1.5vw] items-center text-center">
              <h3 className="text-[4vw] sm:text-[1.6vw] font-semibold leading-snug">
                {item.title}
              </h3>
              <button className="px-[3vw] sm:px-[1vw] py-[1vw] sm:py-[0.3vw] border border-current rounded-full text-[3vw] sm:text-[0.8vw] font-medium bg-transparent hover:bg-white hover:text-[#001489] transition max-sm:hover:bg-transparent max-sm:hover:text-[#001489]">
                See all news
              </button>
            </div>

            {/* Bottom - Date */}
            <div className="flex items-center justify-between w-full px-[4vw] sm:px-[1.5vw] pb-[4vw] sm:pb-[1.5vw] text-[3vw] sm:text-[0.8vw]">
              <span>{item.date}</span>
              <Clock className="w-[3vw] h-[3vw] sm:w-[1vw] sm:h-[1vw]" />
            </div>
          </div>
        ))}
      </div>

      {/* === Footer Button === */}
      <div className="flex justify-center mt-[6vw] sm:mt-[4vw]">
        <button className="flex items-center gap-[2vw] sm:gap-[0.5vw] border border-gray-900 text-black rounded-full px-[5vw] sm:px-[1.6vw] py-[2vw] sm:py-[0.6vw] text-[3.5vw] sm:text-[0.9vw] hover:bg-[#001489] hover:text-white transition">
          <span className="w-[1.5vw] sm:w-[0.5vw] h-[1.5vw] sm:h-[0.5vw] bg-[#001489] rounded-full transition-all group-hover:bg-white"></span>
          see all insights
        </button>
      </div>
    </section>
  );
}
