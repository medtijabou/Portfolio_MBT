import Header from '../components/Header';
import Banner from '../components/Banner';
import About from '../components/About';
import Competence from '../components/Competence';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projtes';
import Footer from '../components/Footer';
function Home() {
  return (
    <div>
        <Header />
        <Banner />
        <About />
        <Competence />
        <Experience />
        <Education />
        <Projects />
        <Footer />
    </div>
  );
}

export default Home;
