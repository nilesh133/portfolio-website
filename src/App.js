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
          {/* <LoadingScreen/> */}
          <Navbar/>
          {/* <Hero/> */}
          <HeroTwo/>
          <TextMover/>
          <About/>
          <Benefits/>
          <ShortDescription/>
          <div style={{height: "100vh", marginTop: '', zIndex: "2"}}>
            Scroll
          </div>
          <ServicesSectionMain/>
          {/*<ServicesSectionTempMain/>*/}
          <ServicesSectionTwoMain/>
          <div style={{height: "100vh", marginTop: ''}}>
            Scroll 2
          </div>
          <Skills/>
          {/* <About/> */}
          <div style={{height: "100vh", marginTop: ''}}>
            Scroll 2
          </div>
        </div>
      </div>
    </div>
  )
}

export default App