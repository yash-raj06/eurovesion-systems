import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', product: '', message: '', budget: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const productOptions = [
    'Currency Counting Machine',
    'Bundle Note Counting Machine',
    'Mix Value Note Counting Machine',
    'Manual Note Counting Machine',
    'Fake Note Detector',
    'Coin Sorting Machine',
    'Note Sorting Machine',
    'Weighing Scale',
    'Other / Not Sure',
  ];

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="success-card">
            <div className="success-icon">✅</div>
            <h3>Enquiry Sent Successfully!</h3>
            <p>Thank you, <strong>{form.name}</strong>! We'll get back to you within 24 hours on {form.phone || form.email}.</p>
            <p className="success-note">For immediate assistance, call us at <strong>+91 98452 12321</strong></p>
            <button onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',product:'',message:'',budget:'' }); }} className="reset-form-btn">
              Send Another Enquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-badge">Contact Us</div>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-sub">Fill out the form below or reach us directly. We respond within 2 hours.</p>
        </div>

        <div className="contact-grid">
          {/* Info Cards */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div>
                <h4>Our Location</h4>
                <p>Shop No. 04, Prathna Height,<br/>Opp. State Election Commission Office,<br/>Ratu Road, Ranchi – 834001<br/>Jharkhand, India</p>
                <a href="https://maps.google.com/?q=State+Election+Commission+Ratu+Road+Ranchi" target="_blank" rel="noreferrer" className="info-link">Get Directions →</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <div>
                <h4>Phone / WhatsApp</h4>
                <a href="tel:+919845212321" className="info-link big">+91 98452 12321</a>
                <a href="tel:+917942557551" className="info-link">+91 79425 57551</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🕐</div>
              <div>
                <h4>Business Hours</h4>
                <p>Monday – Saturday<br/>9:30 AM – 6:00 PM</p>
                <p className="info-note">Sunday: 9:30 AM – 6:00 PM</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🏛️</div>
              <div>
                <h4>Company Info</h4>
                <p>GST: 20BHCPP4020R1ZE</p>
                <p>Proprietor: Avay Kumar Pathak</p>
                <p>Est. 2018 | Jharkhand</p>
              </div>
            </div>

            <div className="quick-actions">
              <a href="https://wa.me/919845212321?text=Hi%2C%20I%20am%20interested%20in%20your%20machines" target="_blank" rel="noreferrer" className="wa-btn">
                💬 WhatsApp Us Now
              </a>
              <a href="tel:+919845212321" className="call-btn">📞 Call Now</a>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="form-card">
            <h3 className="form-title">Send an Enquiry</h3>
            <p className="form-sub">We'll contact you with the best price for your requirement.</p>
            <form onSubmit={handleSubmit} className="enquiry-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" name="name" required placeholder="Your name" value={form.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Product Interested In</label>
                  <select name="product" value={form.product} onChange={handleChange}>
                    <option value="">Select product type</option>
                    {productOptions.map(p => <option key={p}>{p}</option>)}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Budget Range</label>
                <select name="budget" value={form.budget} onChange={handleChange}>
                  <option value="">Select budget (optional)</option>
                  <option>Under ₹5,000</option>
                  <option>₹5,000 – ₹20,000</option>
                  <option>₹20,000 – ₹50,000</option>
                  <option>₹50,000 – ₹1,00,000</option>
                  <option>Above ₹1,00,000</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message / Requirements</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us your requirements, quantity needed, business type..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Enquiry 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
