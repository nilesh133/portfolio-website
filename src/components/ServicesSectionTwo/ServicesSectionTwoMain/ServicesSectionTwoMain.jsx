import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./servicessectiontwomain.css";
import ServicesSectionText from "../ServicesSectionText/ServicesSectionText";

const ServicesSectionTwoMain = () => {
  const containerRef = useRef(null);

  // Hook to track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // Adjust for triggering the animations
  });

  // Array of text items
  const texts = [
    "Branding",
    "Web Design",
    "Motion",
    "Development",
    "Marketing",
    "Apps",
  ];

  return (
    <div ref={containerRef} className="scrolling_text_container">
      <div className="scrolling_text_inner">
        {
          texts.map((text, index) => {
            const si = (index - 1) * 0.2;
            const ei = si + 0.2
            return (
              <ServicesSectionText
                scrollYProgress={scrollYProgress}
                text={text}
                index={index}
                range={[si, ei]}
            />
            )
          })
        }
      </div>
    </div>
  );
};

export default ServicesSectionTwoMain;
