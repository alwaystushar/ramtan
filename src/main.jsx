// src/main.jsx or src/index.jsx
import "./gsapConfig"; // ⚡ must come before any GSAP animations
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
