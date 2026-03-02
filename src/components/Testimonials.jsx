import React from 'react';
import './Testimonials.css';

const reviews = [
  {
    name: 'Rajesh Kumar',
    role: 'Bank Manager, SBI Ranchi',
    text: 'We purchased Maxsell bundle note counting machines for our branch. The quality is excellent and the after-sales support from Eurovesion is outstanding. Highly recommended!',
    stars: 5
  },
  {
    name: 'Preeti Sharma',
    role: 'Retail Store Owner',
    text: 'Got a mix value note counting machine for my shop. Very happy with the product and the service. The team guided me perfectly in choosing the right machine.',
    stars: 5
  },
  {
    name: 'Amit Singh',
    role: 'Petrol Pump Owner',
    text: "Purchased a Godrej currency counting machine. It's fast, accurate, and the fake note detection is excellent. Eurovesion gave me the best price in Ranchi.",
    stars: 5
  },
  {
    name: 'Sunita Devi',
    role: 'Jewellery Shop, Ranchi',
    text: 'Very professional service. The machine was delivered and set up the same day. They also explained how to use it properly. Will buy again for my other branch.',
    stars: 5
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-badge">Reviews</div>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-sub">Rated 4.8/5 on JustDial with 28+ verified reviews from satisfied customers.</p>
        </div>

        <div className="reviews-grid">
          {reviews.map(r => (
            <div key={r.name} className="review-card">
              <div className="stars">{'⭐'.repeat(r.stars)}</div>
              <p className="review-text">"{r.text}"</p>
              <div className="reviewer">
                <div className="reviewer-avatar">{r.name[0]}</div>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="review-summary">
          <div className="summary-stat">
            <strong>4.8</strong>
            <div className="stars-large">⭐⭐⭐⭐⭐</div>
            <span>28 Verified Reviews</span>
          </div>
          <a href="https://www.justdial.com/Ranchi/Eurovesion-Service-Opposite-State-Election-Commission-Office-Ratu-Road/0651PX651-X651-220330225626-E9Z2_BZDET" target="_blank" rel="noreferrer" className="jd-link">
            View on JustDial →
          </a>
        </div>
      </div>
    </section>
  );
}
