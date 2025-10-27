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
    className="relative w-full lg:h-[35vw] h-[80vw] overflow-hidden">
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
        className="absolute bottom-[2vw] left-[2vw] text-white z-[10]"
      >
        <div className="flex flex-col gap-[4vw] w-fit">
          {/* === Tag + Title === */}
          <div className="flex flex-col gap-[1.5vw]">
            <span className="lg:text-[0.9vw] text-[2vw] border border-white/70 lg:px-[0.9vw] px-[2vw] lg:py-[0.1vw] py-[0.5vw] rounded-full inline-block w-fit whitespace-nowrap">
              {tag}
            </span>

            <h2 className="lg:text-[3.6vw] text-[8vw] font-semibold leading-[120%] lg:max-w-[50vw]">
              {title}
            </h2>
          </div>

          {/* === Date === */}
          <div className="flex items-center gap-[2vw] mt-[1.2vw]">
            <p className="lg:text-[1vw] text-[3vw] opacity-90">{date}</p>
            <Clock className="lg:w-[2vw] lg:h-[2vw] w-[4vw] h-[4vw] opacity-80" />
          </div>
        </div>
      </div>

      {/* === Navigation Buttons === */}
      <div
        className="
          absolute bottom-[9vw] right-[6vw] flex items-center gap-[1vw]
          z-[50] pointer-events-auto max-sm:hidden
        "
      >
        <RippleButton
            onClick={prevSlide}
            className="text-white"
          >
            <ArrowLeft className="w-[1.2vw] h-[1.2vw]" />
          
        </RippleButton>

        <RippleButton
            onClick={nextSlide}
            className="text-white"
          >
            <ArrowRight className="w-[1.2vw] h-[1.2vw]" />
          
        </RippleButton>
      </div>
    </section>
  );
}
