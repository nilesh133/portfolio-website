import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import "./benefits.css";

const Benefits = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"], // Adjust offsets
  });

  // First text animations
const scale1 = useTransform(scrollYProgress, [0, 0.85], [1, 2]);
const opacity1 = useTransform(scrollYProgress, [0, 0.85], [1, 0]); 

// Second text animations
const scale2 = useTransform(scrollYProgress, [0.45, 1], [0.4, 1]);
const opacity2 = useTransform(scrollYProgress, [0.45, 1], [0, 1]);

  return (
    <div className="threeTextContainer" ref={container}>
      <div className="stickyContainer">
        <motion.div
          className="text"
          style={{
            scale: scale1,
            opacity: opacity1,
            position: "absolute",
          }}
        >
          <p>10x your conversion rate with award-winning web design.</p>
        </motion.div>
        <motion.div
          className="text"
          style={{
            scale: scale2,
            opacity: opacity2,
            position: "absolute",
          }}
        >
          <p>74% of users leave a website because of it's design.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;
