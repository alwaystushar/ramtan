import React from "react";
import { Facebook, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";
import GsapFadeUp from "../../components/GsapFadeUp.jsx"; // ✅ Reusable animation component

export const Home = () => {
  return (
    <>
      {/* ---------------- Section 1 - Dark Hero ---------------- */}
      <div
        id="home"
        className="relative h-screen flex flex-col justify-between text-white header-dark container-box"
        style={{
          backgroundImage: "url('/img/hero-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Center Text */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <GsapFadeUp duration={1.2} delay={0.2}>
            <h1 className="text-[5vw] font-medium leading-[100%] drop-shadow-lg">
              Empower <br /> Your Business <br /> Growth
            </h1>
          </GsapFadeUp>
        </div>

        {/* Footer Info */}
{/* Footer Info */}
<div className="flex justify-between items-end font-light text-[0.75vw] hero-footer">
  {/* Left Contact Info */}
  <div>
    <GsapFadeUp duration={1} delay={0.5} offsetStart="100%">
      <p>Contact Us</p>
    </GsapFadeUp>

    <GsapFadeUp duration={1} delay={0.6} offsetStart="100%">
      <p className="opacity-80">m: +966 12 217 1717</p>
    </GsapFadeUp>

    <GsapFadeUp duration={1} delay={0.7} offsetStart="100%">
      <p className="opacity-80">e: hello@ramtan-expo.com</p>
    </GsapFadeUp>

    <GsapFadeUp duration={1} delay={0.8} offsetStart="100%">
      <p className="opacity-80">King Fahad Road, Riyadh, KSA</p>
    </GsapFadeUp>
  </div>

  {/* Right Social Icons */}
  <div className="flex gap-[.85vw] items-center">
    <GsapFadeUp duration={1} delay={0.9} offsetStart="100%">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-300"
      >
        <Facebook className="w-[1.2vw] h-[1.2vw]" />
      </a>
    </GsapFadeUp>

    <GsapFadeUp duration={1} delay={1.0} offsetStart="100%">
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-300 transition-colors hover:scale-110 transform duration-300"
      >
        <Linkedin className="w-[1.2vw] h-[1.2vw]" />
      </a>
    </GsapFadeUp>

    <GsapFadeUp duration={1} delay={1.1} offsetStart="100%">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-400 transition-colors hover:scale-110 transform duration-300"
      >
        <Instagram className="w-[1.2vw] h-[1.2vw]" />
      </a>
    </GsapFadeUp>

    <GsapFadeUp duration={1} delay={1.2} offsetStart="100%">
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-400 transition-colors hover:scale-110 transform duration-300"
      >
        <Youtube className="w-[1.2vw] h-[1.2vw]" />
      </a>
    </GsapFadeUp>

    <GsapFadeUp duration={1} delay={1.3} offsetStart="100%">
      <a
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-300"
      >
        <Twitter className="w-[1.2vw] h-[1.2vw]" />
      </a>
    </GsapFadeUp>

    <GsapFadeUp duration={1} delay={1.4} offsetStart="100%">
      <p className="text-[0.75vw] font-light text-white">
        ramtan-expo.sa
      </p>
    </GsapFadeUp>
  </div>
</div>

      </div>

      {/* ---------------- Section 2 - Light ---------------- */}
      <div
        id="about"
        className="h-[100vh] flex justify-center items-center bg-white"
      >
        <GsapFadeUp duration={1} delay={0.3}>
          <p className="text-black text-[2vw] leading-[2.5vw] text-center max-w-[60vw]">
            Explore our features and services
          </p>
        </GsapFadeUp>
      </div>

      {/* ---------------- Section 3 - Dark ---------------- */}
      <div className="h-[100vh] flex justify-center items-center bg-blue-900 header-dark ">
        <GsapFadeUp duration={1.2} delay={0.2}>
          <h1 className="text-white text-[5vw] font-semibold text-center">
            Another dark section
          </h1>
        </GsapFadeUp>
      </div>
    </>
  );
};

export default Home;
