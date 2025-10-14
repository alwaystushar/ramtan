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
    </>
  );
};

export default About;
