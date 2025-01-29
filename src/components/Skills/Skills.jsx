import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { motion, useInView } from "framer-motion";
import icon from "../../images/Skills/react.png";
const App = () => {
  return (
    <div>
      {/* Main Screen */}
      <motion.div
        className="main-screen"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#282C34",
          color: "white",
          fontSize: "2rem",
        }}
      >
        Welcome to My Portfolio
      </motion.div>
      {/* Skills Section */}
      <SkillsSection />
    </div>
  );
};
const SkillsSection = () => {
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: true });
  const [hasStarted, setHasStarted] = useState(false);
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

    // Create a renderer with full width and height
    const render = Render.create({
      element: skillsRef.current,
      engine: engine,
      options: {
        width: viewportWidth,
        height: viewportHeight,
        wireframes: false,
        background: "#F9F9F9",
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
        Math.random() * (viewportWidth - skillBoxWidth), // Random x within canvas width
        Math.random() * -300 - 50, // Random y position above the canvas
        skillBoxWidth,
        skillBoxHeight,
        skill
      )
    );

    // Create walls and ground
    const ground = Bodies.rectangle(
      viewportWidth / 2,
      viewportHeight + 10,
      viewportWidth,
      20,
      { isStatic: true }
    );
    const leftWall = Bodies.rectangle(
      -10,
      viewportHeight / 2,
      20,
      viewportHeight,
      { isStatic: true }
    );
    const rightWall = Bodies.rectangle(
      viewportWidth + 10,
      viewportHeight / 2,
      20,
      viewportHeight,
      { isStatic: true }
    );

    // Add bodies to the world
    Composite.add(world, [...skillBoxes, ground, leftWall, rightWall]);
  };

  return (
    <motion.div
      className="skills-section"
      ref={skillsRef}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* <div
        style={{
          width: "1000px",
          height: "800px",
          margin: "auto",
        }}
      ></div> */}
    </motion.div>
  );
};
export default App;
