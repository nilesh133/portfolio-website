import React, { useRef } from "react";
import { IoIosFlower } from "react-icons/io";
import "./skillstwomain.css";
import RoundedButton from "../../RoundedButton/RoundedButton";
import { useInView, motion } from "framer-motion";

const SkillsTwoMain = () => {
  const containerMain = useRef(null);

  const isInView = useInView(containerMain, {
    // once: true,
    margin: "-100px",
  });

  const servicesTitle = {
    initial: {
      translateX: "-50px",
      opacity: 0,
    },
    animate: {
      translateX: "0%",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const opacityAnim = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="skills_two_main plus-jakarta-sans-font" ref={containerMain}>
      <div className="skills_two_main_container">
        <div className="skills_two_header">
          <motion.h1
            variants={servicesTitle}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            My Tech Arsenal And Achievement
          </motion.h1>
          {/* <h1></h1> */}
        </div>
        <div className="skills_two_achievements">
          <div className="skills_two_achievements_item">
            <span className="skills_two_achievements_icon">
              <IoIosFlower />
            </span>
            <motion.span
              variants={opacityAnim}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
              250+ questions solved
              <br /> on Leetcode
            </motion.span>
            <span className="skills_two_achievements_icon">
              <IoIosFlower />
            </span>
          </div>
          <div className="skills_two_achievements_item">
            <span className="skills_two_achievements_icon">
              <IoIosFlower />
            </span>
            <motion.span
              variants={opacityAnim}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
              5 star in Problem Solving, <br /> Java and Python
            </motion.span>
            <span className="skills_two_achievements_icon">
              <IoIosFlower />
            </span>
          </div>
          {/* <motion.span
            variants={opacityAnim}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            5 star in Problem Solving, <br /> Java and Python
          </motion.span>
          <span className="skills_two_achievements_icon">
            <IoIosFlower />
          </span> */}
        </div>
        {/* <div className="skills_two_resume">
          <RoundedButton
            className="skills_two_resume_btn"
            style={{
              "--width": "150px",
              "--height": "150px",
              backgroundColor: "#fff",
              overflow: "hidden",
            }}
            backgroundColor="#000"
          >
            <span>View Resume</span>
          </RoundedButton>
        </div> */}
      </div>
    </div>
  );
};

export default SkillsTwoMain;
