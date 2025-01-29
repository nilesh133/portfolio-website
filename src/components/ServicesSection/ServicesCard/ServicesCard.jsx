import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import "./servicescard.css";
import { servicesTitle } from "../../../animations/framer-motion/services";

const ServicesCard = ({ i, progress, range, targetScale, background, services }) => {
  const container = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false); // State to track animation trigger

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  const isInView = useInView(container, {
    once: true,
    margin: "-100px", // Adjust for earlier/later trigger
  });

  // Update the state when the element comes into view
  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div
      ref={container}
      className={"p_services_card_main"}
      style={{
        backgroundColor: services.backGround,
        scale,
        top: `calc(-5vh + ${(i + 1) * 165}px)`,
      }}
    >
      <motion.div className="p_services_card">
        <div className="p_services_card_inner">
          <div className="p_services_card_inner_container">
            <div className="p_services_card_inner_left">
              <div className="p_services_card_inner_left_container">
                <motion.div
                  variants={servicesTitle}
                  initial="initial"
                  animate={hasAnimated ? "animate" : "initial"} // Only animate once
                  className="p_services_card_inner_left_heading"
                >
                  {services.title}
                </motion.div>
                <div className="p_services_card_inner_left_description">
                  {services.description}
                </div>
              </div>
            </div>
            <div className="p_services_card_inner_right">
              <div className="p_services_card_inner_right_container">
                <div className="p_services_card_inner_right_video">
                  <video src={services.videoUrl} autoPlay controls loop></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesCard;
