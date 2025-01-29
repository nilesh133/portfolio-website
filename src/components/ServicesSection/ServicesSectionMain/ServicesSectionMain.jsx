import React, { useRef } from "react";
import "./servicessectionmain.css";
import ServicesCard from "../ServicesCard/ServicesCard";
import { backIn, motion, useScroll, useTransform } from "framer-motion";

const ServicesSectionMain = () => {
  const services = [
    {
      title: "Brand Strategy",
      description: "It's the core of your company's identity. It guides all business decisions, ensuring a consistent and impactful presence in the market.",
      backGround: "#c3baff",
      videoUrl: "https://serious.business/wp-content/uploads/2024/07/Strategy_New.mp4"
    },
    {
      title: "Visual Identity",
      description: 'Visual identity is the unique visual language of your brand, creating memorable impressions and emotional connections with your audience.',
      backGround: "#ffffff",
      videoUrl: "https://serious.business/wp-content/uploads/2024/06/Identity_Low.mp4"
    },
    {
      title: "Website",
      description: "Our website design services blend innovation and creativity to deliver user-centric solutions that elevate your brand and engage your audience.",
      backGround: "#fed35b",
      videoUrl: "https://serious.business/wp-content/uploads/2024/06/Website_Low.mp4"
    },
    {
      title: "Product",
      description: "Our product design services focus on creating intuitive and aesthetically pleasing products that resonate with your audience and stand out in the market.",
      backGround: "#1e1e1e",
      videoUrl: "https://serious.business/wp-content/uploads/2024/06/Product_Low.mp4"
    }
  ];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  // Transform scroll progress to translateY value
  const containerInnerY = useTransform(scrollYProgress, [0, 1], ["0px", "-300px"]);

  return (
    <div className="p_services" ref={container}>
      <motion.div
        className="p_services_inner"
        style={{
          y: containerInnerY, // Bind the transform value to the y property
        }}
      >
        {services.map((services, i) => {
          const targetScale = 1 - (services.length - i) * 0.05;

          return (
            <ServicesCard
              key={`p_${i}`}
              i={i}
              services={services}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default ServicesSectionMain;
