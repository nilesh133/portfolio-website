import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import "./experiencemain.css";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

import { MdOutlineDeveloperMode } from "react-icons/md";
import { TbCodeCircle2Filled } from "react-icons/tb";
import { SiVorondesign } from "react-icons/si";

const ExperienceMain = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const projects = [
    {
      title: "Software Developer",
      company: "Ace Analytics",
      timeline: "Feb 2023 - Present",
      duration: "2 years",
      bgColor: "#2f303d",
      color: "#f9dddf",
      description:
      [
        "Worked on various projects, from building a web application to creating a mobile app.",
        "Implemented responsive web designs using CSS frameworks like TailwindCSS, Bootstrap, and Material UI to ensure a seamless experience across devices.",
        "Built real-time applications using WebSockets (Socket.io) for features like live chat and notifications.",
      ],
      icon: TbCodeCircle2Filled,
    },
    {
      title: "React JS Developer",
      company: "Mirats Insights",
      timeline: "March 2022 - September 2022",
      duration: "6 months",
      bgColor: "#68a7f4",
      color: "#2f303d",
      description:
      [
        "Worked closely with the development team across various projects, leveraging expertise in React JS, Next JS, and Firebase.",,
        "Integrated Firebase Firestore to manage real-time data storage and retrieval",
      ],
      icon: SiVorondesign,
    },
    {
      title: "Frontend Developer",
      company: "Healohub Technologies",
      timeline: "Sep 2021 - Dec 2021",
      duration: "3 months",
      bgColor: "#bc2637",
      color: "#f9dddf",
      description: [
        "Managed all frontend responsibilities of the company as the sole Frontend Developer.",
        "Designed and implemented the frontend interface for a video call analytics section, empowering users to gain actionable insights and discern trends from their video conversations."
      ],
      icon: MdOutlineDeveloperMode,
    },
  ];

  return (
    <div ref={container} className="experience_main">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <ExperienceCard
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default ExperienceMain;
