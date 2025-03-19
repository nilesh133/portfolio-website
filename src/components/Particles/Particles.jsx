import React, { useEffect, useState } from "react";
const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const createParticle = () => {
      const id = Math.random().toString(36).substr(2, 9);
      setParticles((prev) => [
        ...prev,
        {
          id,
          size: Math.random() * 4 + 2,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          xDir: Math.random() * 2 - 1,
          yDir: Math.random() * 2 - 1,
          duration: Math.random() * 5 + 3,
        },
      ]);
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, 8000);
    };
    const interval = setInterval(createParticle, 150);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="particle-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.x}px`,
            top: `${p.y}px`,
            animation: `moveParticles ${p.duration}s linear infinite`,
            "--x-dir": p.xDir,
            "--y-dir": p.yDir,
          }}
        />
      ))}
      <style>
        {`
          .particle-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            pointer-events: none;
            background: #fff;
          }
          .particle {
            position: absolute;
            background-color: #000;
            border-radius: 50%;
            opacity: 0.8;
          }
          @keyframes moveParticles {
            0% {
              transform: translateY(0) translateX(0);
              opacity: 0.8;
            }
            100% {
              transform: translateY(calc(100vh * var(--y-dir))) translateX(calc(100vw * var(--x-dir)));
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};
export default ParticleBackground;