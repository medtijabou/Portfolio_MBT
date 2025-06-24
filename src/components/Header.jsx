import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      <nav className="navbar">
        <div
          className="logo"
          onClick={() => {
            scroll.scrollToTop({ duration: 500 });
            closeMenu();
          }}
        >
          M&S <img src="/assets/robotic.webp" className="logo-robot" alt="logo-de-site" /> tecnologia
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ScrollLink to="about" smooth={true} duration={500} onClick={closeMenu}>À Propos</ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={500} onClick={closeMenu}>Compétences</ScrollLink>
          <ScrollLink to="experience" smooth={true} duration={500} onClick={closeMenu}>Expériences</ScrollLink>
          <ScrollLink to="education" smooth={true} duration={500} onClick={closeMenu}>Formation</ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} onClick={closeMenu}>Projets</ScrollLink>
        </div>

        <button className="burger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
