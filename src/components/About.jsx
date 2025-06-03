import React, { useEffect, useState } from "react";
import { User, Mail, Phone, MapPin, Calendar, ShieldCheck } from "lucide-react";

const About = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(true);
      window.removeEventListener("scroll", handleScroll); // une seule fois
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const personalInfo = [
    {
      icon: <MapPin className="icon" />,
      label: "Adresse",
      value: "9 Impasse collet 13, Marseille 3eme",
    },
    {
      icon: <Mail className="icon" />,
      label: "E-mail",
      value: "Tijarim7@gmail.com",
    },
    {
      icon: <Phone className="icon" />,
      label: "Téléphone",
      value: "06-58-93-85-80",
    },
    {
      icon: <Calendar className="icon" />,
      label: "Date de Naissance",
      value: "27/10/1986",
    },
    { icon: <ShieldCheck className="icon" />, label: "Permis", value: "B" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="title">À Propos de Moi</h2>
        <div className="card">
          <h3 className={`info-perso ${scrolled ? "slide-in" : ""}`}>
            <User className="title-icon" />
            Informations Personnelles
          </h3>

          <div className="info-list">
            {personalInfo.map((item, i) => (
              <div
                key={i}
                className={`info-item ${scrolled ? "slide-in" : ""}`}
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <span className="icon">{item.icon}</span>
                <div>
                  <p className="label">{item.label}:</p>
                  <p className="value">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="description">
            Fort d'une expérience diversifiée en plomberie, chauffage et sécurité incendie,
            j'ai récemment réorienté ma carrière vers le développement web. Diplômé Intégrateur Web
            (Bac+2) chez OpenClassrooms, je suis passionné par la création d'interfaces utilisateur
            dynamiques et performantes avec React et les technologies modernes du web. Je suis
            motivé, autonome et prêt à relever de nouveaux défis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
