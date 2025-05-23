import React from "react";
import { Wrench, Flame, Code, Languages, CheckCircle } from "lucide-react";


const skillsData = {
  webDevelopment: {
    title: "Développement Web",
    icon: <Code className="icon" />,
    skills: [
      "HTML5",
      "CSS3",
      "Sass",
      "JavaScript (ES6+)",
      "React",
      "React Router",
      "Redux",
      "API REST",
      "SEO",
      "Accessibilité",
      "Responsive Design",
      "Git/GitHub",
      "Figma (bases)",
    ],
  },
  plumbingHeating: {
    title: "Plomberie & Chauffage",
    icon: <Wrench className="icon" />,
    skills: [
      "Installation et réparation chauffage central",
      "Chaudières",
      "Radiateurs",
      "Systèmes de plomberie (toilettes, éviers, douches)",
      "Soudure",
      "Raccordement tuyauterie",
    ],
  },
  fireSafety: {
    title: "Sécurité Incendie",
    icon: <Flame className="icon" />,
    skills: [
      "SSIAP 1 & 2",
      "Manipulation SSI",
      "Vérification extincteurs et R.I.A",
      "Rondes de sécurité",
      "Vidéosurveillance",
      "Contrôle d’accès",
    ],
  },
  other: {
    title: "Autres Compétences",
    icon: <CheckCircle className="icon" />,
    skills: [
      "Lecture de plan",
      "Travail autonome et en équipe",
      "Connaissance des réglementations de sécurité",
    ],
  },
  languages: {
    title: "Langues",
    icon: <Languages className="icon" />,
    skills: ["Français (Courant)", "Espagnol (Courant)", "Catalan (Courant)", "Arabe (Courant)"],
  },
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Mes Compétences</h2>
      <div className="skills-grid">
        {Object.values(skillsData).map((category, idx) => (
          <div key={idx} className="skills-card">
            <div className="skills-header">
              {category.icon}
              <h3 className="skills-category">{category.title}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, index) => (
                <span key={index} className="skills-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
