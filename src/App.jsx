import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
