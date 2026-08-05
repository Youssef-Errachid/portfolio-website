import { useReveal } from './hooks/useReveal';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Root application component.
 * Wires together all sections preserving the exact original layout.
 */
export default function App() {
  // Global scroll-reveal (runs once on mount)
  useReveal();

  return (
    <>
      <Background />
      <Navbar />
      <main className="container">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
