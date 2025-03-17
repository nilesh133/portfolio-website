import { useRef, useState } from "react";
import Project from "../Project/Project";
import "./projectsmain.css";
import ProjectModal from "../ProjectModal/ProjectModal";

import mosaic from "../../../images/Projects/Mosaic/mosaic_laptop_version_upload.png";
import landerz from "../../../images/Projects/Landerz/landerz_laptop_version_upload.png";
import landing from "../../../images/Projects/Landing/landing_laptop_version_upload.png";
import coffeeshop from "../../../images/Projects/CoffeeShop/coffeeblend_laptop_version_upload.png";
import { useInView, motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const projects = [
  {
    title: "Mosaic",
    src: mosaic,
    // src: "https://images.unsplash.com/photo-1523655223303-4e9ef5234587?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#000000",
    tech: "React JS, SCSS, NodeJS, MongoDB",
    domain: "FullStack Developement",
  },
  {
    title: "Landerz",
    src: landerz,
    // src: "https://images.unsplash.com/photo-1483717214777-e2baa10cf8e1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#8C8C8C",
    tech: "React JS, CSS",
    domain: "Frontend Developement",
  },
  {
    title: "Landing",
    src: landing,
    // src: "https://images.unsplash.com/photo-1713557112617-e12d67bddc3a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#EFE8D3",
    tech: "React JS, CSS",
    domain: "Frontend Developement",
  },
  {
    title: "Coffee Shop",
    src: coffeeshop,
    // src: "https://images.unsplash.com/photo-1709293185602-0bb6f936d97d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#706D63",
    tech: "React JS, CSS",
    domain: "Frontend Developement",
  },
];

const ProjectsMain = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  const containerMain = useRef(null);

  const isInView = useInView(containerMain, {
    // once: true,
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
    <div>
      <main className="projectsmain plus-jakarta-sans-font" ref={containerMain}>
        <div className="projectsmain_header">
          <motion.h1
            variants={servicesTitle}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            My Craft Hub
          </motion.h1>
          <motion.p
            variants={opacityAnim}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            A showcase of my diverse projects, where creativity and technology
            come together to solve real-world problems. Explore the work that
            defines my journey as a developer!
          </motion.p>
        </div>
        <div className="projectsmain_body">
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                index={index}
                setModal={setModal}
                {...project}
              />
            );
          })}
        </div>
        <ProjectModal modal={modal} projects={projects} />
        <div
          className="hero_three_resume_btn"
          // variants={socialAnim}
          // initial="initial"
          // animate="animate"
        >
          <span className="hero_three_resume_text">See More</span>

          <div className="icon_wrap">
            <span>
              <FaArrowRightLong />
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsMain;
