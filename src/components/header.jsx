import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Dot } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [isDarkBg, setIsDarkBg] = useState(false);

  const headerRef = useRef(null);
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const indicatorRef = useRef(null);
  const menuItemsRef = useRef([]);

  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/", id: "home" },
    { label: "About Us", path: "/#about", id: "about" },
    { label: "Events & Exhibitions", path: "/events", id: "events--exhibitions" },
    { label: "Parents & Media", path: "/parents-media", id: "parents--media" },
    { label: "Contact Us", path: "/contact", id: "contactus" },
  ];

  menuItemsRef.current = [];

  // ----------------------------------------
  // Underline animation
  // ----------------------------------------
  useLayoutEffect(() => {
    const activeEl = menuItemsRef.current.find(
      (el) => el?.dataset?.id === activeItem
    );
    if (!activeEl || !indicatorRef.current || !navRef.current) return;

    const rect = activeEl.getBoundingClientRect();
    const parentRect = navRef.current.getBoundingClientRect();

    const x = rect.left - parentRect.left;
    const widthVW = (rect.width / window.innerWidth) * 100;
    const xVW = (x / window.innerWidth) * 100;

    gsap.to(indicatorRef.current, {
      x: `${xVW}vw`,
      width: `${widthVW}vw`,
      duration: 0.4,
      ease: "power3.out",
    });
  }, [activeItem]);

  // ----------------------------------------
  // Detect dark background for logo/text
  // ----------------------------------------
  useEffect(() => {
    let rafId = null;
    const checkOverlap = () => {
      rafId = null;
      const headerEl = headerRef.current;
      if (!headerEl) return;

      const headerHeight = headerEl.offsetHeight || 0;
      const darkEls = document.querySelectorAll(".header-dark");
      let anyOverlap = false;

      for (const el of darkEls) {
        const r = el.getBoundingClientRect();
        if (r.top < headerHeight && r.bottom > 0) {
          anyOverlap = true;
          break;
        }
      }
      setIsDarkBg((prev) => (prev === anyOverlap ? prev : anyOverlap));
    };

    const handler = () => {
      if (rafId == null) rafId = requestAnimationFrame(checkOverlap);
    };
    handler();

    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // ----------------------------------------
  // Handle Active Section (Scroll-Based)
  // ----------------------------------------
  useEffect(() => {
    const { pathname } = location;

    // For other pages (like /contact)
    if (pathname !== "/") {
      const found = menuItems.find((m) => m.path === pathname);
      if (found) setActiveItem(found.id);
      return;
    }

    // Home Page Scroll Tracking
    const sections = document.querySelectorAll("div[id]");
    if (!sections.length) return;

    const onScroll = () => {
      let current = "home";
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollY - viewportHeight / 3; // trigger earlier
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          current = section.id;
        }
      });

      setActiveItem(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  // ----------------------------------------
  // Render
  // ----------------------------------------
  return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full z-[999] bg-transparent">
      <div className="flex items-start justify-between px-[2vw] py-[2vw]">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <img
            src={isDarkBg ? "/logo-white.svg" : "/logo-blue.svg"}
            alt="Logo"
            className="lg:w-[5vw] lg:h-[5vw] w-[12vw] h-[12vw] transition-all duration-300"
          />
        </div>

        {/* Desktop Nav */}
        <nav ref={navRef} className="hidden lg:flex gap-[2vw] items-center relative">
          {menuItems.map((item, i) => (
            <Link
              key={item.id}
              to={item.path}
              ref={(el) => (menuItemsRef.current[i] = el)}
              data-id={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`nav-text ${
                activeItem === item.id
                  ? isDarkBg
                    ? "text-white"
                    : "text-blue-900"
                  : isDarkBg
                  ? "text-gray-200 hover:text-white"
                  : "text-gray-800 hover:text-blue-900"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Underline */}
          <span
            ref={indicatorRef}
            style={{ left: 0, width: "0vw" }}
            className={`absolute -bottom-[0.1vw] h-[0.1vw] rounded transition-colors duration-300 ${
              isDarkBg ? "bg-white" : "bg-blue-900"
            }`}
          />

          {/* CTA */}
          <button
            className={`ml-[1vw] text-[0.9vw] px-[1.3vw] pl-[.7vw] py-[0.5vw] flex items-center gap-[0.6vw] rounded-full font-medium transition-colors transform duration-300 ${
              isDarkBg
                ? "bg-white border border-white text-blue-900 hover:bg-blue-900 hover:text-white"
                : "bg-blue-900 border border-blue-900 text-white hover:bg-white hover:text-blue-900"
            }`}
          >
            <Dot className="w-[1.6vw] h-[1.6vw]" /> Let's Talk
          </button>
        </nav>

        {/* Mobile Button */}
        <button
          className="lg:hidden transition-colors"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <Menu className={`w-[7.5vw] h-[7.5vw] ${isDarkBg ? "text-white" : "text-blue-900"}`} />
        </button>
      </div>
    </header>
  );
}

export { Header };
