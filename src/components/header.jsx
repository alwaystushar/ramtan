// // src/components/Header.jsx
// import React, {  useState, useRef, useEffect, useLayoutEffect } from "react";
// import { gsap } from "gsap";
// import {Link, useLocation, useNavigate } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import "./css/header.css";

// export default function Header() {
//   // ---------- STATE ----------
//   const [menuOpen, setMenuOpen] = useState(false);     // For mobile menu toggle
//   const [activeItem, setActiveItem] = useState("home"); // Tracks current active nav item
//   const [isDarkBg, setIsDarkBg] = useState(false);     // Switches header color based on background

//   // ---------- REFS ----------
//   const headerRef = useRef(null);
//   const navRef = useRef(null);
//   const indicatorRef = useRef(null);
//   const menuItemsRef = useRef([]);
//   const mobileMenuRef = useRef(null);
//   const mobileLinksRef = useRef([]);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // ---------- NAV MENU ITEMS ----------
//   const menuItems = [
//     { label: "Home", path: "/#home", id: "home" },
//     { label: "About Us", path: "/#about", id: "about" },
//     { label: "Events & Exhibitions", path: "/events-exhibitions", id: "events--exhibitions" },
//     { label: "Partners & Media", path: "/partners-media", id: "partners-media" },
//     { label: "Contact Us", path: "/contact", id: "contactus" },
//   ];

//   // ---------- UNDERLINE ANIMATION (GSAP) ----------
//   useLayoutEffect(() => {
//     if (!indicatorRef.current || !navRef.current) return;

//     // Get the active menu item’s position
//     const el = menuItemsRef.current.find((e) => e?.dataset?.id === activeItem);
//     if (!el) return;

//     // Calculate X and width in vw (for responsiveness)
//     const rect = el.getBoundingClientRect();
//     const parentRect = navRef.current.getBoundingClientRect();
//     const xVW = ((rect.left - parentRect.left) / window.innerWidth) * 100;
//     const widthVW = (rect.width / window.innerWidth) * 100;

//     // Animate underline position and width
//     gsap.to(indicatorRef.current, {
//       x: `${xVW}vw`,
//       width: `${widthVW}vw`,
//       duration: 0.35,
//       ease: "power3.out",
//     });
//   }, [activeItem]);

//   // ---------- HELPER: Wait for section to exist ----------
//   const waitForElement = (id, timeout = 2000) =>
//     new Promise((resolve) => {
//       const existing = document.getElementById(id);
//       if (existing) return resolve(existing);
//       const start = performance.now();
//       const tick = () => {
//         const el = document.getElementById(id);
//         if (el) return resolve(el);
//         if (performance.now() - start > timeout) return resolve(null);
//         requestAnimationFrame(tick);
//       };
//       tick();
//     });

//   // ---------- BACKGROUND COLOR DETECTION ----------
//   // Continuously checks what’s behind the header to toggle light/dark mode
//   useEffect(() => {
//     let raf = 0;
//     const header = headerRef.current;
//     if (!header) return;

//     const detect = () => {
//       const rect = header.getBoundingClientRect();
//       const x = window.innerWidth / 2;
//       const y = Math.min(window.innerHeight - 1, Math.round(rect.bottom + 1));
//       const el = document.elementFromPoint(x, y);
//       const dark = !!el?.closest?.(".header-dark"); // looks for dark section class
//       setIsDarkBg(dark);
//       raf = requestAnimationFrame(detect);
//     };

//     raf = requestAnimationFrame(detect);
//     return () => cancelAnimationFrame(raf);
//   }, [location.pathname]);

//   // ---------- SECTION TRACKING ----------
//   // Highlights current menu item based on scroll position (on home page only)
//   useEffect(() => {
//     if (location.pathname !== "/") return;

//     const sections = Array.from(document.querySelectorAll("section[id], div[id]"));
//     if (!sections.length) return;

//     const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);
//     const observer = new IntersectionObserver(
//       (entries) => {
//         let best = { ratio: 0, id: null };
//         entries.forEach((e) => {
//           if (e.intersectionRatio > best.ratio)
//             best = { ratio: e.intersectionRatio, id: e.target.id };
//         });
//         if (best.id) setActiveItem(best.id);
//         else if (window.scrollY < window.innerHeight / 3) setActiveItem("home");
//       },
//       { threshold: thresholds }
//     );

//     sections.forEach((s) => observer.observe(s));
//     return () => observer.disconnect();
//   }, [location.pathname]);

//   // ---------- SYNC ACTIVE MENU ON ROUTE CHANGE ----------
//   useEffect(() => {
//     const path = location.pathname;
//     const hash = location.hash || "";
//     const exact = menuItems.find((m) => m.path === `${path}${hash}` || m.path === path);
//     if (exact) return setActiveItem(exact.id);
//     if (path === "/" && hash) return setActiveItem(hash.replace("#", ""));
//     setActiveItem(path === "/" ? "home" : "home");
//   }, [location.pathname, location.hash]);

//   // ---------- NAVIGATION CLICK HANDLER ----------
//   const handleNavClick = async (item) => {
//     const [p, h] = item.path.split("#");
//     const targetPath = p || "/";
//     const targetHash = h || null;
//     setActiveItem(item.id);

//     // If already on same page
//     if (location.pathname === targetPath) {
//       if (targetHash) {
//         // Scroll to target section smoothly
//         const el = document.getElementById(targetHash) || (await waitForElement(targetHash, 2000));
//         if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
//       } else {
//         // Scroll to top if no hash
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       }
//       setMenuOpen(false);
//       return;
//     }

//     // Navigate to new page
//     navigate(targetPath);
//     setMenuOpen(false);

//     // Scroll to section after route change
//     if (targetHash) {
//       const el = await waitForElement(targetHash, 2000);
//       if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
//     } else if (targetPath === "/") {
//       setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
//     }
//   };

//   // ---------- MOBILE MENU ANIMATION ----------
//   useEffect(() => {
//     if (!mobileMenuRef.current) return;

//     const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
//     if (menuOpen) {
//       // Open menu animation
//       tl.to(mobileMenuRef.current, {
//         x: 0,
//         opacity: 1,
//         duration: 0.6,
//       }).fromTo(
//         mobileLinksRef.current,
//         { y: 40, opacity: 0 },
//         { y: 0, opacity: 1, stagger: 0.1, duration: 0.6 },
//         "-=0.3"
//       );
//     } else {
//       // Close menu animation
//       tl.to(mobileMenuRef.current, { x: "100%", opacity: 0, duration: 0.6 });
//     }

//     return () => tl.kill();
//   }, [menuOpen]);

//   // ---------- RENDER ----------
//   return (
//     <header ref={headerRef} className={`header ${isDarkBg ? "text-white" : "text-blue-900"}`}>
//       <div className="header-inner container-box">
        
//         {/* === LOGO === */}
//      <Link to="/#home">
//      <div className="logo-block">
//           <img
//             src={isDarkBg ? "logo-white.svg" : "logo-blue.svg"}
//             alt="Logo"
//             className="logo"
//           />
//         </div>
//      </Link>
        
//         {/* === DESKTOP NAVIGATION === */}
//         <nav ref={navRef} className="nav">
//           {menuItems.map((item, i) => (
//             <button
//               key={item.id}
//               ref={(el) => (menuItemsRef.current[i] = el)}
//               data-id={item.id}
//               onClick={() => handleNavClick(item)}
//               className={`nav-text ${
//                 activeItem === item.id
//                   ? isDarkBg
//                     ? "text-white"
//                     : "text-blue-900"
//                   : isDarkBg
//                   ? "text-gray-300 hover:text-white"
//                   : "text-gray-800 hover:text-blue-900"
//               }`}
//             >
//               {item.label}
//             </button>
//           ))}

//           {/* Underline for active link */}
//           <span
//             ref={indicatorRef}
//             style={{ left: 0, width: "0vw", transform: "translateX(0vw)" }}
//             className={`active-underline ${isDarkBg ? "bg-white" : "bg-blue-900"}`}
//           ></span>

//           {/* === Let’s Talk Button (Desktop) === */}
//           <button
//             className={`group headerBtn ${
//               isDarkBg
//                 ? "hover:bg-blue-900 border-white/40 text-blue-900 bg-white hover:text-white hover:border-blue-900"
//                 : "bg-blue-900 border-blue-900 hover:text-blue-900 hover:bg-transparent  text-white"
//             }`}
//           >
//             <span
//               className={`w-[0.5vw] h-[0.5vw] rounded-full animate-pulse transition-colors duration-300 ${
//                 isDarkBg
//                   ? "bg-blue-900 group-hover:bg-white"
//                   : "group-hover:bg-blue-900 bg-white"
//               }`}
//             ></span>
//             Let’s Talk
//           </button>
//         </nav>

//         {/* === MOBILE MENU TOGGLE ICON === */}
//         <button
//           className="z-50 transition-colors lg:hidden"
//           onClick={() => setMenuOpen((s) => !s)}
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? (
//             <X className={`w-[8vw] h-[8vw] ${isDarkBg ? "text-white" : "text-blue-900/0"}`} />
//           ) : (
//             <Menu className={`w-[8vw] h-[8vw] ${isDarkBg ? "text-white" : "text-blue-900"}`} />
//           )}
//         </button>
//       </div>

//       {/* === MOBILE MENU PANEL === */}
//       <div
//         ref={mobileMenuRef}
//         className="fixed top-0 right-0 w-full h-screen bg-[#001F4D] text-white flex flex-col items-center justify-center gap-[8vw] transform translate-x-full opacity-0 z-40 lg:hidden"
//       >
//         {/* Mobile Nav Items */}
//         {menuItems.map((item, i) => (
//           <button
//             key={item.id}
//             ref={(el) => (mobileLinksRef.current[i] = el)}
//             onClick={() => handleNavClick(item)}
//             className={`text-[6vw] font-light ${
//               activeItem === item.id ? "text-white" : "text-white/70 hover:text-white"
//             }`}
//           >
//             {item.label}
//           </button>
//         ))}

//         {/* Mobile Let’s Talk Button */}
//         <button className="group flex items-center gap-[1.5vw] px-[5vw] py-[2vw] rounded-full border border-white text-white text-[5vw] transition-all duration-300 hover:bg-white hover:text-[#001F4D]">
//           <span className="w-[1vw] h-[1vw] bg-white rounded-full animate-pulse group-hover:bg-[#001F4D] transition-colors duration-300"></span>
//           Let’s Talk
//         </button>

//         {/* Close Button inside menu */}
//         <button
//           onClick={() => setMenuOpen(false)}
//           className="absolute top-[5vw] right-[6vw] text-white hover:scale-110 transition-transform"
//         >
//           <X className="w-[8vw] h-[8vw]" />
//         </button>
//       </div>
//     </header>
//   );
// }

// export { Header };


// src/components/Header.jsx
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./css/header.css";

export default function Header() {
  // ---------- STATE ----------
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle
  const [activeItem, setActiveItem] = useState("home");
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  // ---------- REFS ----------
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const menuItemsRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const mobileLinksRef = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();

  // ---------- NAV MENU ITEMS ----------
  const menuItems = [
    { label: "Home", path: "/#home", id: "home" },
    { label: "About Us", path: "/#about", id: "about" },
    { label: "Events & Exhibitions", path: "/events-exhibitions", id: "events--exhibitions" },
    { label: "Partners & Media", path: "/partners-media", id: "partners-media" },
    { label: "Contact Us", path: "/contact", id: "contactus" },
  ];

  // ---------- UNDERLINE ANIMATION (GSAP) ----------
  useLayoutEffect(() => {
    if (!indicatorRef.current || !navRef.current) return;

    const el = menuItemsRef.current.find((e) => e?.dataset?.id === activeItem);
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const parentRect = navRef.current.getBoundingClientRect();
    const xVW = ((rect.left - parentRect.left) / window.innerWidth) * 100;
    const widthVW = (rect.width / window.innerWidth) * 100;

    gsap.to(indicatorRef.current, {
      x: `${xVW}vw`,
      width: `${widthVW}vw`,
      duration: 0.35,
      ease: "power3.out",
    });
  }, [activeItem]);

  // ---------- WAIT FOR ELEMENT ----------
  const waitForElement = (id, timeout = 2000) =>
    new Promise((resolve) => {
      const existing = document.getElementById(id);
      if (existing) return resolve(existing);
      const start = performance.now();
      const tick = () => {
        const el = document.getElementById(id);
        if (el) return resolve(el);
        if (performance.now() - start > timeout) return resolve(null);
        requestAnimationFrame(tick);
      };
      tick();
    });

  // ---------- BACKGROUND COLOR DETECTION ----------
  useEffect(() => {
    let raf = 0;
    const header = headerRef.current;
    if (!header) return;

    const detect = () => {
      const rect = header.getBoundingClientRect();
      const x = window.innerWidth / 2;
      const y = Math.min(window.innerHeight - 1, Math.round(rect.bottom + 1));
      const el = document.elementFromPoint(x, y);
      const dark = !!el?.closest?.(".header-dark");
      setIsDarkBg(dark);
      raf = requestAnimationFrame(detect);
    };

    raf = requestAnimationFrame(detect);
    return () => cancelAnimationFrame(raf);
  }, [location.pathname]);

  // ---------- SECTION TRACKING ----------
  useEffect(() => {
    if (location.pathname !== "/") return;
    const sections = Array.from(document.querySelectorAll("section[id], div[id]"));
    if (!sections.length) return;

    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);
    const observer = new IntersectionObserver(
      (entries) => {
        let best = { ratio: 0, id: null };
        entries.forEach((e) => {
          if (e.intersectionRatio > best.ratio)
            best = { ratio: e.intersectionRatio, id: e.target.id };
        });
        if (best.id) setActiveItem(best.id);
        else if (window.scrollY < window.innerHeight / 3) setActiveItem("home");
      },
      { threshold: thresholds }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [location.pathname]);

  // ---------- SYNC ACTIVE MENU ----------
  useEffect(() => {
    const path = location.pathname;
    const hash = location.hash || "";
    const exact = menuItems.find((m) => m.path === `${path}${hash}` || m.path === path);
    if (exact) return setActiveItem(exact.id);
    if (path === "/" && hash) return setActiveItem(hash.replace("#", ""));
    setActiveItem(path === "/" ? "home" : "home");
  }, [location.pathname, location.hash]);

  // ---------- NAV CLICK HANDLER ----------
  const handleNavClick = async (item) => {
    const [p, h] = item.path.split("#");
    const targetPath = p || "/";
    const targetHash = h || null;
    setActiveItem(item.id);

    if (location.pathname === targetPath) {
      if (targetHash) {
        const el = document.getElementById(targetHash) || (await waitForElement(targetHash, 2000));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setMenuOpen(false);
      return;
    }

    navigate(targetPath);
    setMenuOpen(false);

    if (targetHash) {
      const el = await waitForElement(targetHash, 2000);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (targetPath === "/") {
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }
  };

  // ---------- MOBILE MENU ANIMATION ----------
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    if (menuOpen) {
      tl.to(mobileMenuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.6,
      }).fromTo(
        mobileLinksRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6 },
        "-=0.3"
      );
    } else {
      tl.to(mobileMenuRef.current, { x: "100%", opacity: 0, duration: 0.6 });
    }
    return () => tl.kill();
  }, [menuOpen]);

  // ---------- HEADER SHOW/HIDE ON SCROLL ----------
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) < 5) return; // small scroll ignore

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false); // scroll down -> hide
      } else {
        setShowHeader(true); // scroll up -> show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ---------- RENDER ----------
  return (
    <header
      ref={headerRef}
      className={`header ${isDarkBg ? "text-white" : "text-blue-900"} transition-transform duration-500 ease-in-out ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="header-inner container-box">
        {/* === LOGO === */}
        <Link to="/#home">
          <div className="logo-block">
            <img
              src={isDarkBg ? "logo-white.svg" : "logo-blue.svg"}
              alt="Logo"
              className="logo"
            />
          </div>
        </Link>

        {/* === DESKTOP NAVIGATION === */}
        <nav ref={navRef} className="nav">
          {menuItems.map((item, i) => (
            <button
              key={item.id}
              ref={(el) => (menuItemsRef.current[i] = el)}
              data-id={item.id}
              onClick={() => handleNavClick(item)}
              className={`nav-text ${
                activeItem === item.id
                  ? isDarkBg
                    ? "text-white"
                    : "text-blue-900"
                  : isDarkBg
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-800 hover:text-blue-900"
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Underline */}
          <span
            ref={indicatorRef}
            style={{ left: 0, width: "0vw", transform: "translateX(0vw)" }}
            className={`active-underline ${isDarkBg ? "bg-white" : "bg-blue-900"}`}
          ></span>

          {/* Desktop Button */}
          <button
            className={`group headerBtn ${
              isDarkBg
                ? "hover:bg-blue-900 border-white/40 text-blue-900 bg-white hover:text-white hover:border-blue-900"
                : "bg-blue-900 border-blue-900 hover:text-blue-900 hover:bg-transparent  text-white"
            }`}
          >
            <span
              className={`w-[0.5vw] h-[0.5vw] rounded-full animate-pulse transition-colors duration-300 ${
                isDarkBg
                  ? "bg-blue-900 group-hover:bg-white"
                  : "group-hover:bg-blue-900 bg-white"
              }`}
            ></span>
            Let’s Talk
          </button>
        </nav>

        {/* === MOBILE MENU ICON === */}
        <button
          className="z-50 transition-colors lg:hidden"
          onClick={() => setMenuOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className={`w-[8vw] h-[8vw] ${isDarkBg ? "text-white" : "text-blue-900/0"}`} />
          ) : (
            <Menu className={`w-[8vw] h-[8vw] ${isDarkBg ? "text-white" : "text-blue-900"}`} />
          )}
        </button>
      </div>

      {/* === MOBILE MENU === */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 w-full h-screen bg-[#001F4D] text-white flex flex-col items-center justify-center gap-[8vw] transform translate-x-full opacity-0 z-40 lg:hidden"
      >
        {menuItems.map((item, i) => (
          <button
            key={item.id}
            ref={(el) => (mobileLinksRef.current[i] = el)}
            onClick={() => handleNavClick(item)}
            className={`text-[6vw] font-light ${
              activeItem === item.id ? "text-white" : "text-white/70 hover:text-white"
            }`}
          >
            {item.label}
          </button>
        ))}

        <button className="group flex items-center gap-[1.5vw] px-[5vw] py-[2vw] rounded-full border border-white text-white text-[5vw] transition-all duration-300 hover:bg-white hover:text-[#001F4D]">
          <span className="w-[1vw] h-[1vw] bg-white rounded-full animate-pulse group-hover:bg-[#001F4D] transition-colors duration-300"></span>
          Let’s Talk
        </button>

        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-[5vw] right-[6vw] text-white hover:scale-110 transition-transform"
        >
          <X className="w-[8vw] h-[8vw]" />
        </button>
      </div>
    </header>
  );
}

export { Header };



