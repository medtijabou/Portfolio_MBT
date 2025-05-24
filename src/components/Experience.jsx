import React, { useEffect, useRef, useState } from "react";

const experiences = [
  { date: "09.2017 - 04.2024", title: "SSIAP 1 / SSIAP 2", company: "ONET MAIN SÉCURITÉ" },
  { date: "04.2017 - 12.2017", title: "SSIAP 1", company: "ARCOSUR" },
  { date: "04.2017 - 08.2017", title: "Agent de sécurité / SSIAP 1", company: "EDA SÉCURITÉ" },
  { date: "12.2016 - 03.2017", title: "Agent de sécurité", company: "SECURITAS MARSEILLE" },
  { date: "03.2016 - 12.2016", title: "Agent de sécurité", company: "AS2B SECURITE MARSEILLE" },
  { date: "07.2015", title: "Plombier Sanitaire", company: "NATION INTÉRIM . ID FROID" },
  { date: "05.2015", title: "Plombier Sanitaire", company: "RAS INTERIM. MAÇONNERIE" },
  { date: "04.2015", title: "Plombier Dépannage", company: "DLSI INTERIM. AQUA PLOMB" },
];

const ExperienceCard = ({ exp, side }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`experience-card ${side} ${visible ? "animate" : ""}`}
    >
      <p className="experience-date">
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
          style={{ marginRight: "5px" }}
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
        {exp.date}
      </p>
      <h3 className="experience-role">{exp.title}</h3>
      <p className="experience-company">{exp.company}</p>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Expériences Professionnelles</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            exp={exp}
            side={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
