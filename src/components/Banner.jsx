import React from 'react';
import BoulyouImg from '../assets/Boulyou.webp'; // chemin relatif au fichier .jsx



import { Download, Linkedin, Github } from 'lucide-react';


const HeroSimpleNoMotion = () => {
  return (
    <section id="home" className="hero-simple no-motion">
      <img
        src={BoulyouImg}
        alt="Mohamed Boulyou"
        className="hero-img"
      />
      <h1 className="hero-title">BOULYOU MOHAMED</h1>
      <p className="hero-subtitle">
        Intégrateur Web Passionné | Ex Plombier Chauffagiste & Agent de Sécurité Incendie
      </p>

      <div className="hero-buttons">
        <a
          href="https://github.com/medtijabou"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <Download size={18} /> Mes Projets
        </a>
        <a href="#contact" className="btn btn-outline">
          Contactez-moi
        </a>
      </div>

      <div className="hero-social">
        <a href="#" aria-label="Linkedin" className="social-link">
          <Linkedin size={28} />
        </a>
        <a href="#" aria-label="Github" className="social-link">
          <Github size={28} />
        </a>
      </div>
    </section>
  );
};

export default HeroSimpleNoMotion;
