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
    "As an experienced IT professional with over 2 years in software development, I have worked with various technologies, including front-end technologies like React JS and JavaScript, and back-end technologies such as Node.js, MongoDB, and Firebase. Additionally, I have developed strong skills in programming languages like Java and Python. Beyond coding, I find relaxation in watching movies and web series. I also have a deep love for travel - exploring new places, cultures, and cuisines inspires my creativity and broadens my perspective."
    // Whether it’s a mind-bending sci-fi or a gripping crime thriller, I enjoy immersing myself in compelling stories and cinematic experiences.";

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
                  {word === "Beyond" && <div className="about_content_newline"></div>}
                  {
                    word == "professional" && 
                    // <FcSelfServiceKiosk className="about_content_icons"/>
                    <div className="about_content_img_container">
                      <img className="about_content_img" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    </div>
                  }
                   {
                    word == "developed" && 
                    // <FcCommandLine className="about_content_icons"/>
                    <div className="about_content_img_container">
                      <img className="about_content_img" src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kZXxlbnwwfDB8MHx8fDA%3D"/>
                    </div>
                  }
                  {
                    word == "movies" && 
                    // <FcFilmReel className="about_content_icons"/>
                    <div className="about_content_img_container">
                      <img className="about_content_img" src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    </div>
                  }

{
                    word == "inspires" && 
                    // <FcFilmReel className="about_content_icons"/>
                    <div className="about_content_img_container">
                      <img className="about_content_img" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    </div>
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
