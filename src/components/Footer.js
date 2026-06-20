import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfolio</h3>
            <p>Building beautiful and functional web experiences for clients worldwide.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="#projects">Web Development</a></li>
              <li><a href="#projects">App Development</a></li>
              <li><a href="#projects">UI/UX Design</a></li>
              <li><a href="#projects">Consulting</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Follow Me</h3>
            <div className="social-links">
              <a href="https://github.com/gudinabogale-cloud/gudinabogale-cloud" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/gudina-bogale-524b67365?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2eoZM%2BV7Qwa06t%2B%2F%2BOBfWg%3D%3D" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="mailto:gudinabogale@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
          <p>Made with React • Deployed on Netlify</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
