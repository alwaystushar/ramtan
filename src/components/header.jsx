// src/components/Header.jsx
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, Dot } from "lucide-react";
import "./css/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [isDarkBg, setIsDarkBg] = useState(false);

  const headerRef = useRef(null);
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const menuItemsRef = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", path: "/#home", id: "home" },
    { label: "About Us", path: "/#about", id: "about" },
    { label: "Events & Exhibitions", path: "/events", id: "events--exhibitions" },
    { label: "Parents & Media", path: "/parents-media", id: "parents--media" },
    { label: "Contact Us", path: "/contact", id: "contactus" },
  ];

// ---------- GSAP underline animation (now in vw) ----------
useLayoutEffect(() => {
  const el = menuItemsRef.current.find((e) => e?.dataset?.id === activeItem);
  if (!el || !indicatorRef.current || !navRef.current) return;

  const rect = el.getBoundingClientRect();
  const parentRect = navRef.current.getBoundingClientRect();

  // convert to vw for consistent scaling
  const xVW = ((rect.left - parentRect.left) / window.innerWidth) * 100;
  const widthVW = (rect.width / window.innerWidth) * 100;

  gsap.to(indicatorRef.current, {
    x: `${xVW}vw`,
    width: `${widthVW}vw`,
    duration: 0.35,
    ease: "power3.out",
  });
}, [activeItem]);

  // ---------- helper: wait for element to appear (used after navigation) ----------
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

  // ---------- continuous (each-frame) detection of element just below the header ----------
  // keeps header color exact while scrolling / during GSAP animations
  useEffect(() => {
    let raf = 0;
    const header = headerRef.current;
    if (!header) return;

    const detect = () => {
      const rect = header.getBoundingClientRect();
      const x = window.innerWidth / 2;
      // 1px below header bottom — this is the point we sample
      const y = Math.min(window.innerHeight - 1, Math.round(rect.bottom + 1));
      const el = document.elementFromPoint(x, y);
      const dark = !!el?.closest?.(".header-dark");
      setIsDarkBg(dark);
      raf = requestAnimationFrame(detect);
    };

    raf = requestAnimationFrame(detect);

    const onResize = () => {
      // run at least once when resize happens
      const rect = header.getBoundingClientRect();
      const x = window.innerWidth / 2;
      const y = Math.min(window.innerHeight - 1, Math.round(rect.bottom + 1));
      const el = document.elementFromPoint(x, y);
      setIsDarkBg(!!el?.closest?.(".header-dark"));
    };

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, [location.pathname]); // re-run when path changes (DOM sections likely changed)

  // ---------- IntersectionObserver to pick the most-visible section (active menu) ----------
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = Array.from(document.querySelectorAll("section[id], div[id]"));
    if (!sections.length) return;

    // thresholds array for more precise intersectionRatio values
    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);

    const observer = new IntersectionObserver(
      (entries) => {
        // among all entries find the one with highest intersectionRatio
        let best = { ratio: 0, id: null };
        entries.forEach((e) => {
          if (e.intersectionRatio > best.ratio) {
            best = { ratio: e.intersectionRatio, id: e.target.id };
          }
        });
        if (best.id) {
          setActiveItem(best.id);
          return;
        }
        // fallback: if near top of page -> home
        if (window.scrollY < window.innerHeight / 3) setActiveItem("home");
      },
      { threshold: thresholds }
    );

    sections.forEach((s) => observer.observe(s));

    // initial heuristic: pick element at center if any
    requestAnimationFrame(() => {
      const el = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
      const id = el?.closest?.("[id]")?.id;
      if (id) setActiveItem((prev) => (prev === id ? prev : id));
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  // ---------- keep activeItem consistent on route/hash changes (refresh handling) ----------
  useEffect(() => {
    const path = location.pathname;
    const hash = location.hash || "";
    const exact = menuItems.find((m) => m.path === `${path}${hash}` || m.path === path);
    if (exact) {
      setActiveItem(exact.id);
      return;
    }
    if (path === "/" && hash) {
      setActiveItem(hash.replace("#", ""));
      return;
    }
    setActiveItem(path === "/" ? "home" : (() => {
      const found = menuItems.find((m) => m.path === path);
      return found ? found.id : "home";
    })());
  }, [location.pathname, location.hash]);

  // ---------- navigation click handler (single-click to navigate & active) ----------
  const handleNavClick = async (item) => {
    const [p, h] = item.path.split("#");
    const targetPath = p || "/";
    const targetHash = h || null;

    // if we are already on the target route
    if (location.pathname === targetPath) {
      // immediate active set so UI responds on first click
      setActiveItem(item.id);

      if (targetHash) {
        // try scroll now; if section doesn't exist yet (rare), wait for it
        const elNow = document.getElementById(targetHash);
        if (elNow) {
          elNow.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          const el = await waitForElement(targetHash, 2000);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // home click on home: smooth scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // Not on target route: navigate and then scroll to hash (if any)
    setActiveItem(item.id);
    navigate(targetPath);

    // wait a short moment for route to mount DOM then try to scroll to hash
    if (targetHash) {
      const el = await waitForElement(targetHash, 2000);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // if navigating to home, attempt a scroll-to-top after mount
      if (targetPath === "/") {
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      }
    }
  };

  // ---------- Render ----------
  return (
    <header
      ref={headerRef}
      className={`header fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isDarkBg ? "text-white" : "text-blue-900"
      }`}
    >
      <div className="header-inner container-box flex justify-between items-center py-[1vw]">
        <div className="logo-block">
          <img
            src={isDarkBg ? "logo-white.svg" : "logo-blue.svg"}
            alt="Logo"
            className="logo transition-all duration-300"
          />
        </div>

        <nav ref={navRef} className="nav hidden lg:flex items-center gap-[2vw] relative">
          {menuItems.map((item, i) => (
            <button
              key={item.id}
              ref={(el) => (menuItemsRef.current[i] = el)}
              data-id={item.id}
              onClick={() => handleNavClick(item)}
              className={`nav-text relative transition-colors ${
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

<span
  ref={indicatorRef}
  style={{ left: 0, width: "0vw", transform: "translateX(0vw)" }}
  className={`absolute bottom-[-0.3vw] h-[0.15vw] rounded-full transition-all duration-300 ${
    isDarkBg ? "bg-white" : "bg-blue-900"
  }`}
/>


          <button
            className={`ml-[2vw] flex items-center gap-[0.3vw] px-[1.5vw] py-[0.6vw] rounded-full text-[0.9vw] transition-all duration-300 headerBtn ${
              isDarkBg
                ? "bg-white text-blue-900 border border-white hover:bg-blue-900 hover:text-white"
                : "bg-blue-900 text-white border border-blue-900 hover:bg-white hover:text-blue-900"
            }`}
          >
            <Dot className="w-[1.6vw] h-[1.6vw]" /> Let’s Talk
          </button>
        </nav>

        <button
          className="lg:hidden transition-colors"
          onClick={() => setMenuOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          <Menu className={`w-[7vw] h-[7vw] ${isDarkBg ? "text-white" : "text-blue-900"}`} />
        </button>
      </div>
    </header>
  );
}

export { Header };
