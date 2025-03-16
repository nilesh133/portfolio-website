import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

const skills = [
    {
        skill_name: "React JS",
        // skill_bg: "#61dafb",
        // skill_color: "#fff"
        skill_bg: "#000000",
        skill_color: "#ffffff"
    },
    {
        skill_name: "JavaScript",
        // skill_bg: "#f0db4f",
        // skill_color: "#000"
        skill_bg: "#000000",
        skill_color: "#ffffff"
    },
    {
        skill_name: "HTML",
        // skill_bg: "#e44d26",
        // skill_color: "#fff"
        skill_bg: "#000000",
        skill_color: "#ffffff"
    },
    {
        skill_name: "CSS",
        // skill_bg: "#1572B6",
        // skill_color: "#fff"
        skill_bg: "#000000",
        skill_color: "#ffffff"
    },
    {
        skill_name: "Tailwind CSS",
        // skill_bg: "#242938",
        // skill_color: "#24BBBD"
        skill_bg: "#000000",
        skill_color: "#ffffff"
    },
    {
        skill_name: "TypeScript",
        // skill_bg: "#007ACC",
        // skill_color: "#fff"
        skill_bg: "#000000",
        skill_color: "#ffffff"
    },
    {
        skill_name: "Material UI",
        // skill_bg: "#0081CB",
        // skill_color: "#fff"
        skill_bg: "#000000",
        skill_color: "#ffffff"
    },
    {
        skill_name: "Next.js",
        // skill_bg: "#000",
        // skill_color: "#fff"
        skill_bg: "#000000",
        skill_color: "#ffffff"
    },
    {
        skill_name: "Redux",
        // skill_bg: "#764ABC",
        // skill_color: "#fff"
        skill_bg: "#000000",
        skill_color: "#ffffff"
    },
    {
        skill_name: "Node JS",
        // skill_bg: "#68A063",
        // skill_color: "#fff"
        skill_bg: "#000000",
        skill_color: "#ffffff"
    },
    {
        skill_name: "Express JS",
        // skill_bg: "#000",
        // skill_color: "#fff"
        skill_bg: "#000000",
        skill_color: "#ffffff"
    },
    {
        skill_name: "Mongo DB",
        // skill_bg: "#4DB33D",
        // skill_color: "#fff"
        skill_bg: "#000000",
        skill_color: "#ffffff"
    },
    {
        skill_name: "Firebase",
        // skill_bg: "#FFCA28",
        // skill_color: "#000"
        skill_bg: "#000000",
        skill_color: "#ffffff"
    },
    {
        skill_name: "SQL",
        // skill_bg: "#336791",
        // skill_color: "#fff"
        skill_bg: "#000000",
        skill_color: "#ffffff"
    },
    {
        skill_name: "Java",
        // skill_bg: "#007396",
        // skill_color: "#fff"
        skill_bg: "#000000",
        skill_color: "#ffffff"
    },
    {
        skill_name: "Python",
        // skill_bg: "#3776AB",
        // skill_color: "#fff"
        skill_bg: "#000000",
        skill_color: "#ffffff"
    },
    {
      skill_name: "GSAP",
      // skill_bg: "#3776AB",
      // skill_color: "#fff"
      skill_bg: "#000000",
      skill_color: "#ffffff"
  },
  {
    skill_name: "Framer Motion",
    // skill_bg: "#3776AB",
    // skill_color: "#fff"
    skill_bg: "#000000",
    skill_color: "#ffffff"
},
];

const SkillsSection = () => {
  const sceneRef = useRef(null);
  const [skillPositions, setSkillPositions] = useState([]);
  const [isVisible, setIsVisible] = useState(false); // Track visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Start animation when in view
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the container is visible
    );

    if (sceneRef.current) {
      observer.observe(sceneRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
  
    const getTextWidth = (skillName) => {
      const baseWidth = skillName.length * 10 + 50;
      if (window.innerWidth <= 576) return baseWidth * 0.6;
      if (window.innerWidth <= 768) return baseWidth * 0.7; // Small width
      if (window.innerWidth <= 992) return baseWidth * 0.8; // Medium width
      return baseWidth; // Normal width
    };
  
    const engine = Matter.Engine.create();
    const world = engine.world;
  
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: 400,
        wireframes: false,
        background: "#fff"
      }
    });
  
    const ground = Matter.Bodies.rectangle(
      window.innerWidth / 2,
      390,
      window.innerWidth,
      20,
      { isStatic: true, render: { fillStyle: "#ffffff" } }
    );
  
    const walls = [
      Matter.Bodies.rectangle(-10, window.innerHeight / 2, 20, window.innerHeight, { isStatic: true }),
      Matter.Bodies.rectangle(window.innerWidth + 10, window.innerHeight / 2, 20, window.innerHeight, { isStatic: true })
    ];
  
    Matter.World.add(world, [ground, ...walls]);
  
    const skillBodies = skills.map((skill) => {
      const textWidth = getTextWidth(skill.skill_name); 
      const height = window.innerWidth <= 576 ? 30 : 40;  // Match both Matter.js and span height
    
      const body = Matter.Bodies.rectangle(
        100 + Math.random() * (window.innerWidth - 200),
        Math.random() * -300,
        textWidth,
        height, // Make sure this height matches the span height
        {
          chamfer: { radius: 25 },
          restitution: 0.6,
          friction: 0.3,
          render: {
            fillStyle: skill.skill_bg,
            strokeStyle: skill.skill_bg,
            lineWidth: 2
          }
        }
      );
    
      Matter.Body.setVelocity(body, { x: Math.random() * 2 - 1, y: Math.random() * 2 });
    
      return { body, width: textWidth, height }; // Store height
    });
    
  
    Matter.World.add(world, skillBodies.map((item) => item.body));
  
    Matter.Engine.run(engine);
    Matter.Render.run(render);
  
    const updatePositions = () => {
      setSkillPositions(
        skillBodies.map((item) => ({
          x: item.body.position.x,
          y: item.body.position.y,
          angle: item.body.angle,
          width: item.width,
          height: item.height
        }))
      );
    };
  
    const runner = Matter.Runner.create();
    Matter.Events.on(engine, "afterUpdate", updatePositions);
    Matter.Runner.run(runner, engine);
  
    return () => {
      Matter.Render.stop(render);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
      Matter.Runner.stop(runner);
      render.canvas.remove();
    };
  }, [isVisible]);
  

  return (
    <div ref={sceneRef} className="skills_matter plus-jakarta-sans-font" style={{ width: "99vw", height: "400px", position: "relative", overflow: "hidden", zIndex: "10" }}>
     {skillPositions.map((pos, index) => (
  <span
    key={index}
    style={{
      position: "absolute",
      left: `${pos.x}px`,
      top: `${pos.y}px`,
      transform: `translate(-50%, -50%) rotate(${pos.angle}rad)`, // Centering correctly
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: `${pos.width}px`,  // Match the Matter.js width
      height: `${pos.height}px`, // Match the Matter.js height
      background: `${skills[index].skill_bg}`,
      borderRadius: "20px",
      fontWeight: "bold",
      fontSize: `${window.innerWidth <= 576 ? "10px" : "14px"}`,
      whiteSpace: "nowrap",
      pointerEvents: "none",
      userSelect: "none",
      color: `${skills[index].skill_color}`,
      textTransform: "uppercase",
      textAlign: "center",
    }}
  >
    {skills[index]?.skill_name}
  </span>
))}

    </div>
  );
};

export default SkillsSection;
