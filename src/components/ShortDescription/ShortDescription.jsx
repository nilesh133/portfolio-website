import React, { useEffect, useRef, useState } from "react";
import "./shortdescription.css";
import {
  sdMainContAnimGsap,
  sdVideoMaskAnimGsap,
} from "../../animations/gsap/shortdescription";
import Matter from "matter-js";
import { motion, useInView } from "framer-motion";
import icon from "../../images/Skills/react.png";

const ShortDescription = () => {
  const sdContentContRef = useRef(null);
  const sdContentMaskRef = useRef(null);
  const sdWrapper = useRef(null);

  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: true });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    sdMainContAnimGsap(sdWrapper, sdContentContRef);
    sdVideoMaskAnimGsap(sdWrapper, sdContentMaskRef);
  }, []);

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      initializeMatterJS();
    }
  }, [isInView, hasStarted]);
  const initializeMatterJS = () => {
    const { Engine, Render, Runner, Bodies, Composite } = Matter;

    // Create an engine
    const engine = Engine.create();
    const world = engine.world;

    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const { width, height } = skillsRef.current.getBoundingClientRect();

    // Create a renderer with full width and height
    const render = Render.create({
      element: skillsRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: "#056646",
      },
    });

    Render.run(render);

    // Create a runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Define skills
    const skills = [
      { name: "React", icon: icon },
      { name: "JavaScript", icon: icon },
      { name: "Node JS", icon: icon },
      { name: "Mongo DB", icon: icon },
      { name: "CSS", icon: icon },
      { name: "HTML", icon: icon },
      { name: "Redux", icon: icon },
      { name: "TypeScript", icon: icon },
      { name: "GraphQL", icon: icon },
      { name: "Python", icon: icon },
      { name: "Django", icon: icon },
      { name: "Express", icon: icon },
    ];

    // Function to create skill boxes
    const createSkillBox = (x, y, width, height, skill) => {
      return Bodies.rectangle(x, y, width, height, {
        restitution: 0.8, // Adds bounciness
        friction: 0.5, // Adds friction
        render: {
          sprite: {
            texture: skill.icon,
          },
        },
        label: skill.name,
      });
    };

    // Generate skill boxes with random positions
    const skillBoxWidth = 120; // Set width for skill boxes
    const skillBoxHeight = 120; // Set height for skill boxes
    const skillBoxes = skills.map((skill) =>
      createSkillBox(
        Math.random() * (width - skillBoxWidth), // Random x within canvas width
        Math.random() * -300 - 50, // Random y position above the canvas
        skillBoxWidth,
        skillBoxHeight,
        skill
      )
    );

    // Create walls and ground
    const ground = Bodies.rectangle(
      width / 2,
      height + 10,
      width,
      20,
      { isStatic: true }
    );
    const leftWall = Bodies.rectangle(
      -10,
      height / 2,
      20,
      height,
      { isStatic: true }
    );
    const rightWall = Bodies.rectangle(
      width + 10,
      height / 2,
      20,
      height,
      { isStatic: true }
    );

    // Add bodies to the world
    Composite.add(world, [...skillBoxes, ground, leftWall, rightWall]);
  };

  return (
    <div className="sd_wrapper" ref={sdWrapper}>
      <div className="sd_wrapper_inner">
        <div className="sd_content_container" ref={sdContentContRef}>
          <div className="sd_content_mask" ref={sdContentMaskRef}>
            <div className="sd_content_main">
              <div className="sd_content_section_box sd_content_section1"></div>
              <motion.div ref={skillsRef} className="sd_content_section_box sd_content_section2"></motion.div>
              <div className="sd_content_section_box sd_content_section3"></div>
              <div className="sd_content_section_box sd_content_section4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortDescription;
