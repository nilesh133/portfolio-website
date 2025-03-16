import React, { useEffect, useRef, useState } from 'react';
import "./styles/globalStyle.css";
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ShortDescription from './components/ShortDescription/ShortDescription';
import About from './components/About/About';
import Benefits from './components/Benefits/Benefits';
import Skills from './components/Skills/Skills';
import ServicesSectionMain from './components/ServicesSection/ServicesSectionMain/ServicesSectionMain';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import ServicesSectionTempMain from './components/ServicesSectionTemp/ServicesSectionTempMain';
import ServicesSectionTwoMain from './components/ServicesSectionTwo/ServicesSectionTwoMain/ServicesSectionTwoMain';
import HeroTwo from './components/HeroTwo/HeroTwo';
import TextMover from './components/TextMover/TextMover';
import ExperienceMain from './Experience/ExperienceMain/ExperienceMain';
import ProjectsMain from './components/Projects/ProjectsMain/ProjectsMain';
import HeroThree from './components/HeroThree/HeroThree';
import ExperienceTwo from './components/ExperienceTwo/ExperienceTwo';
import ServicesThreeMain from './components/ServicesThree/ServicesThreeMain/ServicesThreeMain';
import Footer from './components/Footer/Footer';
import SkillsTwo from './components/SkillsTwo/SkillsTwo';
import SkillsTwoMain from './components/SkillsTwo/SkillsTwoMain/SkillsTwoMain';
import ExperienceTwoHeader from './components/ExperienceTwo/ExperienceTwoHeader/ExperienceTwoHeader';
import ProjectsTwo from './components/ProjectsTwo/ProjectsTwo';
import LoadingScreenTwo from './components/LoadingScreenTwo/LoadingScreenTwo';
import { AnimatePresence } from 'framer-motion';
import StickyCursor from './components/StickyCursor/StickyCursor';

const App = () => {

  const [loadingComplete, setLoadingComplete] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  // const stickyElement = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      smoothTouch: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section.id;
        }
      });

      if (currentSection && currentSection !== activeSection) {
        console.log("New active section:", currentSection); // Debugging
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);



  return (
    <>


      <AnimatePresence mode='wait'>
        {!loadingComplete && <LoadingScreenTwo setLoadingComplete={setLoadingComplete} />}
      </AnimatePresence>
      {loadingComplete && <div className='p_main'>
        <div className='p_main_container'>
          <div className='p_main_item'>
            <StickyCursor activeSection={activeSection} /> {/* Pass active section */}

            {/* Assign IDs to sections for detection */}
            <section id="hero">
              <HeroThree />
            </section>

            <section id="about">
              <About />
            </section>

            <section id="experience">
              <ExperienceTwoHeader />
              <ExperienceTwo />
            </section>

            <section id="skills">
              <SkillsTwoMain />
              <SkillsTwo />
            </section>
            {/* 
            <section id="projects">
              <ProjectsMain/>
            </section> */}

            <section id="services">
              <ServicesThreeMain />
            </section>

            <section id="footer">
              <Footer />
            </section>

          </div>
          <div className='p_main_item'>
            {/* <Navbar/> */}
            {/* <HeroThree/> */}
            {/* <LoadingScreen/> */}
            {/* <Hero/> */}
            {/* <About/> */}
            {/* <ExperienceTwo/> */}
            {/* <ServicesThreeMain/> */}
            {/* <HeroTwo/> */}
            {/* <TextMover/> */}
            {/* <Benefits/> */}
            {/* <ShortDescription/> */}
            {/* <div style={{height: "100vh", marginTop: '', zIndex: "2"}}>
            Scroll
          </div> */}
            {/* <ServicesSectionMain/> */}
            {/* <ServicesSectionTempMain/> */}
            {/* <ServicesSectionTwoMain/> */}
            {/* <div style={{height: "100vh", marginTop: ''}}>
            Scroll 2
          </div> */}
            {/* <ExperienceMain/> */}
            {/* <About/> */}
            {/* <div style={{height: "100vh", marginTop: ''}}>
            Scroll 2
          </div> */}
            {/* <Footer/> */}
          </div>
        </div>
      </div>}

    </>
  )
}

export default App


// 1. buttons in home section - 14 - completed
// 2. background for home section - 14 - need image for that
// 3. loading screen - 14 - completed
// 4. animation on texts - 14 - completed
// 5. cursor mover effect - - completed
// 6. projects section
// 7. mobile responsiveness
// 8. navigation
// 9. top bar