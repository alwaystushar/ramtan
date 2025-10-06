import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ArrowDown } from "lucide-react";
import RippleButton from "../../../components/RippleButton.jsx";

export default function AboutVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const iframeRef = useRef(null);
  const thumbnailRef = useRef(null);
  const playButtonRef = useRef(null);

  // === Handle Play ===
  const handlePlay = () => {
    setIsPlaying(true);

    gsap.to(playButtonRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: "power3.inOut",
    });

    gsap.to(thumbnailRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      onComplete: () => setVideoLoaded(true),
    });
  };

  // === Animate video in ===
  useEffect(() => {
    if (videoLoaded) {
      gsap.fromTo(
        iframeRef.current,
        { opacity: 0, scale: 0.97 },
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, [videoLoaded]);

  return (
    <section
      id="about"
      className="relative w-full h-screen overflow-hidden bg-black text-white header-dark"
    >
      {/* === Thumbnail before play === */}
      <img
        ref={thumbnailRef}
        src="/img/export.png"
        alt="Video thumbnail"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* === YouTube Video === */}
      {videoLoaded && (
        <iframe
          ref={iframeRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ`}
          title="About Video"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      {/* === Overlay === */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80 pointer-events-none"></div>

      {/* === Play Button Center === */}
      {!isPlaying && (
        <div
          ref={playButtonRef}
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center cursor-pointer z-20"
        >
          <div className="   flex items-center justify-center  transition-all duration-300 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              className="w-[12vw] h-[12vw] "
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
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
          onClick={() => console.log('Scroll to next section')}
        >
          <ArrowDown className="w-[1.2vw] h-[1.2vw]" />
        </RippleButton>
      </div>

      {/* === Bottom Right Learn More Button (always visible) === */}
      <div className="absolute bottom-[2vw] right-[3vw] z-30">
<button className="group px-[2vw] py-[0.8vw] bg-transparent border border-white/40 rounded-full flex items-center gap-[0.5vw] text-[0.9vw] hover:bg-white hover:text-[#001F4D] transition-all duration-300">
  <span className="w-[0.5vw] h-[0.5vw] bg-white rounded-full animate-pulse transition-colors duration-300 group-hover:bg-[#001F4D]"></span>
  Learn more
</button>
      </div>
    </section>
  );
}
