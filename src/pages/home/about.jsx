import React from "react";
import AboutVideoSection from "./comp/AboutVideoSection.jsx";
import AboutUsSection from "./comp/AboutUsSection.jsx";
import Foundation from "./comp/Foundation.jsx";
import CardHoverEffect from "./comp/utils/CardHoverEffect.jsx";
import HistoryTimeline from "./comp/HistoryTimeline.jsx";
import YearsExp from "./comp/YearsEpx.jsx";
import ImpressiveMilestone from "./comp/ImpressiveMilestone.jsx";

import GsapFadeUp from "../../components/GsapFadeUp.jsx"; // ✅ Reusable animation component



export const About = () => {
  return (
    <>
      <AboutVideoSection />
      <AboutUsSection />
      <Foundation />
      <CardHoverEffect />
      <HistoryTimeline />
      <YearsExp />
      <ImpressiveMilestone />
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

export default About;
