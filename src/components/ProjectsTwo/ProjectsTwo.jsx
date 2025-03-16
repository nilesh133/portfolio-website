import React, { useState, useRef, useEffect } from "react";
import './projectstwo.css'

const projects = [
  { id: 1, title: "Project One", image: "https://plus.unsplash.com/premium_photo-1698584002823-96e5c157d9ec?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, title: "Project Two", image: "https://plus.unsplash.com/premium_photo-1698584002823-96e5c157d9ec?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, title: "Project Three", image: "https://plus.unsplash.com/premium_photo-1698584002823-96e5c157d9ec?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const ProjectsTwo = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [skew, setSkew] = useState(0);
  const lastMouseX = useRef(0);
  const skewTimeout = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const speed = e.clientX - lastMouseX.current;
      setSkew(speed * 1); // Adjust skew based on speed
      lastMouseX.current = e.clientX;

      setPosition({ x: e.clientX, y: e.clientY });

      // Reset skew gradually
      clearTimeout(skewTimeout.current);
      skewTimeout.current = setTimeout(() => setSkew(0), 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-row"
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {project.title}
          </div>
        ))}
      </div>

      {hoveredProject && (
        <div
          className="floating-box"
          style={{
            top: position.y + 10 + "px",
            left: position.x + 10 + "px",
            transform: `skewX(${skew}deg)`,
          }}
        >
          <img src={hoveredProject.image} alt={hoveredProject.title} />
        </div>
      )}
    </div>
  );
};

export default ProjectsTwo;
