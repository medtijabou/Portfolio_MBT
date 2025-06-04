import React, { useEffect, useRef } from "react";

const formations = [
  {
    date: "Obtenu récemment",
    title: "Intégrateur Web (Bac+2)",
    institution: "OpenClassrooms",
    details: "Formation complète axée sur HTML, CSS, JavaScript, React, SEO, et gestion de projet.",
  },
  {
    date: "12.2013 - 09.2014",
    title: "CAP Installateur Thermique et Sanitaire (I.T.S)",
    institution: "L’AFPA MARSEILLE",
  },
  {
    date: "04.2016",
    title: "S.S.I.A.P.1",
    institution: "I.N.F.S MARSEILLE",
  },
  {
    date: "03.2016",
    title: "Agent de Sécurité Mobile",
    institution: "I.N.F.S MARSEILLE",
  },
];

const Education = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".education-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Quand le container est visible, on lance l'animation cascade
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-shadow");
              }, index * 300);
            });

            // Optionnel: retirer l'animation après 3 secondes
            setTimeout(() => {
              cards.forEach((card) => {
                card.classList.remove("animate-shadow");
              });
            }, 2000);

            // Une fois déclenché, on peut déconnecter l'observer
            observer.disconnect();
          }
        });
      },
      {
        threshold: 1, 
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
     

      <section id="education" className="education-section" ref={containerRef}>
        <h2 className="education-title">Formation</h2>
        <div className="education-grid">
          {formations.map((formation, index) => (
            <div key={index} className="education-card">
              <div className="card-header">
                <h3 className="card-title">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 mr-3"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                  {formation.title}
                </h3>
                <div className="card-date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                    <path d="M8 14h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 18h.01"></path>
                    <path d="M12 18h.01"></path>
                    <path d="M16 18h.01"></path>
                  </svg>
                  {formation.date}
                </div>
                <div className="card-institution">{formation.institution}</div>
              </div>
              {formation.details && <p className="card-details">{formation.details}</p>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Education;
