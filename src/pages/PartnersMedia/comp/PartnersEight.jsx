import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BottomLeftBtn from "../../../components/BottomLeftBtn";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function PartnersEight() {
  const [active, setActive] = useState(3);

  const sections = [
    {
      title: "Public Relations",
      text: "We build compelling communication strategies that enhance your organization's reputation, foster trust, and drive engagement through creative storytelling and media relations.",
    },
    {
      title: "The Solution",
      text: "Our strategic approach combines innovation and precision, delivering tailored event solutions that meet your goals with measurable results and lasting impact.",
    },
    {
      title: "The outcome",
      text: "To provide unparalleled exhibition and conference solutions through precision execution, creative distinction, and uncompromising quality—exceeding client objectives while advancing Saudi Arabia's ambitious development vision for the events sector and to define global excellence in the events industry through innovative solutions and strategic alliances, establishing new benchmarks for success while driving sustainable growth for partners and stakeholders.",
    },
    {
      title: "Your Vision",
      text: "We transform your aspirations into extraordinary experiences, translating your vision into events that resonate, inspire, and leave a lasting impression.",
    },
    {
      title: "Our Expertise",
      text: "With years of experience, our multidisciplinary team delivers seamless end-to-end event management, fusing creativity with technical precision.",
    },
  ];

  const next = () => setActive((prev) => (prev + 1) % sections.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + sections.length) % sections.length);

  return (
    <>
      {/* === Small Screen Version (Carousel) === */}
      <section className="block lg:hidden relative min-h-screen bg-[#0021a9] text-white flex justify-center items-center overflow-hidden px-[6vw] py-[6vw]">
        {/* Left/Right Buttons */}
        <button
          onClick={prev}
          className="absolute left-[4vw] top-[40%] border border-white/50 rounded-full p-2 hover:bg-white/10 transition"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          className="absolute right-[4vw] top-[40%] border border-white/50 rounded-full p-2 hover:bg-white/10 transition"
        >
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Center Titles Carousel */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center justify-center gap-[4vw] relative">
            {sections.map((item, i) => {
              const distance = Math.abs(active - i);
              const scale = distance === 0 ? 1.2 : distance === 1 ? 1.0 : 0.8;
              const opacity = distance === 0 ? 1 : distance === 1 ? 0.6 : 0.3;
              const xOffset = (i - active) * 130;

              return (


                
                <motion.div
                  key={i}
                  animate={{ scale, opacity, x: xOffset }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className={`absolute text-center font-semibold cursor-pointer ${
                    active === i ? "text-white" : "text-[#87A0F8]"
                  }`}
                  onClick={() => setActive(i)}
                >
                  <motion.h2
                    className={`${
                      active === i ? "text-[6vw]" : "text-[4vw]"
                    } transition-all duration-300`}
                  >
                    {item.title}
                  </motion.h2>
                </motion.div>
              );
            })}
          </div>



          {/* Text Content */}
          <div className="max-w-[80vw] text-center mt-[20vw] px-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="text-[3.5vw] h-[30vh] leading-[1.7] text-[#E2E7FA]"
              >
                {sections[active].text}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

      </section>

      {/* === Large Screen Version (Left Menu) === */}
      <section className="hidden lg:flex relative min-h-screen bg-[#0021a9] text-white justify-between overflow-hidden px-[8vw] py-[6vw] header-dark">

                          {/* Shapes top */}

          <div
            className="absolute lg:top-[4vw] top-[29vw] lg:left-[0vw] left-[-40vw] lg:w-[48vw] w-[78vw] h-[71vh] bg-[#021ea1]"
            style={{
              clipPath: "polygon(0 0, 0% 100%, 100% 70%)",
            }}
          ></div>

        {/* Shapes bottom */}

          <div
            className="absolute lg:bottom-[0vw] bottom-[35.4vw] lg:right-0 right-[-37vw] lg:w-[52vw] w-[100vw] h-[70vh] bg-[#021ea1]"
            style={{
              clipPath: "polygon(89% 0, 100% 10%, 100% 100%, 90% 100%, 0% 38%)",
            }}
          ></div>
        {/* Left Menu */}
        <div className="flex flex-col justify-start space-y-[1vw] absolute left-[8vw] top-[4vw]">
          {sections.map((item, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`text-left transition-all duration-500 ${
                active === i
                  ? "text-white text-[3vw] font-semibold"
                  : "text-[#87A0F8] text-[1vw] hover:text-white"
              }`}
            >
              {item.title}
            </motion.button>
          ))}
        </div>

        {/* Right Content */}
        <div className="max-w-[39vw] absolute right-[10vw] top-[10vw]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[1.2vw] leading-[1.8] text-[#E2E7FA]">
                {sections[active].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>


        


        <BottomLeftBtn borderColor="border-white" rippleColor="#ffffff80" />
      </section>
    </>
  );
}
