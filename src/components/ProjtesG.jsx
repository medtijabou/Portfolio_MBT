import projectsData from '../Data/projects-data';
import React, { useState, useEffect, useCallback, useRef } from 'react';
// ...

const ProjectsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(window.innerWidth <= 768 ? 220 : 275);
  const ITEM_GAP_PX = 32;
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Resize
  useEffect(() => {
    const handleResize = () => {
      setItemWidth(window.innerWidth <= 768 ? 220 : 275);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Swipe logique
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50; // px

    if (distance > threshold) {
      next();
    } else if (distance < -threshold) {
      prev();
    }
  };

  // prev / next
  const prev = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  }, []);

  const next = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const getTransformStyle = (index) => {
    const total = projectsData.length;
    let position = index - activeIndex;

    if (position > total / 2) {
      position -= total;
    } else if (position < -total / 2) { 
      position += total;
    }

    const transformXValue = position * (itemWidth + ITEM_GAP_PX);
    const distance = Math.abs(position);

    let scale = 1, opacity = 1, zIndex = 5;

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
      opacity,
      zIndex,
      pointerEvents: distance <= 2 ? 'auto' : 'none',
    };
  };

  return (
    <section className="carousel-section" id="projects">
      <h2 className="carousel-title">Mes Projets</h2>
      <div
        className="carousel-wrapper"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="carousel">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
              style={{
                ...getTransformStyle(index),
                transition: 'transform 0.5s ease, opacity 0.5s ease, z-index 0.5s ease',
                width: `${itemWidth}px`,
              }}
              role="group"
              aria-label={`${project.title} - Projet ${index + 1} sur ${projectsData.length}`}
            >
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer noopener">
                Voir le projet
              </a>
            </div>
          ))}
        </div>

        {/* Contrôles visibles que sur desktop */}
        <div className="controls">
          <button onClick={prev} aria-label="Projet précédent">&#9664;</button>
          <button onClick={next} aria-label="Projet suivant">&#9654;</button>
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
