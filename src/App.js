import React from "react";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Services from "./pages/services/Services";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import LatestProject from "./pages/projects/LatestProject";
import About from "./pages/about/About";
import MoreProjects from "./pages/projects/MoreProjects";

const App = () => {
  return (
    <div className="app">
  
      <div className="app_main">
  
   <Navbar />

          <div id="home">
            <LatestProject />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="projects">
           
            <MoreProjects />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
  );
};

export default App;
