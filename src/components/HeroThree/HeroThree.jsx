import React, { useState, useEffect } from "react";
import "./herothree.css";
import { motion } from "framer-motion";

import herothreecoffeeimage from "../../images/HeroThree/7427525-removebg-preview.png";
import herothreebulb from "../../images/HeroThree/19826202_6167464-removebg-preview.png";
import heroprofile from '../../images/HeroThree/hero_profile.jpg';

import { FaLinkedinIn } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const HeroThree = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const targetPath = `M0 100 L0 200 L1528 200 L1528 100 Q764 100 0 100`;

  const mainTitle = {
    initial: {
      y: 100,
      rotateX: 30,
      opacity: 0,
    },
    animate: {
      y: 0,
      rotateX: 0,
      opacity: 1,
      transition: {
        delay: 2,
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const descriptionTitle = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2.5,
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const socialAnim = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 2.6,
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 0.5; // 50vh
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCurvedPath = () => {
    const curveHeight = 80 - scrollProgress * 80; // Curve from 80px to 0px
    return `M0,100 Q50,${curveHeight} 100,100 L100,0 L0,0 Z`;
  };

  return (
    <div className="hero_three_main plus-jakarta-sans-font">
      <div className="hero_three_main_name">
        <motion.h1 variants={mainTitle} initial="initial" animate="animate">HI, I'M NILESH</motion.h1>
      </div>
      <motion.div variants={descriptionTitle} initial="initial" animate="animate" className="hero_three_short_description">
        <span className="hero_three_short_description_profile">software developer</span><img src={heroprofile}/>crafting websites that tell a story and create a
        memorable online experience.
      </motion.div>

      <motion.div variants={socialAnim} initial="initial" animate="animate" className="hero_three_main_social">
        <span>
          <FaLinkedinIn />
        </span>
        <span>
          <FiInstagram />
        </span>
        <span>
          <IoLogoGithub />
        </span>
        <span>
          <FaXTwitter />
        </span>
      </motion.div>

      {/* Curved SVG Section */}
      <div class="custom-shape-divider-bottom-1740328712">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroThree;
