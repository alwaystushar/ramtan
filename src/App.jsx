import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header.jsx"; // default export is better here
import Home from "./pages/home/home.jsx";    // default export
import Contact from "./pages/contact/contact.jsx"

// (optional) other pages
// import Contact from "./pages/contact.jsx";
// import Events from "./pages/events.jsx";

// helper to handle scrolling to hash
import ScrollToHash from "./components/ScrollToHash.jsx";

export const App = () => {
  return (
    
    <Router>
      <Header />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/events" element={<Events />} />  */}
      </Routes>
    </Router>
  );
};

export default App;
