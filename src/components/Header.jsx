import { useEffect } from 'react';

function Navbar() {
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

  return (
    <header>
      <nav>
        <a href="#home" className="logo">
          MB / Portfolio
        </a>
        <div className="nav-links">
          <a href="#about">À Propos</a>
          <a href="#skills">Compétences</a>
          <a href="#experience">Expériences</a>
          <a href="#education">Formation</a>
          <a href="#projects">Projets</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
