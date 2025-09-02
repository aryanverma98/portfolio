

import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import './App.css'
import About from '../components/About'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import Tools from '../components/Tools'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


function App() {


  return (
    <>
     
       <Navbar />
       <HeroSection />
       <About />
       <ProjectsSection />
       <SkillsSection />
       <Tools />
       <Education />
       <Contact />
       <Footer />
     
    </>
  )
}

export default App
