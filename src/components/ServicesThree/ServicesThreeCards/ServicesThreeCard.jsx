import { useTransform, motion, useScroll, color } from "framer-motion";
import "./servicesthreecard.css";
import { useRef } from "react";

const ServicesThreeCard = ({
  i,
  bgColor,
  progress,
  range,
  targetScale,
  ...otherProps
}) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  console.log(otherProps)

  return (
    <div ref={container} className="servicesthreecard_container">
      <motion.div
        style={{
          scale,
        //   backgroundColor: bgColor,
          top: `calc(-5vh + ${i * 25}px)`,
        //   color: otherProps.color,
        }}
        className="servicesthree_card"
      >
        <div className="servicesthree_card_main">
          <div className="servicesthree_card_container">
            <h1>{otherProps?.services_header}</h1>
            <ul>
                {
                  otherProps?.services_points?.map((service, index) => (
                    <li key={index}>
                        <div className="servicesthree_card_points">
                            <h3>{service.services_header}</h3>
                            <p>{service.services_desc}</p>
                        </div>
                    </li>
                  ))
                }
  
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesThreeCard;