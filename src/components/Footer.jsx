import React from "react";
import "./Footer.css";

export default function Footer() {
  const productLinks = [
    "Currency Counting Machine",
    "Bundle Note Counting Machine",
    "Mix Value Note Counting Machine",
    "Fake Note Detector",
    "Coin Sorting Machine",
    "Note Sorting Machine",
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          {/* <div className="footer-logo">
            <div className="logo-icon">ES</div>
            <div>
              <span className="logo-main">Eurovesion</span>
              <span className="logo-sub">Systems</span>
            </div>
          </div> */}
          <div className="footer-logo">
            <img
              src="/eurovesion_logo.jpg"
              alt="Eurovesion Systems Logo"
              className="footer-logo-img"
            />
            <div>
              <span className="logo-main">Eurovesion</span>
              <span className="logo-sub">Systems</span>
            </div>
          </div>
          <p className="footer-desc">
            Ranchi's most trusted dealer for note counting machines, fake note
            detectors, and cash handling solutions. Authorised dealer for
            Maxsell & Godrej.
          </p>
          <div className="footer-socials">
            <a
              href="https://wa.me/919845212321"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://www.indiamart.com/eurovesion-services-ranchi/"
              target="_blank"
              rel="noreferrer"
            >
              IndiaMart
            </a>
            <a
              href="https://www.justdial.com/Ranchi/Eurovesion-Service-Opposite-State-Election-Commission-Office-Ratu-Road/0651PX651-X651-220330225626-E9Z2_BZDET"
              target="_blank"
              rel="noreferrer"
            >
              JustDial
            </a>
          </div>
        </div>

        <div className="footer-links-col">
          <h4>Products</h4>
          <ul>
            {productLinks.map((p) => (
              <li key={p}>
                <a href="#products">{p}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#why-us">Why Choose Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact-col">
          <h4>Contact</h4>
          <p>
            📍 Shop No. 04, Prathna Height, Opp. State Election Commission, Ratu
            Road, Ranchi – 834001
          </p>
          <p>
            📞 <a href="tel:+919845212321">+91 98452 12321</a>
          </p>
          <p>
            📞 <a href="tel:+917942557551">+91 79425 57551</a>
          </p>
          <p>🕐 Mon–Sat: 9:30 AM – 6:00 PM</p>
          <p>🏛️ GST: 20BHCPP4020R1ZE</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Eurovesion Systems, Ranchi. All rights reserved.</p>
        <p>
          Designed with ❤️ for the best cash handling experience in Jharkhand.
        </p>
      </div>
    </footer>
  );
}
