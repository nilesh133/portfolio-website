import { motion } from "framer-motion";
import "./projectmodal.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const ProjectModal = ({ modal, projects }) => {
  const { active, index } = modal;

  const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };

  useEffect(() => {
    // Generalized function to move elements with gsap quickTo
    const createMoveFunctions = (element, duration) => ({
      moveX: gsap.quickTo(element, "left", { duration, ease: "power3" }),
      moveY: gsap.quickTo(element, "top", { duration, ease: "power3" }),
    });

    // Create movement functions for modal container, cursor, and cursor label
    const modalMove = createMoveFunctions(modalContainer.current, 0.8);
    const cursorMove = createMoveFunctions(cursor.current, 0.5);
    const cursorLabelMove = createMoveFunctions(cursorLabel.current, 0.45);

    // Mouse move event listener
    const handleMouseMove = (e) => {
      const { pageX, pageY } = e;

      // Move the modal container, custom cursor, and cursor label
      modalMove.moveX(pageX);
      modalMove.moveY(pageY);
      cursorMove.moveX(pageX);
      cursorMove.moveY(pageY);
      cursorLabelMove.moveX(pageX);
      cursorLabelMove.moveY(pageY);
    };

    // Add mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="projectmodal_container"
      >
        <div style={{ top: index * -100 + "%" }} className="projectmodal_modalslider">
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                className="projectmodal_modal"
                style={{ backgroundColor: "#000" }}
                key={`modal_${index}`}
              >
                <img src={src} width={300} height={0} alt="image" />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className="projectmodal_cursor"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        className="projectmodal_cursorlabel"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </>
  );
};

export default ProjectModal;
