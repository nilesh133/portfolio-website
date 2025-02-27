import React, { useRef } from "react";
import "./about.css";
import { useScroll, useTransform, motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaFilm, FaRunning } from "react-icons/fa"; // Import Icons
import { FcSelfServiceKiosk } from "react-icons/fc";
import { FcCommandLine } from "react-icons/fc";
import { FcFilmReel } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";

const About = () => {
  const container = useRef(null);
  const para =
    "As an experienced IT professional with over 1.5 years in software development, I have worked with various technologies, including front-end technologies like React JS and JavaScript, and back-end technologies such as Node.js, MongoDB, and Firebase. Additionally, I have developed strong skills in programming languages like Java and Python. I love building scalable applications, solving complex problems, and continuously learning new technologies to stay ahead in the game.";

  function generateRandomOrder(length) {
    const indices = [...Array(length).keys()];
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  }

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const words = para.split(" ");
  const randomOrder = generateRandomOrder(words.length);

  // Array of icons to insert randomly
  const icons = [<FaReact />, <FaNodeJs />, <FaDatabase />, <FaPython />, <FaFilm />, <FaRunning />];

  return (
    <div className="about_wrapper plus-jakarta-sans-font" ref={container}>
      <div className="about_inner">
        <div className="about_content">
          <h1 className="about_content_h1">
            {words.map((word, i) => {
              const start = randomOrder[i] / words.length;
              const end = start + 1 / words.length;

              return (
                <React.Fragment key={i}>
                  {word === "Additionally," && <div className="about_content_newline"></div>}
                  {
                    word == "software" && <FcSelfServiceKiosk className="about_content_icons"/>
                  }
                   {
                    word == "various" && <FcCommandLine className="about_content_icons"/>
                  }
                  {
                    word == "scalable" && <FcFilmReel className="about_content_icons"/>
                  }
                  <Word progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>

                  {/* Randomly add an icon after some words */}

                  {/* {i % 7 === 0 && i !== 0 && (
                    <span className="icon">{icons[Math.floor(Math.random() * icons.length)]}</span>
                  )}
                  &nbsp; Space between words */}
                </React.Fragment>
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
    <span className="about_h1_word">
      <span className="about_h1_shadow">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
