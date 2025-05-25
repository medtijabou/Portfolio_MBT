import Header from '../components/Header';
import Banner from '../components/Banner';
import About from '../components/About';
import Competence from '../components/Competence';
import Experience from '../components/Experience';
import Education from '../components/Education';
import ProjectsG from '../components/ProjtesG';
import projects from '../Data/projects-data';
import Footer from '../components/Footer';
function Home() {
  return (
    <main>
        <Header />
        <Banner />
        <About />
        <Competence />
        <Experience />
        <Education />
        <ProjectsG projects={projects} />
        <Footer />
    </main>
  );
}

export default Home;
