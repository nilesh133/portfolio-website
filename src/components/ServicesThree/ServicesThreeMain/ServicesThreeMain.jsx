import React, { useRef } from "react";
import "./servicesthreemain.css";
import { useScroll } from "framer-motion";
import ServicesThreeCard from "../ServicesThreeCards/ServicesThreeCard";

const ServicesThreeMain = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const servicesList = [
    {
        services_header: "Frontend Development",
        services_points: [
            {
                services_header: "Responsive & Interactive UI",
                services_desc: "Crafting sleek, mobile-friendly, and engaging user interfaces."
            },
            {
                services_header: "Modern Tech Stack",
                services_desc: "Proficient in React, TailwindCSS, Framer Motion, and GSAP for smooth animations."
            },
            {
                services_header: "Optimized Performance",
                services_desc: "Ensuring fast load times and seamless user experience."
            },
            // {
            //     services_header: "Reusable Components",
            //     services_desc: "Writing clean, modular, and maintainable code."
            // },
            // {
            //     services_header: "API Integration",
            //     services_desc: "Connecting frontend with RESTful & GraphQL APIs for dynamic content."
            // }
        ]
    },
    {
        services_header: "Backend Development",
        services_points: [
            {
                services_header: "Scalable Architecture",
                services_desc: "Designing robust and efficient backend systems."
            },
            {
                services_header: "Database Management",
                services_desc: "Working with MySQL, MongoDB, and Firebase for secure data storage."
            },
            {
                services_header: "Authentication & Security",
                services_desc: "Implementing JWT-based authentication and role-based access control."
            },
            // {
            //     services_header: "API Development",
            //     services_desc: "Creating RESTful and GraphQL APIs for seamless data exchange."
            // },
            // {
            //     services_header: "Optimized Server Performance",
            //     services_desc: "Using Node.js, Express, and caching techniques to enhance speed."
            // }
        ]
    },
    {
        services_header: "UI/UX & Design",
        services_points: [
            {
                services_header: "Creative & Modern Designs",
                services_desc: "Crafting aesthetically pleasing and user-friendly designs."
            },
            {
                services_header: "Wireframing & Prototyping",
                services_desc: "Creating design prototypes using Figma & Adobe XD."
            },
            {
                services_header: "Color & Typography",
                services_desc: "Ensuring visually appealing and consistent branding."
            },
            // {
            //     services_header: "User-Centric Approach",
            //     services_desc: "Focusing on accessibility, usability, and intuitive navigation."
            // },
            // {
            //     services_header: "Animations & Microinteractions",
            //     services_desc: "Adding smooth transitions using Framer Motion & GSAP."
            // }
        ]
    }
];

  return (
    <div className="services_main plus-jakarta-sans-font">
      <div className="services_main_container">
        <div className="services_left">
          <h2>Services I Provide</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sem
            id nisi sagittis bibendum. Donec rutrum, lectus in efficitur
            fermentum, arcu nunc dictum purus, non consectetur ipsum nunc at
            velit.
          </p> */}
        </div>

        <div className="services_right" ref={container}>
          {servicesList.map((service, i) => {
            const targetScale = 1 - (servicesList.length - i) * 0.05;
            return (
              <ServicesThreeCard
                key={`p_${i}`}
                i={i}
                {...service}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesThreeMain;
