import React from 'react';

import { Download,LinkedinIcon, GithubIcon  } from 'lucide-react';


const HeroSimpleNoMotion = () => {
  return (
    <section id='top' className="hero-simple no-motion">
       <img src="assets/Boulyou.webp" 
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
        <a href="mailto:contact@mstecnologia.fr?subject=Contact%20depuis%20portfolio&body=Bonjour%20Mohamed,%0AJe%20souhaite%20vous%20contacter%20à%20propos%20de..." className="btn btn-outline">
          Contactez-moi
        </a>
      </div>

      <div className="hero-social">
       <a href="https://www.instagram.com/medojosverdes/" aria-label="Instagram" className="social-link" target="_blank">
  <LinkedinIcon size={28} />
</a>

<a href="https://github.com/medtijabou" aria-label="Github" className="social-link" target="_blank">
  <GithubIcon size={28} />
</a>

      </div>
    </section>
  );
};

export default HeroSimpleNoMotion;
