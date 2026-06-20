import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm a Web Developer</h1>
          <p className="hero-subtitle">Creating beautiful and functional web experiences</p>
          <p className="hero-description">
            I specialize in building modern, responsive web applications with React, JavaScript, and more.
            Let's create something amazing together.
          </p>
          
          <div className="hero-buttons">
            <Link to="projects" smooth={true} duration={500} className="btn btn-primary">
              View My Work <FaArrowRight />
            </Link>
            <Link to="contact" smooth={true} duration={500} className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>

          <div className="hero-social">
            <a href="https://github.com/gudinabogale-cloud/gudinabogale-cloud" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/gudina-bogale-524b67365?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2eoZM%2BV7Qwa06t%2B%2F%2BOBfWg%3D%3D" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="mailto:gudinabogale@gmail.com" className="social-icon">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
