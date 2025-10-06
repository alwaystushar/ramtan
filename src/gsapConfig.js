// src/gsapConfig.js
import { gsap } from "gsap";

// ✅ Disable GSAP warnings globally (dev + production)
gsap.config({
  nullTargetWarn: false, // disables warnings for missing targets
  trialWarn: false       // removes trial license warnings if any plugins are used
});

// Optional: clean console note (once)
if (typeof window !== "undefined" && !window.__gsapSilenceLogged) {
  
  window.__gsapSilenceLogged = true;
}

export default gsap;
