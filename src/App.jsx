// src/App.jsx
import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./components/header.jsx";
import Home from "./pages/home/home.jsx";
import EventsExhibitions from "./pages/events-exhibitions/EventsExhibitions.jsx";
import PartnersMedia from "./pages/PartnersMedia/PartnersMedia.jsx";
import Contact from "./pages/contact/contact.jsx";
import ScrollToHash from "./components/ScrollToHash.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

// ✅ Re-runs GSAP refresh after route change
const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        ScrollTrigger.refresh();
        window.dispatchEvent(new Event("recheckHeaderOverlap"));
      } catch (e) {
        console.warn("GSAP refresh skipped:", e);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return null;
};

export const App = () => {
  return (
<BrowserRouter>
  <Header />
  <ScrollToTop />     {/* ✅ here */}
  <ScrollToHash />
  <ScrollManager />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/events-exhibitions" element={<EventsExhibitions />} />
    <Route path="/partners-media" element={<PartnersMedia />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
  );
};

export default App;
