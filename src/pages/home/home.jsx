import React from "react";
import { Facebook, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";
import Hero from "./comp/hero-section.jsx";
import AboutVideoSection from "./comp/AboutVideoSection.jsx";
import AboutUsSection from "./comp/AboutUsSection.jsx";


import GsapFadeUp from "../../components/GsapFadeUp.jsx"; // ✅ Reusable animation component

export const Home = () => {
  return (
    <>

<Hero />
<AboutVideoSection />
<AboutUsSection />



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
