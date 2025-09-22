import "./App.css";
import Header from "./components/layout/Header/Header";
import Hero from "./components/layout/Main/Hero";
import Skills from "./components/layout/Main/Skills";
import Projects from "./components/layout/Main/Projects";
import Experience from "./components/layout/Main/Experience";
import Education from "./components/layout/Main/Education";
import Contact from "./components/layout/Main/Contact";
import Footer from "./components/layout/Footer/Footer";
import ScrollToTop from "./components/layout/ScrollToTop/ScrollToTop";

import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
