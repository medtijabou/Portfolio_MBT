import React from "react";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          &copy; {currentYear} Mohamed Boulyou. Tous droits réservés.
        </p>
        <p className="footer-subtext">
          Construit avec React,Sass.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
