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
  const [whatsappLink, setWhatsappLink] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneRaw = personal.phone || "+91 9106976221";
    const cleanPhone = phoneRaw.replace(/\D/g, "");

    const defaultMsg = "I am interested in your profile";
    const messageParts = [];

    if (formData.name.trim()) messageParts.push(`Name: ${formData.name.trim()}`);
    if (formData.email.trim()) messageParts.push(`Email: ${formData.email.trim()}`);
    if (formData.subject.trim()) messageParts.push(`Subject: ${formData.subject.trim()}`);
    
    let textToSend = defaultMsg;
    if (formData.message.trim()) {
      textToSend = `${defaultMsg}\n\n${formData.message.trim()}`;
    }
    if (messageParts.length > 0) {
      textToSend += `\n\nDetails:\n${messageParts.join("\n")}`;
    }

    const generatedLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(textToSend)}`;
    setWhatsappLink(generatedLink);

    // Open WhatsApp in a new tab
    window.open(generatedLink, "_blank", "noopener,noreferrer");

    setIsSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 10000);
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
                <p style={{ fontWeight: 600, marginBottom: "4px" }}>Opening WhatsApp...</p>
                <p style={{ fontSize: "0.85rem", opacity: 0.95 }}>
                  If WhatsApp didn't open automatically,
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer"> click here to send message on WhatsApp</a>.
                </p>
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
                  placeholder="Your Name (Optional)"
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
                  placeholder="name@example.com (Optional)"
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
                  placeholder="How can I help you? (Optional)"
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
                  rows="5"
                  placeholder="I am interested in your profile..."
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
