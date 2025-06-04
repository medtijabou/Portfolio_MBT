import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

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
    <header >
      <nav className="navbar">
      <a
  href="#top"
  className="logo"
  onClick={() => {

    window.scrollTo({ top:0, behavior: 'smooth' });
  }}
>
  MB / Portfolio
</a>



        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#about" onClick={closeMenu}>À Propos</a>
          <a href="#skills" onClick={closeMenu}>Compétences</a>
          <a href="#experience" onClick={closeMenu}>Expériences</a>
          <a href="#education" onClick={closeMenu}>Formation</a>
          <a href="#projects" onClick={closeMenu}>Projets</a>
        </div>

        <button className="burger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
