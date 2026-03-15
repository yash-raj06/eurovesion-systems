import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-shape shape1"></div>
        <div className="hero-shape shape2"></div>
        <div className="hero-shape shape3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-badge">
          <span>🏆</span> Trusted by 500+ Businesses in Jharkhand
        </div>

        <h1 className="hero-title">
          Precision Cash Handling
          <span className="hero-highlight"> Solutions</span>
          <br />for Every Business
        </h1>

        <p className="hero-desc">
          Ranchi's most trusted dealer for note counting machines, fake note detectors,
          coin sorting machines, and more. Authorised dealer for Maxsell, Godrej & leading brands.
        </p>

        <div className="hero-stats">
          <div className="hero-stat">
            <strong>500+</strong>
            <span>Happy Customers</span>
          </div>
          <div className="stat-divider"></div>
          <div className="hero-stat">
            <strong>7+</strong>
            <span>Years Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="hero-stat">
            <strong>20+</strong>
            <span>Product Variants</span>
          </div>
          <div className="stat-divider"></div>
          <div className="hero-stat">
            <strong>4.8★</strong>
            <span>Rated on JustDial</span>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#products" className="btn-primary">Explore Products</a>
          <a href="#contact" className="btn-secondary">
            <span>📞</span> Call Now: +91 82107 23030
          </a>
        </div>

        <div className="hero-brands">
          <span>Authorised Dealer:</span>
          <div className="brand-tags">
            <span>Maxsell</span>
            <span>Godrej</span>
            <span>True Count</span>
          </div>
        </div>
      </div>
    </section>
  );
}
