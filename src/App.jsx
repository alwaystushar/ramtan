// src/App.jsx
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./components/header.jsx";
import Home from "./pages/home/home.jsx";
import EventsExhibitions from "./pages/events-exhibitions/EventsExhibitions.jsx"
import PartnersMedia  from "./pages/PartnersMedia/PartnersMedia.jsx";
import Contact from "./pages/contact/contact.jsx";
import ScrollToHash from "./components/ScrollToHash.jsx";

// ✅ This component forces GSAP & header to update after route change
const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    // Delay a bit to let new DOM elements render
    const timer = setTimeout(() => {
      try {
        ScrollTrigger.refresh(); // re-scan GSAP triggers
        window.dispatchEvent(new Event("recheckHeaderOverlap")); // recheck header color if needed
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
    <Router>
      <Header />
      <ScrollToHash />
      {/* 🔁 ensures GSAP + header update on route change */}
      <ScrollManager />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events-exhibitions" element={<EventsExhibitions />}/>
        <Route path="/partners-media" element={<PartnersMedia />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
