import React from "react"
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Components/About/about"
import TechStack from "./Components/techStack/techstack"
import WorkExperience from "./Components/WorkExperince/workexp";
import Projects from "./Components/Projects/project";
import Education from "./Components/Education/education"
import Contact from "./Components/Contacts/contact";
import ScrollToTop from "react-scroll-to-top";
import NavbarMobileView from "./Components/Sidebar/NavbarMobileview";
import "./App.css";

const App=()=>{
  return (
    <>
    <NavbarMobileView />
    <Sidebar />
    <About />
    <WorkExperience />
    <TechStack />
    <Education />
    <Projects /> 
    <Contact />

    <ScrollToTop smooth color="white" height="20" width="20" style={{borderRadius:"90px",  backgroundColor:"#38004C"}}/>
    </>
  )
}

export default App;