import React, { useRef, useState, useEffect } from 'react';

const ProjectsCarousel = ({ projects }) => {
  const carouselRef = useRef(null);
  const [angle, setAngle] = useState(0);
  const [hasScrolledIn, setHasScrolledIn] = useState(false);
  const itemCount = projects.length;
  const angleStep = 360 / itemCount;

  const rotateCarousel = () => {
    setAngle((prev) => prev + angleStep);
  };

  const manualRotate = (direction) => {
    setAngle((prev) => prev + (direction === 'left' ? -angleStep : angleStep));
  };

  const handleScroll = () => {
    if (!carouselRef.current || hasScrolledIn) return;
    const rect = carouselRef.current.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    setHasScrolledIn(true);
    rotateCarousel();
  }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasScrolledIn]);

  return (
    <section id="projects" className="carousel-section">
      <h2 className="carousel-title">Mes Projets</h2>
      <div className="carousel-wrapper">
        <div
          className="carousel"
          ref={carouselRef}
          style={{ transform: `translateZ(-400px) rotateY(${angle}deg)` }}
        >
          {projects.map((project, index) => (
            <div
              className="carousel-item"
              key={project.id}
              style={{
                transform: `rotateY(${index * angleStep}deg) translateZ(400px)`
              }}
            >
             <img src={project.imageUrl} alt={project.title} className="project-image" />
  <h3>{project.title}</h3>
  <p>{project.description}</p>
  <a href={project.link} target="_blank" rel="noreferrer">
    Voir le projet
  </a>
            </div>
          ))}
        </div>
        <div className="controls">
          <button onClick={() => manualRotate('left')}>◀</button>
          <button onClick={() => manualRotate('right')}>▶</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
