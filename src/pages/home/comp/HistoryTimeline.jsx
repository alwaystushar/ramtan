import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const historyData = [
  {
    year: 1996,
    text: "Since its founding in 1996, Ramtan has delivered exceptional exhibition and conference solutions with precision, creativity, and uncompromising quality.",
  },
  {
    year: 1997,
    text: "Ramtan began expanding regionally, introducing advanced exhibition technology and forging strategic partnerships with key institutions.",
  },
  {
    year: 1998,
    text: "With a growing reputation, Ramtan became a leading event organizer across Saudi Arabia, hosting conferences for global brands.",
  },
  {
    year: 1999,
    text: "Ramtan focused on international collaborations, elevating Saudi Arabia’s presence in the global exhibitions industry.",
  },
  {
    year: 2000,
    text: "By 2000, Ramtan had transformed into a trusted industry leader, delivering large-scale conferences aligned with the Kingdom’s vision.",
  },
];

export default function HistoryTimeline() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev === historyData.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setIndex((prev) => (prev === 0 ? historyData.length - 1 : prev - 1));

  return (
    <section 
    id="about"
    className="relative w-full h-[60vw] bg-[#001F73] text-white overflow-hidden flex flex-col justify-center items-start header-dark">
      {/* === Title === */}
      <h2 className="text-[5.5vw] font-medium leading-[100%] mb-[4vw] self-start px-[8vw]">
        Our <br /> History
      </h2>

      {/* === Timeline Area (Fixed Height) === */}
      <div className="relative w-full flex justify-start items-center h-[18vw] mb-[4vw] px-[8vw]">

        {/* Shapes left */}

          <div
            className="absolute bottom-[0.2vw] left-[0vw] w-[65vw] h-[15vw] bg-[#F4F6FB10]"
            style={{
              clipPath: "polygon(0 0, 80% 0, 45% 100%, 0% 100%)",
            }}
          ></div>

        {/* Shapes center */}

          <div
            className="absolute bottom-[1.699vw] left-[52vw] w-[35vw] h-[25vw] bg-[#F4F6FB10]"
            style={{
              clipPath: "polygon(45% 0, 100% 0, 100% 46%, 0 46%)",
            }}
          ></div>

                  {/* Shapes right */}

          <div
            className="absolute bottom-[0.2vw] right-[0vw] w-[13vw] h-[15vw] bg-[#F4F6FB10]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
          ></div>
        
        {/* === Full-Width Line === */}
        <div className="absolute top-[17.75vw] left-0 right-0 h-[0.15vw] bg-white/20 -translate-y-1/2" />

        {/* === Dots + Years (Centered Group) === */}
        <div className="relative flex justify-center items-center gap-[3vw] h-full z-[5]">
          {historyData.map((item, i) => {
            const isActive = i === index;
            const offset = (i - index) * 8; // horizontal slide offset

            return (
              <motion.div
                key={item.year}
                animate={{
                  x: `${offset}vw`,
                  opacity: isActive ? 1 : 0.6,
                  width: isActive ? "20vw" : "5vw", // ✅ dynamic width for active item
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="relative flex flex-col items-center justify-center h-full"
              >
                {/* Year Text */}
                <motion.span
                  animate={{
                    fontSize: isActive ? "10vw" : "1vw",
                    y: isActive ? "-6vw" : "-2vw",
                    color: isActive ? "#ffffff" : "rgba(255,255,255,0.6)",
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="font-semibold leading-none absolute bottom-[3vw]"
                >
                  {item.year}
                </motion.span>

                {/* Dot (Anchored on line) */}
                <motion.div
                  animate={{
                    width: "0.5vw",
                    height: "0.5vw",
                    backgroundColor:"#38b6ff",
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="rounded-full absolute bottom-[0vw]"
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* === Description Text === */}
      <div className="max-w-[60vw] mt-[2vw] min-h-[6vw] flex items-start px-[8vw]">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: "2vw" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-2vw" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[1vw] leading-[1.6vw] text-white/90"
          >
            {historyData[index].text}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* === Navigation Buttons === */}
      <div className="absolute right-[8vw] bottom-[8vw] flex gap-[1vw] z-[20]">
        <button
          onClick={prev}
          className="w-[2.8vw] h-[2.8vw] flex items-center justify-center border border-white/60 rounded-full hover:bg-white/15 transition"
        >
          <ArrowLeft className="w-[1.1vw] h-[1.1vw]" />
        </button>


        <button
          onClick={next}
          className="w-[2.8vw] h-[2.8vw] flex items-center justify-center border border-white/60 rounded-full hover:bg-white/15 transition"
        >
          <ArrowRight className="w-[1.1vw] h-[1.1vw]" />
        </button>
      </div>
    </section>
  );
}
