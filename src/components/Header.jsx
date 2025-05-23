import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          MB / Portfolio
        </Link>
        <div className="nav-links">
          <Link to="/about">À Propos</Link>
          <Link to="/skills">Compétences</Link>
          <Link to="/experience">Expériences</Link>
          <Link to="/education">Formation</Link>
          <Link to="/projects">Projets</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
