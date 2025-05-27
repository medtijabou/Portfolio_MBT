import React, { useState, useCallback } from 'react';

import projectsData from '../Data/projects-data';

const ProjectsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const ITEM_WIDTH = 275;
  const ITEM_GAP_PX = 32;

  const prev = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectsData.length]);

  const next = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectsData.length]);

  // ANCIEN CODE POUR LE DÉFILEMENT AUTOMATIQUE (À SUPPRIMER OU COMMENTER)
  /*
  useEffect(() => {
    const autoScroll = setInterval(() => {
      next();
    }, 5000); // Change de projet toutes les 5 secondes
    return () => clearInterval(autoScroll); // Nettoie le timer quand le composant est démonté
  }, [next]);
  */

  // LAISSEZ TOUT LE RESTE DU CODE INCHANGÉ
  const getTransformStyle = (index) => {
    const total = projectsData.length;
    let position = index - activeIndex;

    if (position > total / 2) {
      position -= total;
    } else if (position < -total / 2) {
      position += total;
    }

    const transformXValue = position * (ITEM_WIDTH + ITEM_GAP_PX);
    const distance = Math.abs(position);

    let scale = 1;
    let opacity = 1;
    let zIndex = 5;

    if (distance === 0) {
      scale = 1.1;
      zIndex = 10;
    } else if (distance === 1) {
      scale = 0.9;
      opacity = 0.8;
      zIndex = 7;
    } else if (distance === 2) {
      scale = 0.7;
      opacity = 0.5;
      zIndex = 6;
    } else {
      scale = 0;
      opacity = 0;
      zIndex = 1;
    }

    return {
      transform: `translateX(${transformXValue}px) scale(${scale})`,
      opacity: opacity,
      zIndex: zIndex,
      pointerEvents: distance <= 2 ? 'auto' : 'none',
    };
  };

  return (
    <section className="carousel-section" aria-live="polite" aria-label="Carrousel de projets">
      <h2 className="carousel-title">Mes Projets</h2>
      <div className="carousel-wrapper">
        <div className="carousel">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
              style={{
                ...getTransformStyle(index),
                transition: 'transform 0.5s ease, opacity 0.5s ease, z-index 0.5s ease',
              }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${project.title} - Projet ${index + 1} sur ${projectsData.length}`}
            >
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer noopener" aria-label={`Voir le projet ${project.title}`}>
                Voir le projet
              </a>
            </div>
          ))}
        </div>
        <div className="controls">
          <button onClick={prev} aria-label="Projet précédent">
            &#9664; {/* Flèche gauche */}
          </button>
          <button onClick={next} aria-label="Projet suivant">
            &#9654; {/* Flèche droite */}
          </button>
        </div>
      </div>
      <div className="carousel-pagination">
        {projectsData.map((_, index) => (
          <button
            key={index}
            className={`pagination-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Aller au projet ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsCarousel;