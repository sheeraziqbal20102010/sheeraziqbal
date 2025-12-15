import React from 'react';
import { Navbar, Footer } from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Courses, Testimonials } from './components/AdditionalSections';
import Contact from './components/Contact';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-tech-bg text-tech-text font-sans selection:bg-tech-accent/30 transition-colors duration-300">
      <ThemeToggle />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Courses />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;