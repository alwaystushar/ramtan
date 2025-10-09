import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ArrowDown } from "lucide-react";
import RippleButton from "../../../components/RippleButton.jsx";

export default function AboutVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef(null);
  const thumbnailRef = useRef(null);
  const playButtonRef = useRef(null);

  // === Handle Play ===
  const handlePlay = () => {
    // Disable multiple clicks
    if (isPlaying) return;
    setIsPlaying(true);

    // Smoothly fade out button and thumbnail
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.to(playButtonRef.current, { opacity: 0, scale: 0.8, duration: 0.5 }, 0)
      .to(thumbnailRef.current, { opacity: 0, duration: 0.8 }, "-=0.2")
      .add(() => {
        // Mount iframe AFTER thumbnail fades out
        const iframe = document.createElement("iframe");
        iframe.src =
          "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&modestbranding=1&controls=0&rel=0";
        iframe.title = "About Video";
        iframe.frameBorder = "0";
        iframe.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen";
        iframe.className =
          "absolute inset-0 w-full h-full object-cover will-change-transform";
        iframeRef.current.appendChild(iframe);

        // Fade the iframe in after it mounts
        gsap.fromTo(
          iframe,
          { opacity: 0, scale: 0.97 },
          { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
        );
      });
  };

  return (
    <section
      id="about"
      className="relative w-full h-screen overflow-hidden bg-black text-white header-dark"
    >
      {/* === Thumbnail === */}
      <img
        ref={thumbnailRef}
        src="/img/export.png"
        alt="Video thumbnail"
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
      />

      {/* === YouTube container (empty until clicked) === */}
      <div ref={iframeRef} className="absolute inset-0"></div>

      {/* === Overlay === */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80 pointer-events-none"></div>

      {/* === Play Button === */}
      {!isPlaying && (
        <div
          ref={playButtonRef}
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center cursor-pointer z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="w-[12vw] h-[12vw] transition-transform duration-300 hover:scale-110"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}

      {/* === Bottom Left Text + Ripple Button === */}
      <div className="absolute bottom-[2vw] left-[3vw] flex flex-row gap-[1.2vw] z-30 text-[1vw] font-light items-center">
        <p className="opacity-90 leading-[1.2vw]">
          Discover how we can <br /> elevate your business
        </p>

        <RippleButton
          bg="rgba(255,255,255,0.1)"
          hoverBg="rgba(255,255,255,0.3)"
          onClick={() => console.log("Scroll to next section")}
        >
          <ArrowDown className="w-[1.2vw] h-[1.2vw]" />
        </RippleButton>
      </div>

      {/* === Bottom Right Learn More Button === */}
      <div className="absolute bottom-[2vw] right-[3vw] z-30">
        <button className="group px-[2vw] py-[0.8vw] bg-transparent border border-white/40 rounded-full flex items-center gap-[0.5vw] text-[0.9vw] hover:bg-white hover:text-[#001F4D] transition-all duration-300">
          <span className="w-[0.5vw] h-[0.5vw] bg-white rounded-full animate-pulse transition-colors duration-300 group-hover:bg-[#001F4D]"></span>
          Learn more
        </button>
      </div>
    </section>
  );
}
