import './App.css'
import Header from './components/Header/Header';
import Hero from './components/Main/Hero';
import Skills from './components/Main/Skills';
import Projects from './components/Main/Projects';
import Experience from './components/Main/Experience';
import Education from './components/Main/Education';
import Contact from './components/Main/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Education/>
      <Contact/>
    </>
  )
}

export default App
