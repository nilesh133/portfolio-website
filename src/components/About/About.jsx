import React, { useRef } from "react";
import "./about.css";
import { useScroll, useTransform, motion } from "framer-motion";

const About = () => {
  const container = useRef(null);
  const para =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

  function generateRandomOrder(length) {
    const indices = [...Array(length).keys()]; // Create an array of indices [0, 1, 2, ...]
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]]; // Swap randomly
    }
    return indices;
  }

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const words = para.split(" ");
  const randomOrder = generateRandomOrder(words.length);

  return (
    <div className="about_wrapper" ref={container}>
      <div className="about_inner">
        <div className="about_content">
          <h1 className="about_content_h1">
            {words.map((word, i) => {
              const start = randomOrder[i] / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={"about_h1_word"}>
      <span className={"about_h1_shadow"}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
