import React from "react";

const projects = [
  {
    id: "P2",
    title: "Premiers pas sur le langage HTML",
    description: "Démarrez sur HTML et CSS en analysant et en complétant une page internet.",
    duration: "20 heures supervisées",
    imageUrl: "Projet HTML CSS de base",
    link: "https://github.com/medtijabou/cityopen"
  },
  {
    id: "P3",
    title: "Créez la page d'accueil d'une agence de voyage avec HTML & CSS",
    description: "Intégrez la page Web de Booki, une plateforme de réservation de vacances.",
    duration: "80 heures supervisées",
    imageUrl: "Page d'accueil agence de voyage Booki",
    link: "https://github.com/medtijabou/p_3_boooki"
  },
  {
    id: "P4",
    title: "Améliorez l'interface d'un site mobile avec des animations CSS",
    description: "Implémentez le site d’une foodtech en mobile first et ses animations CSS avec Sass.",
    duration: "60 heures supervisées",
    imageUrl: "Site mobile foodtech avec animations CSS",
    link: "https://github.com/medtijabou/ohmyfood_projet4"
  },
  {
    id: "P5",
    title: "Premiers pas sur le langage JavaScript",
    description: "Réalisez le carrousel du site Internet d’une imprimerie avec JavaScript.",
    duration: "20 heures supervisées",
    imageUrl: "Carrousel JavaScript pour imprimerie",
    link: "https://github.com/medtijabou/print_it_projet_5"
  },
  {
    id: "P6",
    title: "Créez une page web dynamique avec JavaScript",
    description: "Créez un site dynamique avec JavaScript, communiquant avec une API pour une architecte.",
    duration: "60 heures supervisées",
    imageUrl: "Site web dynamique JavaScript avec API",
    link: "https://github.com/medtijabou/P6_sophie_bluel"
  },
  {
    id: "P7",
    title: "Créez une application web de location immobilière avec React",
    description: "Implémentez le front end de Kasa avec React et React Router.",
    duration: "60 heures supervisées",
    imageUrl: "Application React Kasa location immobilière",
    link: "https://github.com/medtijabou/P7_Kasa"
  },
  {
    id: "P8",
    title: "Optimisez le référencement d'un site de photographe",
    description: "Optimisation SEO et accessibilité pour un site de photographe.",
    duration: "40 heures supervisées",
    imageUrl: "Optimisation SEO site photographe",
    link: "https://github.com/medtijabou/P8_Nina_Carduccii"
  },
  {
    id: "P9",
    title: "Débuggez le site d'une agence d'événementiel",
    description: "Débuggage du site de l’agence 724events.",
    duration: "60 heures supervisées",
    imageUrl: "Débuggage site agence 724events",
    link: "https://github.com/medtijabou/P_9_Debuggez"
  },
  {
    id: "P10",
    title: "Implémentez le front-end d'une application bancaire avec React",
    description: "Complétez Argent Bank avec React et Redux, appels API REST.",
    duration: "80 heures supervisées",
    imageUrl: "Application bancaire React Argent Bank",
    link: "https://github.com/medtijabou/Projet_p10_Argent_Bank"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="projects-title">Mes Projets OpenClassrooms</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1674027392842-29f8354e236c"
                  alt={project.title}
                />
                <div className="project-title-overlay">{project.title}</div>
              </div>
              <div className="project-content">
                <p className="project-description">{project.description}</p>
                <div className="project-duration">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 mr-1.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {project.duration}
                </div>
              </div>
              <a
                href={project.link}
                className="project-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le projet
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
