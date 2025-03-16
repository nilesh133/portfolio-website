import React, { useState, useEffect, useRef } from "react";
import "./herothree.css";
import { motion, useScroll, useTransform } from "framer-motion";

import herothreecoffeeimage from "../../images/HeroThree/7427525-removebg-preview.png";
import herothreebulb from "../../images/HeroThree/19826202_6167464-removebg-preview.png";
import heroprofile from "../../images/HeroThree/hero_profile.jpg";

import { FaLinkedinIn } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";

import RoundedButton from "../RoundedButton/RoundedButton";
import Magnetic from "../Magnetic/Magnetic";
import { FaArrowRightLong } from "react-icons/fa6";

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

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div className="hero_three_main plus-jakarta-sans-font" ref={container}>
      <div className="hero_three_main_name">
        <motion.h1 variants={mainTitle} initial="initial" animate="animate">
          HI, I'M NILESH
        </motion.h1>
      </div>
      <motion.div
        variants={descriptionTitle}
        initial="initial"
        animate="animate"
        className="hero_three_short_description"
      >
        <div className="hero_three_short_description_container">
          <div className="hero_three_short_description_image">
            <img src={heroprofile} />
          </div>
          <div className="hero_three_short_description_text">
            <span className="hero_three_short_description_profile">
              software developer.
            </span>
            {/* <img className="hero_three_short_description_img" src={heroprofile}/> */}
            crafting websites that tell a story and create a memorable online
            experience.
          </div>
        </div>
      </motion.div>

      <motion.div
        className="hero_three_social_container"
        variants={socialAnim}
        initial="initial"
        animate="animate"
      >
        <div className="hero_three_social_left">
          <RoundedButton
            className="herothree_btn"
            style={{
              "--width": "55px",
              "--height": "55px",
              backgroundColor: "#000",
              overflow: "hidden",
            }}
            backgroundColor="#0A66C2"
          >
            <span>
              <FaLinkedinIn />
            </span>
          </RoundedButton>

          <RoundedButton
            className="herothree_btn"
            style={{
              "--width": "55px",
              "--height": "55px",
              overflow: "hidden",
              backgroundColor: "#000",
            }}
            backgroundColor="#c13584"
          >
            <span>
              <FiInstagram />
            </span>
          </RoundedButton>

          <RoundedButton
            className="herothree_btn"
            style={{
              "--width": "55px",
              "--height": "55px",
              overflow: "hidden",
              backgroundColor: "#000",
            }}
            backgroundColor="#666666"
          >
            <span>
              <IoLogoGithub />
            </span>
          </RoundedButton>

          <RoundedButton
            className="herothree_btn"
            style={{
              "--width": "55px",
              "--height": "55px",
              overflow: "hidden",
              backgroundColor: "#000",
            }}
            backgroundColor="#1DA1F2"
          >
            <span>
              <FaXTwitter />
            </span>
          </RoundedButton>
        </div>
        {/* <div className="hero_three_social_right">
          <RoundedButton
            className="herothree_btn"
            style={{
              "--width": "180px",
              "--height": "50px",
              "backgroundColor": "#f1f1f1",
              overflow: "hidden",
            }}
            backgroundColor="#0A66C2"
          >
           <div className="hero_three_viewresume">
            <span><IoEyeSharp/></span>
            <span>View My Resume</span>
           </div>
          </RoundedButton>
        </div> */}
      </motion.div>

      {/* <motion.div className="hero_three_resume_btn"  variants={socialAnim}
        initial="initial"
        animate="animate">
        <span className="hero_three_resume_text">View Resume</span>
       
          <div className="icon_wrap">
            <span>
              <FaArrowRightLong />
            </span>
          </div>
      </motion.div> */}

      {/* <motion.div style={{ height }} className={"circleContainer"}>
        <div className={"circlee"}></div>
      </motion.div> */}

      {/* <motion.div
        variants={socialAnim}
        initial="initial"
        animate="animate"
        className="hero_three_main_social"
      >
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
      </motion.div> */}

      {/* <div> */}
      {/* <RoundedButton backgroundColor={"#334BD3"} className="herothree_btn">
        <div>
          <span className="herothree_btn_icon">
            <IoEyeSharp />
          </span>
          <p>View My Resume</p>
        </div>
      </RoundedButton> */}
      {/* </div> */}

      {/* Curved SVG Section */}
      {/* <div class="custom-shape-divider-bottom-1740328712">
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
      </div> */}
    </div>
  );
};

export default HeroThree;
