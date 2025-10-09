// src/components/Header.jsx
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./css/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [isDarkBg, setIsDarkBg] = useState(false);

  const headerRef = useRef(null);
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const menuItemsRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const mobileLinksRef = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", path: "/#home", id: "home" },
    { label: "About Us", path: "/#about", id: "about" },
    { label: "Events & Exhibitions", path: "/events", id: "events--exhibitions" },
    { label: "Parents & Media", path: "/parents-media", id: "parents--media" },
    { label: "Contact Us", path: "/contact", id: "contactus" },
  ];

  // ---------- GSAP underline animation ----------
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

  // ---------- helper: wait for element ----------
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

  // ---------- detect background color ----------
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

  // ---------- section tracking ----------
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = Array.from(document.querySelectorAll("section[id], div[id]"));
    if (!sections.length) return;

    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);
    const observer = new IntersectionObserver(
      (entries) => {
        let best = { ratio: 0, id: null };
        entries.forEach((e) => {
          if (e.intersectionRatio > best.ratio) best = { ratio: e.intersectionRatio, id: e.target.id };
        });
        if (best.id) setActiveItem(best.id);
        else if (window.scrollY < window.innerHeight / 3) setActiveItem("home");
      },
      { threshold: thresholds }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [location.pathname]);

  // ---------- handle hash route change ----------
  useEffect(() => {
    const path = location.pathname;
    const hash = location.hash || "";
    const exact = menuItems.find((m) => m.path === `${path}${hash}` || m.path === path);
    if (exact) return setActiveItem(exact.id);
    if (path === "/" && hash) return setActiveItem(hash.replace("#", ""));
    setActiveItem(path === "/" ? "home" : "home");
  }, [location.pathname, location.hash]);

  // ---------- navigation click ----------
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

  // ---------- mobile menu animation ----------
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    if (menuOpen) {
      tl.to(mobileMenuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.6,
      })
        .fromTo(
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

  // ---------- render ----------
  return (
    <header
      ref={headerRef}
      className={`header ${
        isDarkBg ? "text-white" : "text-blue-900"
      }`}
    >
      <div className="header-inner container-box">
        {/* Logo */}
        <div className="logo-block">
          <img
            src={isDarkBg ? "logo-white.svg" : "logo-blue.svg"}
            alt="Logo"
            className="logo"
          />
        </div>

        {/* Desktop Nav */}
        <nav ref={navRef} className="nav">
          {menuItems.map((item, i) => (
            <button
              key={item.id}
              ref={(el) => (menuItemsRef.current[i] = el)}
              data-id={item.id}
              onClick={() => handleNavClick(item)}
              className={`nav-text  ${
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
            className={`active-underline ${
              isDarkBg ? "bg-white" : "bg-blue-900"
            }`}
          ></span>

          {/* Let’s Talk Button */}
          <button
            className={`group headerBtn ${
              isDarkBg
                ? "bg-transparent border-white/40 text-white hover:bg-white hover:text-[#001F4D]"
                : "bg-transparent border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
            }`}
          >
            <span
              className={`w-[0.5vw] h-[0.5vw] rounded-full animate-pulse transition-colors duration-300 ${
                isDarkBg ? "bg-white group-hover:bg-[#001F4D]" : "bg-blue-900 group-hover:bg-white"
              }`}
            ></span>
            Let’s Talk
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden transition-colors z-50"
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

      {/* Mobile Menu */}
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

        {/* Mobile Let’s Talk Button */}
        <button className="group flex items-center gap-[1.5vw] px-[5vw] py-[2vw] rounded-full border border-white text-white text-[5vw] transition-all duration-300 hover:bg-white hover:text-[#001F4D]">
          <span className="w-[1vw] h-[1vw] bg-white rounded-full animate-pulse group-hover:bg-[#001F4D] transition-colors duration-300"></span>
          Let’s Talk
        </button>

        {/* Close Button inside menu */}
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
