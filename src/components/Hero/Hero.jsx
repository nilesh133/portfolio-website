import React, { useEffect, useRef, useState } from "react";
import "./hero.css";
import { heroScrollGsap } from "../../animations/gsap/hero";
import { heroHeadingAnim, heroProfileAnim } from "../../animations/framer-motion/hero";
import { motion } from "framer-motion";
import hero_profile_img from "../../images/Hero/hero_profile_img.png"

const Hero = () => {
  const heroRef = useRef(null);

  const [profileState, setProfileState] = useState([
    { word: "Software" },
    { word: "Developer",
      isDifferentColor: true
     },
    { word: "And" },
    { word: "Java" },
    { word: "Coder" },
  ]);

  useEffect(() => {
    heroScrollGsap(heroRef);
  }, []);

  return (
    <div className="hero_wrapper" ref={heroRef}>
      <div className="hero_inner">
        <div className="hero_main">
          <div className="hero_name">
            <motion.p variants={heroHeadingAnim} initial='initial' animate="animate">Hi! I’m Nilesh, thanks for being here today.</motion.p>
          </div>
          <div className="hero_profile">
            <div className="hero_profile_container">
              <div className="hero_profile_left">
                {profileState.map((word, index) => (
                  <motion.span
                    key={index}
                    className={`hero_profile_animated_word ${word?.isDifferentColor ? 'hero_profile_animated_word_differentcolor' : ''}`}
                    variants={heroProfileAnim}
                    initial="initial"
                    animate="animate"
                    custom={index}
                  >
                    {word.word}
                  </motion.span>
                ))}
              </div>
              <div className="hero_profile_right">
                <img src={hero_profile_img} alt="" />
              </div>
            </div>
          </div>
          <div className="hero_description">
            <motion.p variants={heroHeadingAnim} initial='initial' animate="animate">With 1.5+ years in software development, I have experience in front-end technologies like React JS and JavaScript, as well as back-end tools like Node.js, MongoDB, and Firebase.</motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
