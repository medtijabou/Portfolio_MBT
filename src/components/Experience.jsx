import React from 'react';


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
          <div key={index} className="experience-card">
            <p className="experience-date">{exp.date}</p>
            <h3 className="experience-role">{exp.title}</h3>
            <p className="experience-company">{exp.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
