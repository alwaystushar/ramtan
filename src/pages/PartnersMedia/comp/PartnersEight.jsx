import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BottomLeftBtn from "../../../components/BottomLeftBtn";

export default function PartnersEight() {
  const [active, setActive] = useState(2); // Default: "The outcome"

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
      text: "To provide unparalleled exhibition and conference solutions through precision execution, creative distinction, and uncompromising quality—exceeding client objectives while advancing Saudi Arabia's ambitious development vision for the events sector and to define global excellence in the events industry through innovative solutions and strategic alliances, establishing new benchmarks for success while driving sustainable growth for partners and stakeholders",
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

  return (
    <section className="relative min-h-screen bg-[#0021a9] text-white flex justify-between overflow-hidden px-[8vw] py-[6vw] header-dark">
      {/* === Left Menu === */}
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

      {/* === Right Content === */}
      <div className="max-w-[39vw]  absolute right-[10vw] top-[10vw]">
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
      <BottomLeftBtn
        borderColor="border-white" 
  rippleColor="#ffffff80" 
   />
    </section>
  );
}
