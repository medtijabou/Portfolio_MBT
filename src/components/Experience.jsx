import React from 'react';
import { Calendar } from "lucide-react";

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

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Expériences Professionnelles</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`experience-card ${index % 2 === 0 ? "right" : "left"}`}
          >
            <p className="experience-date">
  <span className="calendar-icon" dangerouslySetInnerHTML={{ __html: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
  ` }} />
  {exp.date}
</p>


            <h3 className="experience-role">{exp.title}</h3>
            <p className="experience-company">{exp.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
