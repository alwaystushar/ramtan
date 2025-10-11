import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import RippleButton from "./RippleButton"; // ✅ Ripple button

export default function GsapCarousel({
  slides = [],
  dark = true,
  autoPlay = true,
  hold = 5,
  transition = 1.4,
}) {
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const [active, setActive] = useState(0);
  const total = slides.length;
  const animating = useRef(false);
  const autoplayTimer = useRef(null);
  const dragStart = useRef(null);

  // === Slide transition logic ===
  const goToSlide = (nextIndex, direction = "next") => {
    if (animating.current || nextIndex === active) return;
    animating.current = true;

    const current = slidesRef.current[active];
    const next = slidesRef.current[nextIndex];
    const offset = direction === "next" ? "100vw" : "-100vw";

    gsap.set(next, { zIndex: 3, x: offset });
    gsap.set(current, { zIndex: 2 });

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        animating.current = false;
        setActive(nextIndex);
        resetAutoplay();
      },
    });

    // Slide transition
    tl.to(next, { x: "0vw", duration: transition }, 0)
      .to(
        current,
        {
          x: direction === "next" ? "-10vw" : "10vw",
          opacity: 0.8,
          duration: transition,
        },
        0
      )
      // Animate text of next slide
      .fromTo(
        next.querySelector(".slide-title"),
        { y: "3vw", opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      )

      .set(current, { zIndex: 1, x: 0, opacity: 1 });
  };

  const nextSlide = () => goToSlide((active + 1) % total, "next");
  const prevSlide = () => goToSlide((active - 1 + total) % total, "prev");

  // === AutoPlay ===
  const resetAutoplay = () => {
    if (!autoPlay) return;
    clearInterval(autoplayTimer.current);
    autoplayTimer.current = setInterval(nextSlide, (hold + transition) * 1000);
  };

  useEffect(() => {
    if (!autoPlay) return;
    resetAutoplay();
    return () => clearInterval(autoplayTimer.current);
  }, [active]);

  // === Drag to slide ===
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseDown = (e) => {
      dragStart.current = e.clientX;
    };

    const handleMouseUp = (e) => {
      if (!dragStart.current) return;
      const delta = e.clientX - dragStart.current;
      if (Math.abs(delta) > 100) delta < 0 ? nextSlide() : prevSlide();
      dragStart.current = null;
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseup", handleMouseUp);
    };
  }, [active]);

  // === Initial setup ===
  useEffect(() => {
    slidesRef.current.forEach((slide, i) => {
      gsap.set(slide, {
        position: "absolute",
        inset: 0,
        zIndex: i === 0 ? 2 : 1,
        x: 0,
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className={`relative w-full h-screen overflow-hidden text-white cursor-grab ${
        dark ? "header-dark" : ""
      }`}
    >
      {/* ==== Slides ==== */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            ref={(el) => (slidesRef.current[i] = el)}
            className="absolute inset-0 bg-cover bg-center flex flex-col justify-end px-[2vw] py-[8vw]"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/45"></div>

            {/* ==== Title (Bottom Right) ==== */}
            <div className="relative z-10 text-start ml-auto max-w-[40vw]">
              <h1 className="slide-title text-[3.8vw] font-semibold leading-[110%] mb-[1vw] drop-shadow-lg">
                {slide.title}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* ==== Navigation Buttons ==== */}
      <div className="absolute bottom-[2vw] right-[3vw] flex items-center gap-[1vw] z-30">
        <RippleButton
          bg="rgba(0,0,0,0.4)"
          hoverBg="rgba(255,255,255,0.8)"
          color="#fff"
          hoverColor="#000"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-[1.5vw] h-[1.5vw]" />
        </RippleButton>

        <RippleButton
          bg="rgba(0,0,0,0.4)"
          hoverBg="rgba(255,255,255,0.8)"
          color="#fff"
          hoverColor="#000"
          onClick={nextSlide}
        >
          <ChevronRight className="w-[1.5vw] h-[1.5vw]" />
        </RippleButton>
      </div>

      {/* ==== Bottom Text (Left Side) ==== */}

      <div className="absolute bottom-[2vw] left-[3vw] flex flex-row gap-[1.2vw] z-30 text-[1vw] f">
        <p className="opacity-90">
          Discover how we can <br />
          elevate your business
        </p>
        <RippleButton
          bg="rgba(0,0,0,0.4)"
          hoverBg="rgba(255,255,255,0.8)"
          color="#fff"
          hoverColor="#000"
          onClick={nextSlide}
        >
          <div className="">
            <ArrowDown className="w-[1.2vw] h-[1.2vw] " />
          </div>
        </RippleButton>
      </div>
    </section>
  );
}
