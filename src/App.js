import React, { useEffect } from 'react';
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

const App = () => {

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


  return (
    <div className='p_main'>
      <div className='p_main_container'>
        <div className='p_main_item'>
          <HeroThree />
          <About />
          <ExperienceTwoHeader/>
          <ExperienceTwo />
          {/* <Skills/> */}
          <SkillsTwoMain/>
          <SkillsTwo/>
          <ServicesThreeMain />
          <Footer />
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
          {/* <ProjectsMain/> */}
          {/* <About/> */}
          {/* <div style={{height: "100vh", marginTop: ''}}>
            Scroll 2
          </div> */}
          {/* <Footer/> */}
        </div>
      </div>
    </div>
  )
}

export default App