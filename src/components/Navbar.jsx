import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "About Us", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          {/* <div className="logo-icon">ES</div> */}
          <img
            src="/eurovision_logo.jpg"
            alt="Eurovision Systems Logo"
            className="logo-img"
          />
          <div className="logo-text">
            <span className="logo-main">Eurovision</span>
            <span className="logo-sub">Service</span>
          </div>
        </a>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              Get Quote
            </a>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
