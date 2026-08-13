"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import personal from "../../../data/personal";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const links = [
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
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <Link href={getLinkHref("#home")} className="footer-logo">
            {personal.name}
          </Link>
          <p className="footer-description">{personal.bio}</p>
        </div>

        <div className="footer-nav">
          <h3 className="footer-title">Navigation</h3>
          <ul className="footer-links">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={getLinkHref(link.href)} className="footer-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-socials">
          <h3 className="footer-title">Connect</h3>
          <div className="social-links">
            {personal.socials.linkedin && (
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
            )}
            {personal.socials.github && (
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright">
            &copy; {currentYear} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
