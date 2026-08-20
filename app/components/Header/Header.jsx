"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import personal from "../../../data/personal";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const shouldRestoreScroll = useRef(true);

  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      
      // Only restore scroll position if the user closed the menu without clicking a link
      if (shouldRestoreScroll.current) {
        if (scrollY) {
          window.scrollTo(0, parseInt(scrollY || "0") * -1);
        }
      }
      // Reset the flag for the next time the menu opens
      shouldRestoreScroll.current = true;
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavLinkClick = () => {
    shouldRestoreScroll.current = false;
    closeMenu();
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "/education" },
    { label: "Contact", href: "#contact" },
  ];

  const getLinkHref = (href) => {
    if (href.startsWith("/")) return href;
    if (isHomePage) return href;
    if (href === "#home") return "/";
    return `/${href}`;
  };

  return (
    <header className="header">
      {/* Backdrop Overlay for Mobile Menu */}
      <div
        className={`nav-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      <div className="container header-container">
        <Link href="/" className="logo" onClick={handleNavLinkClick}>
          {personal.name}
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <Link
                  href={getLinkHref(link.href)}
                  className="nav-link"
                  onClick={handleNavLinkClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="header-cta">
            <Link
              href={getLinkHref("#contact")}
              className="cta-button"
              onClick={handleNavLinkClick}
            >
              Get In Touch
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
