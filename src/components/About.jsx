import React from 'react';
import './About.css';
import AboutCarousel from './AboutCarousel';

export default function About() {
  const highlights = [
    { icon: '🏆', label: 'Established', value: '2018' },
    { icon: '⭐', label: 'JustDial Rating', value: '4.8/5' },
    { icon: '👥', label: 'Customers Served', value: '500+' },
    { icon: '🛡️', label: 'GST No.', value: '20BHCPP4020R1ZE' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-content">
            <div className="section-badge">About Us</div>
            <h2 className="section-title" style={{textAlign: 'left'}}>
              Ranchi's Leading Cash Machine Dealer
            </h2>
            <p className="about-text">
              <strong>Eurovision Services</strong> (formerly Eurovision Services) is a premier dealer and retailer
              of cash handling solutions headquartered in Ranchi, Jharkhand. Founded in 2018 by
              <strong> Avay Kumar Pathak</strong>, we have been serving banks, businesses, retail stores, and
              financial institutions across the region with best-in-class machines.
            </p>
            <p className="about-text">
              We are proud to be an authorised dealer for leading brands including <strong>Maxsell</strong>,
              <strong> Godrej</strong>, and <strong>True Count</strong>. Our product range covers everything from
              simple fake note detectors to enterprise-grade note sorting machines, all backed by reliable
              after-sales service.
            </p>
            <p className="about-text">
              Located at <strong>Shop No. 04, Prathna Height, Opposite State Election Commission Office,
              Ratu Road, Ranchi – 834001</strong>, we welcome walk-in customers Monday through Saturday
              from 9:30 AM to 6:00 PM.
            </p>

            <div className="about-highlights">
              {highlights.map(h => (
                <div key={h.label} className="highlight-item">
                  <span className="highlight-icon">{h.icon}</span>
                  <div>
                    <strong>{h.value}</strong>
                    <span>{h.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-visual">
            <div className="about-card main-card">
              <div className="big-icon">🏢</div>
              <h3>Eurovision Services</h3>
              <p>Your Trusted Cash Machine Partner Since 2018</p>
              <div className="about-tags">
                <span>Authorised Dealer</span>
                <span>GST Registered</span>
                <span>After-Sales Service</span>
                <span>Home Delivery</span>
              </div>
            </div>
            <div className="about-card stat-card">
              <span className="stat-big">4.8 ⭐</span>
              <span className="stat-label">28 Reviews on JustDial</span>
            </div>
            <div className="about-card hours-card">
              <span className="hours-icon">🕐</span>
              <div>
                <strong>Mon - Sat</strong>
                <span>9:30 AM - 8:00 PM</span>
              </div>
            </div>
            <div className="main-card">
              <AboutCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
