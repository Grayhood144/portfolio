import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Grayson Zrelak</p>
    </footer>
  );
};

export default Footer;