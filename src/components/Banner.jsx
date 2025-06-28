import React from 'react';
import { Download, LinkedinIcon, GithubIcon } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll'; // ✅ Import du composant ScrollLink

const HeroSimpleNoMotion = () => {
  return (
    <section id="top" className="hero-simple no-motion">
      <img
        src="assets/Boulyou.webp"
        alt="Mohamed Boulyou"
        className="hero-img"
      />

      <h1 className="hero-title">BOULYOU MOHAMED</h1>
      <p className="hero-subtitle">
        Intégrateur Web Passionné | Ex Plombier Chauffagiste & Agent de Sécurité Incendie
      </p>

      <div className="hero-buttons">
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="btn btn-primary" // ✅ Classe ajoutée
        >
          <Download size={18} style={{ marginRight: "8px" }} />
          Mes Projets
        </ScrollLink>

        <a
          href="mailto:contact@mstecnologia.fr?subject=Contact%20depuis%20portfolio&body=Bonjour%20Mohamed,%0AJe%20souhaite%20vous%20contacter%20à%20propos%20de..."
          className="btn btn-outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactez-moi
        </a>
      </div>

      <div className="hero-social">
        <a
          href="https://www.linkedin.com/in/ton-profil-linkedin" // ✅ À remplacer par ton vrai lien LinkedIn
          aria-label="LinkedIn"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon size={28} />
        </a>

        <a
          href="https://github.com/medtijabou"
          aria-label="GitHub"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon size={28} />
        </a>
      </div>
    </section>
  );
};

export default HeroSimpleNoMotion;
