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
    <section className="w-full bg-[#F8F9FB] text-[#001489] py-[6vw] px-[6vw] relative">
      {/* === Heading === */}
      <div className="flex justify-between items-start mb-[3vw]">
        <div>
          <h2 className="text-[4vw] font-semibold leading-[1]">
            Event <br /> Insights
          </h2>
        </div>

        {/* Arrows (static) */}
        <div className="flex gap-[1vw]">
          <button className="w-[3vw] h-[3vw] flex items-center justify-center rounded-full border border-[#001489] hover:bg-[#001489] hover:text-white transition">
            <ArrowLeft className="w-[1.2vw] h-[1.2vw]" />
          </button>
          <button className="w-[3vw] h-[3vw] flex items-center justify-center rounded-full border border-[#001489] hover:bg-[#001489] hover:text-white transition">
            <ArrowRight className="w-[1.2vw] h-[1.2vw]" />
          </button>
        </div>
      </div>

      {/* === Grid (3 cards visible) === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2vw]">
        {insights.map((item) => (
          <div
            key={item.id}
            className="relative h-[26vw] rounded-md border border-[#001489]/30 bg-white text-[#001489]
                       flex flex-col justify-between transition-all duration-300 ease-out
                       hover:bg-[#001489] hover:text-white hover:border-[#001489] cursor-pointer"
          >
            {/* Top - Read More */}
            <div className="px-[1.5vw] pt-[1.5vw]">
              <button className="px-[1vw] py-[0.3vw] rounded-full text-[0.8vw] border border-current transition-all">
                Read More
              </button>
            </div>

<div className="px-[2vw] flex flex-col gap-[1.5vw] items-center ">
  <h3 className="text-[1.6vw] font-semibold leading-snug ">
    {item.title}
  </h3>
  <button className="px-[1vw] py-[0.3vw] border border-current rounded-full text-[0.8vw] font-medium bg-transparent hover:bg-white hover:text-[#001489] transition">
    See all news
  </button>
</div>

            {/* Bottom - Date */}
            <div className="flex items-center justify-between w-full px-[1.5vw] pb-[1.5vw] text-[0.8vw]">
              <span>{item.date}</span>
              <Clock className="w-[1vw] h-[1vw]" />
            </div>
          </div>
        ))}
      </div>

      {/* === Footer Button === */}
      <div className="flex justify-center mt-[4vw]">
        <button className="flex items-center gap-[0.5vw] border border-[#001489] text-[#001489] rounded-full px-[1.6vw] py-[0.6vw] text-[0.9vw] hover:bg-[#001489] hover:text-white transition">
          <span className="w-[0.5vw] h-[0.5vw] bg-[#001489] rounded-full transition-all group-hover:bg-white"></span>
          see all insights
        </button>
      </div>
    </section>
  );
}
