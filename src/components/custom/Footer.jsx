import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  // Inline styles
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1.5rem',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  };

  const linkStyle = {
    color: '#ccc',
    margin: '0 1rem',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  };

  const linkHoverStyle = {
    color: '#007bff', // Primary color
  };

  const socialIconStyle = {
    color: '#ccc',
    margin: '0 0.5rem',
    transition: 'color 0.3s',
  };

  const socialIconHoverStyle = {
    color: '#007bff', // Primary color
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='flex flex-col items-center md:items-start'>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              MyResearchPal
            </h2>
            <p style={{ color: '#b0b0b0', marginBottom: '1rem' }}>
              © {new Date().getFullYear()} MyResearchPal. All rights reserved.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-4 mb-4 md:mb-0'>
            <Link to='/' style={linkStyle} activeStyle={linkHoverStyle}>
              Home
            </Link>
            <Link to='/aboutUs' style={linkStyle} activeStyle={linkHoverStyle}>
              About Us
            </Link>
            <Link to='/features' style={linkStyle} activeStyle={linkHoverStyle}>
              Features
            </Link>
            <Link to='/faq' style={linkStyle} activeStyle={linkHoverStyle}>
              FAQs
            </Link>
          </div>
          <div className='flex gap-4'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              style={socialIconStyle}
              onMouseOver={(e) => (e.currentTarget.style.color = socialIconHoverStyle.color)}
              onMouseOut={(e) => (e.currentTarget.style.color = socialIconStyle.color)}
            >
              <FaFacebook size={24} />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              style={socialIconStyle}
              onMouseOver={(e) => (e.currentTarget.style.color = socialIconHoverStyle.color)}
              onMouseOut={(e) => (e.currentTarget.style.color = socialIconStyle.color)}
            >
              <FaTwitter size={24} />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              style={socialIconStyle}
              onMouseOver={(e) => (e.currentTarget.style.color = socialIconHoverStyle.color)}
              onMouseOut={(e) => (e.currentTarget.style.color = socialIconStyle.color)}
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              style={socialIconStyle}
              onMouseOver={(e) => (e.currentTarget.style.color = socialIconHoverStyle.color)}
              onMouseOut={(e) => (e.currentTarget.style.color = socialIconStyle.color)}
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
