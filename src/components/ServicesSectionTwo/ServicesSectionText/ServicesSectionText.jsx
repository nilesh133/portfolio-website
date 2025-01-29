import { useTransform, motion } from "framer-motion";
import React from "react";

const ServicesSectionText = ({text, scrollYProgress, index, range}) => {
  const isLeft = index % 2 == 0;
  const x = useTransform(scrollYProgress, range, [isLeft ? "-100%" : "100%", "0%"]);
  const opacity = useTransform(scrollYProgress, range, [0, 1]);
  
  return (
    <motion.div
      key={index}
      className="scrolling-text-item"
      style={{
        x: x,
        opacity: opacity,
      }}
    >
      {text}
    </motion.div>
  );
};

export default ServicesSectionText;
