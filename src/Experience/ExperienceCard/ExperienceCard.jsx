import { useTransform, motion, useScroll, color } from "framer-motion";
import { useRef } from "react";
import "./experiencecard.css";
import { IoCalendarClear } from "react-icons/io5";
import { GiDuration } from "react-icons/gi";
import { TiArrowRightOutline } from "react-icons/ti";
import { LuSeparatorVertical } from "react-icons/lu";
import { RxDividerVertical } from "react-icons/rx";
import { GrOrganization } from "react-icons/gr";

const ExperienceCard = ({
  i,
  bgColor,
  progress,
  range,
  targetScale,
  ...otherProps
}) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="experience_cardContainer">
      <motion.div
        style={{
          scale,
          backgroundColor: bgColor,
          top: `calc(-5vh + ${i * 25}px)`,
          color: otherProps.color,
        }}
        className="experience_card"
      >
        <div className="experience_cardcontent">
          <div className="experience_cardcontent_header experience_cardcontent_item">
            <h1>{otherProps.title}</h1>
          </div>
          <div className="experience_cardcontent_company experience_cardcontent_item">
            <h3>
              <span>
                <GrOrganization />
              </span>
              {otherProps.company}</h3>
            <span className="experience_cardcontent_company_separator"><RxDividerVertical/></span>
            <h3>
              <span>
                <IoCalendarClear />
              </span>
              {otherProps.timeline}
            </h3>
            <span className="experience_cardcontent_company_separator"><RxDividerVertical/></span>
            <h3>
              <span>
                <IoCalendarClear />
              </span>
              {otherProps.duration}
            </h3>
          </div>
          <div className="experience_cardcontent_description experience_cardcontent_item">
            {otherProps.description &&
              otherProps.description.map((description) => {
                return (
                  <h3>
                    <span>
                      <TiArrowRightOutline />
                    </span>
                    {description}
                  </h3>
                );
              })}
            {/* <h3>{otherProps.description}</h3> */}
          </div>

          <div className="experience_cardcontent_mainicon">
            <span>
              <otherProps.icon/>
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceCard;
