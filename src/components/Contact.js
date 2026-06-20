import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: 'Gudina Bogale',
    email: 'gudinabogale@gmail.com',
    subject: 'I am an electrical engineer',
    message: 'i am a web developer within deferent programming language and i have different project experience'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate form submission
      // Replace with your actual backend endpoint or email service (EmailJS, Formspree, etc.)
      console.log('Form submitted:', formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'd love to hear about your project and discuss how I can help.
              Feel free to reach out using the contact form or through my social media.
            </p>
            <div className="contact-details">
              <div className="detail-item">
                <h4>Email</h4>
                <p><a href="mailto:your.email@example.com">gudinabogale@gmail.com</a></p>
              </div>
              <div className="detail-item">
                <h4>Phone</h4>
                <p><a href="tel:+1234567890">+251 983253875</a></p>
              </div>
              <div className="detail-item">
                <h4>Location</h4>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Gudina Bogale "
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="gudinabogale@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="I an electrical engineer"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
