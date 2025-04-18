import React, { useRef } from "react";
import "./experiencetwo.css";

import ace_data_analytics_logo from "../../images/ExperienceThree/ace_data_analytics_logo.jpg";
import mirats_insights_logo from "../../images/ExperienceThree/miratsinsights_logo.jpg";
import healohub_logo from "../../images/ExperienceThree/healohub_logo.jpg";

import { TbTopologyStar2 } from "react-icons/tb";
import { useInView } from "framer-motion";

const ExperienceTwo = () => {

  const experienceData = [
    {
      company: "Ace Data Analytics",
      company_logo: ace_data_analytics_logo,
      profile_name: "Software Developer",
      job_type: "Full Time",
      duration: "2 years",
      timeline: "Feb 2023 - Present",
      location: "Ahmedabad, India",
      work_year: "2023",
      work_description: [
        // "Collaborated and coordinated with project leads and developers to gather requirements and establish project objectives and deliverables.",
        "Contributed to the development of a sourcing and distribution system for an Australia-based food warehouse and distribution company, central to the company’s core operations, which involves sourcing goods from suppliers and fulfilling orders for clients, along with modules for product configuration, supplier setup, and product-supplier mapping to ensure seamless operations and data consistency. Additionally, implemented WebSocket integration for real-time data transfer across the platform.",
        "Spearheaded the development of a robust payroll management system for an Australia-based food warehouse and distribution company. Responsibilities included designing and implementing seamless onboarding process for new employees, streamlined tracking of employee attendance, punch-in/punch-out records, and accurate calculation of wages.",
        "Developed a dynamic configuration system within a loan application, empowering administrators to customize commission structures for diverse agent tiers, with animated workflows facilitating smooth navigation and user engagement",
        "Specialized in crafting appealing designs, integrating APIs for real-time data, and implementing seamless frontend functionalities to create user-friendly applications.",
      ],
    },
    {
      company: "Mirats Insights",
      company_logo: mirats_insights_logo,
      profile_name: "React JS Developer Intern",
      job_type: "Internship",
      duration: "6 months",
      timeline: "April 2022 - Sep 2022",
      location: "Mumbai, India",
      work_year: "2022",
      work_description: [
        "Worked closely with the development team across various projects, leveraging expertise in React JS, Next JS, and Firebase.",
        "Created a versatile note-taking application using React JS, Material UI, and Firebase, boasting features such as rich text formatting, image and link embedding, and seamless data storage.",
      ],
    },
    {
      company: "Healohub Technologies",
      company_logo: healohub_logo,
      profile_name: "Frontend Developer Intern",
      job_type: "Internship",
      duration: "4 months",
      timeline: "Sep 2021 - Dec 2021",
      location: "Bangalore, India",
      work_year: "2021",
      work_description: [
        "Managed all frontend responsibilities of the company as the sole Frontend Developer.",
        "Designed and implemented the frontend interface for a video call analytics section, empowering users to gain actionable insights and discern trends from their video conversations.",
      ],
    },
  ];

  return (
    <div className="experience_main plus-jakarta-sans-font">
      <div className="experience_container">
        <div className="experience_wrapper">
          {/* Shadow top */}
          <div className="experience_shadow_top">

          </div>

          <div className="experience_progress">
            <div className="experience_progress_bar"></div>
          </div>

          {experienceData.map((experience, index) => (
            <div className="experience_card" key={index}>
              {/* Experience left */}
              <div className="experience_card_left">
                <h3>{experience.work_year}</h3>
              </div>

              {/* Experience timeline indicator */}
              <div className="experience_card_middle">
                <div className="experience_card_timeline_circle">
                  <div className="experience_card_timeline_circle_sub"></div>
                </div>
              </div>

              {/* Experience right */}
              <div className="experience_card_right">
                <div className="experience_card_right_company">
                  <div className="experience_card_right_company_logo">
                    <img src={experience?.company_logo} alt="" />
                  </div>
                  <div className="experience_card_right_company_details">
                    <h1>{experience?.company}</h1>
                    <h3>{experience?.profile_name}</h3>
                  </div>
                </div>
                <div className="experience_card_right_company_otherdetails">
                  <span>{experience?.job_type}</span>
                  <TbTopologyStar2 />
                  <span>
                    {experience?.timeline}({experience?.duration})
                  </span>
                  <TbTopologyStar2 />
                  <span>{experience?.location}</span>
                </div>

                <div className="experience_card_right_company_work">
                  {experience.work_description.map((description, i) => (
                    <p key={i}>{description}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Shadow bottom */}
          <div className="experience_shadow_bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTwo;
