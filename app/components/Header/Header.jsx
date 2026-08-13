"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import personal from "../../../data/personal";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
      <div className="container header-container">
        <Link href="/" className="logo" onClick={closeMenu}>
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
                  onClick={closeMenu}
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
              onClick={closeMenu}
            >
              Get In Touch
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
