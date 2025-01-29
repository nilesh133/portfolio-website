import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./servicessectiontempmain.css";

const ServicesSectionTempMain = () => {
  const containerRef = useRef(null);

  // Scroll progress for the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  console.log(scrollYProgress)

  // Container moves upwards when it reaches 20% of the viewport height
  const containerY = useTransform(scrollYProgress, [0.2, 1], ["0%", "-20%"]);

  // Individual card movements
  const card2Y = useTransform(scrollYProgress, [0.4, 0.8], ["0%", "-30%"]);
  const card3Y = useTransform(scrollYProgress, [0.6, 1], ["0%", "-30%"]);
  const card4Y = useTransform(scrollYProgress, [0.8, 1.2], ["0%", "-30%"]);

  return (
    <div className="screen" ref={containerRef} style={{ y: containerY }}>
      <motion.div className="cards-container">
        <motion.div className="card first-card">Card 1</motion.div>
        <motion.div className="card" style={{ y: card2Y }}>
          Card 2
        </motion.div>
        <motion.div className="card" style={{ y: card3Y }}>
          Card 3
        </motion.div>
        <motion.div className="card" style={{ y: card4Y }}>
          Card 4
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServicesSectionTempMain;
