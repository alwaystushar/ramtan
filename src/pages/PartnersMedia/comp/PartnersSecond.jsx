import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ArrowRight, ArrowLeft } from "lucide-react";

const partnersData = [
  {
    id: 1,
    title: "Leading Tech Firm Hosts Groundbreaking Innovation Summit",
    subtitle: "Presents",
    tags: ["Experiences", "Experiences"],
  },
  {
    id: 2,
    title: "Major Petroleum Expo Drives Industry Collaboration",
    subtitle: "Global Energy Leader",
    tags: ["Exhibition Services", "Conference Logistics"],
  },
  {
    id: 3,
    title: "Architecture Expo Inspires Sustainable Design Thinking",
    subtitle: "Global Architecture Vision",
    tags: ["Brand Strategy", "Exhibit Solutions"],
  },
];

export default function PartnersSecond() {
  const [index, setIndex] = useState(0);
  const contentRef = useRef(null);
  const numRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
      gsap.fromTo(
        numRef.current,
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.5, delay: 0.1 }
      );
    });
    return () => ctx.revert();
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % partnersData.length);
  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? partnersData.length - 1 : prev - 1));

  const current = partnersData[index];
  const next = partnersData[(index + 1) % partnersData.length];

  return (
    <div className="w-full bg-white text-[#001489] flex flex-col pt-[5vw] overflow-hidden">

      {/* ---------- DESKTOP VERSION ---------- */}
      <div className="max-sm:hidden">
        {/* Header */}
        <div className="flex justify-between items-end border-b border-gray-300 pb-[1vw] px-[2vw]">
          <div>
            <h1 className="text-[5vw] font-semibold leading-none text-[#204FD5]">Partners</h1>
            <h1 className="text-[5vw] font-semibold leading-none">Success</h1>
          </div>

          <div className="flex items-end justify-between gap-[1.5vw] w-[48vw]">
            <h1 ref={numRef} className="text-[5vw] font-semibold">
              {String(current.id).padStart(2, "0")}
            </h1>

            <div className="flex gap-[0.8vw]">
              <button
                onClick={nextSlide}
                className="w-[2.8vw] h-[2.8vw] border border-[#001489] flex items-center justify-center rounded-full hover:bg-[#001489] hover:text-white transition-colors"
              >
                <ArrowRight className="w-[1.2vw] h-[1.2vw]" />
              </button>
              <button
                onClick={prevSlide}
                className="w-[2.8vw] h-[2.8vw] border border-[#001489] flex items-center justify-center rounded-full hover:bg-[#001489] hover:text-white transition-colors"
              >
                <ArrowLeft className="w-[1.2vw] h-[1.2vw]" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="relative flex justify-between items-start gap-[3vw] pt-[2vw] pb-[6vw] px-[2vw]"
        >
          {/* Left */}
          <div className="flex flex-col w-[45%]">
            <p className="text-[0.9vw] text-gray-500 mb-[1vw]">{current.subtitle}</p>
            <h2 className="text-[3vw] font-semibold leading-[120%] mb-[5vw] w-[35vw] text-[#204FD5]">
              {current.title}
            </h2>
            <div className="flex gap-[1vw] flex-wrap">
              {current.tags.map((tag, i) => (
                <span
                  key={i}
                  className="border border-gray-900 text-black rounded-full px-[1.2vw] py-[0.4vw] text-[0.8vw] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gray-300 transform -translate-x-1/2"></div>

          {/* Right */}
          <div className="flex flex-col w-[45%]">
            <p className="text-[0.9vw] text-gray-500 mb-[1vw]">{next.subtitle}</p>
            <h2 className="text-[3vw] font-semibold leading-[120%] mb-[5vw] w-[35vw] text-[#204FD5]">
              {next.title}
            </h2>
            <div className="flex gap-[1vw] flex-wrap">
              {next.tags.map((tag, i) => (
                <span
                  key={i}
                  className="border border-gray-900 text-black rounded-full px-[1.2vw] py-[0.4vw] text-[0.8vw] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------- MOBILE VERSION ---------- */}
      <div className="hidden max-sm:flex flex-col px-2 pb-16 text-[#001489]">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-[11vw] font-semibold leading-[95%] text-[#204FD5]">Partner</h1>
          <h1 className="text-[11vw] font-semibold leading-[95%]">Success</h1>
        </div>

        {/* Divider */}
        <div className="mb-6 border-t border-gray-300"></div>

        {/* Number + Arrows */}
        <div className="flex items-center justify-between mb-6">
          <h1 ref={numRef} className="text-[10vw] font-semibold text-[#204FD5]">
            {String(current.id).padStart(2, "0")}
          </h1>

          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 border border-[#001489] flex items-center justify-center rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 border border-[#001489] flex items-center justify-center rounded-full"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Content */}
        <div ref={contentRef} className="flex flex-col">
          <p className="text-[4vw] text-gray-600 mb-2">{current.subtitle}</p>
          <h2 className="text-[6vw] font-semibold leading-[120%] text-[#204FD5] mb-5">
            {current.title}
          </h2>

          <div className="flex flex-wrap gap-3">
            {current.tags.map((tag, i) => (
              <span
                key={i}
                className="border border-gray-900 rounded-full px-4 py-1 text-[2.4vw] font-medium text-black"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
