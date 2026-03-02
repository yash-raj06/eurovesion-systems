import React from 'react';
import './WhyUs.css';

const features = [
  {
    icon: '🏅',
    title: 'Authorised Dealer',
    desc: 'Official dealer for Maxsell, Godrej & True Count. Get genuine products with manufacturer warranty.'
  },
  {
    icon: '🔧',
    title: 'After-Sales Service',
    desc: 'Dedicated repair and maintenance service for all machines. Quick turnaround, minimal downtime.'
  },
  {
    icon: '💰',
    title: 'Competitive Pricing',
    desc: 'Best prices in Ranchi. From budget-friendly ₹1,600 detectors to enterprise ₹3,15,000 sorters.'
  },
  {
    icon: '🚀',
    title: 'Fast Delivery',
    desc: 'Same-day delivery in Ranchi. Home and office delivery available across Jharkhand.'
  },
  {
    icon: '📞',
    title: '7-Day Support',
    desc: 'Available all 7 days from 9:30 AM to 6:00 PM. WhatsApp support also available.'
  },
  {
    icon: '🎓',
    title: 'Expert Guidance',
    desc: 'Our experienced team helps you choose the right machine for your specific business needs.'
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="whyus-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-badge">Why Choose Us</div>
          <h2 className="section-title">The Eurovision Advantage</h2>
          <p className="section-sub">Thousands of businesses in Jharkhand trust us for their cash handling needs.</p>
        </div>

        <div className="features-grid">
          {features.map(f => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="cta-banner">
          <div className="cta-content">
            <h3>Ready to upgrade your cash handling?</h3>
            <p>Get a free consultation and the best price quote from our experts today.</p>
          </div>
          <div className="cta-actions">
            <a href="#contact" className="btn-primary">Contact Us Now</a>
            <a href="tel:+919845212321" className="btn-outline">📞 Call: +91 98452 12321</a>
          </div>
        </div>
      </div>
    </section>
  );
}
