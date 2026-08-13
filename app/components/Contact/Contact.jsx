"use client";

import { useState } from "react";
import personal from "../../../data/personal";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate contact submission
    console.log("Contact request submitted:", formData);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    // Reset submission confirmation alert after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-container">
        <h2 className="section-title reveal reveal-up">Get In Touch</h2>
        
        <div className="contact-layout">
          <div className="contact-info reveal reveal-left delay-1">
            <h3 className="info-title">Let's Connect</h3>
            <p className="info-text">
              I am open to new opportunities, collaborations, or just having a chat about web development. Feel free to reach out using the form or connect through my social profiles.
            </p>
            
            <div className="info-details">
              {personal.email && (
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <a href={`mailto:${personal.email}`} className="info-link">
                    {personal.email}
                  </a>
                </div>
              )}
              {personal.phone && (
                <div className="info-item">
                  <span className="info-label">Phone:</span>
                  <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="info-link">
                    {personal.phone}
                  </a>
                </div>
              )}
              {personal.location && (
                <div className="info-item">
                  <span className="info-label">Location:</span>
                  <span className="info-value">{personal.location}</span>
                </div>
              )}
            </div>
          </div>

          <div className="contact-form-wrapper reveal reveal-right delay-2">
            {isSubmitted && (
              <div className="form-success-alert" role="alert">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="name@example.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can I help you?"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your message details..."
                  className="form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="form-submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
