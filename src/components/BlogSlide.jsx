import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import RippleButton from "./RippleButton";

const slides = [
  {
    id: 1,
    title: "Our Core Strengths",
    tag: "Highlights",
    date: "Apr 4, 2023",
    image: "/img/home-hero1.jpg",
  },
  {
    id: 2,
    title: "Excellence in Execution",
    tag: "Events",
    date: "Jun 8, 2023",
    image: "/img/home-hero2.jpg",
  },
  {
    id: 3,
    title: "Building the Future",
    tag: "Innovation",
    date: "Sep 15, 2023",
    image: "/img/home-hero3.jpg",
  },
];

export default function BlogSlide() {
  const [current, setCurrent] = useState(0);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  // === Animate on slide change ===
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      imgRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
    );
    tl.fromTo(
      textRef.current.children,
      { y: "2vw", opacity: 0 },
      {
        y: "0vw",
        opacity: 1,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.8"
    );
  }, [current]);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const { title, tag, date, image } = slides[current];

  return (
    <section
    id="about"
    className="relative w-full h-[35vw] overflow-hidden">
      {/* === Background Image === */}
      <div className="absolute inset-0 -z-[10]">
        <img
          ref={imgRef}
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-blue-900/60"></div>
      </div>

      {/* === Overlay Text Content === */}
      <div
        ref={textRef}
        className="absolute bottom-[2vw] left-[6vw] text-white z-[10]"
      >
        <div className="flex flex-col gap-[4vw] w-fit">
          {/* === Tag + Title === */}
          <div className="flex flex-col gap-[1.5vw]">
            <span className="text-[0.9vw] border border-white/70 px-[0.9vw] py-[0.1vw] rounded-full inline-block w-fit whitespace-nowrap">
              {tag}
            </span>

            <h2 className="text-[3.6vw] font-semibold leading-[4vw] max-w-[50vw]">
              {title}
            </h2>
          </div>

          {/* === Date === */}
          <div className="flex items-center gap-[2vw] mt-[1.2vw]">
            <p className="text-[1vw] opacity-90">{date}</p>
            <Clock className="w-[2vw] h-[2vw] opacity-80" />
          </div>
        </div>
      </div>

      {/* === Navigation Buttons === */}
      <div
        className="
          absolute bottom-[9vw] right-[6vw] flex items-center gap-[1vw]
          z-[50] pointer-events-auto
        "
      >
        <RippleButton>
          <button
            onClick={prevSlide}
            className="text-white"
          >
            <ArrowLeft className="w-[1.2vw] h-[1.2vw]" />
          </button>
        </RippleButton>

        <RippleButton>
          <button
            onClick={nextSlide}
            className="text-white"
          >
            <ArrowRight className="w-[1.2vw] h-[1.2vw]" />
          </button>
        </RippleButton>
      </div>
    </section>
  );
}
