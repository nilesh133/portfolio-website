import React, { useRef, useState } from "react";
import "./experiencetwoheader.css";
import { useInView, motion } from "framer-motion";

const ExperienceTwoHeader = () => {
  const container = useRef(null);

  const isInView = useInView(container, {
    once: true,
    margin: "-100px",
  });

  const servicesTitle = {
    initial: {
      translateX: "-100px",
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

  return (
    <div className="experience_header plus-jakarta-sans-font" ref={container}>
      <div className="experience_header_line">
        <motion.h2
          variants={servicesTitle}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          From Code to Deployment
        </motion.h2>
      </div>
      <div className="experience_header_line">
        <motion.h2
          variants={servicesTitle}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          My Professional Path
        </motion.h2>
      </div>
    </div>
  );
};

export default ExperienceTwoHeader;
