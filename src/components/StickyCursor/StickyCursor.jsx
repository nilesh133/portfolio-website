import { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  transform,
  animate,
} from "framer-motion";
import "./stickycursor.css";

const StickyCursor = ({ activeSection }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorStyle, setCursorStyle] = useState({ backgroundColor: "#000" });
  const cursor = useRef(null);
  const cursorSize = isHovered ? 60 : 15;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  //Smooth out the mouse values
  const smoothOptions = { damping: 50, stiffness: 500, mass: 0.9 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const rotate = (distance) => {
    const angle = Math.atan2(distance.y, distance.x);
    animate(cursor.current, { rotate: `${angle}rad` }, { duration: 0 });
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    // const { left, top, height, width } = stickyElement?.current?.getBoundingClientRect();

    //center position of the stickyElement
    // const center = {x: left + width / 2, y: top + height / 2}

    // if(isHovered){

    //   //distance between the mouse pointer and the center of the custom cursor and
    //   const distance = {x: clientX - center.x, y: clientY - center.y}

    //   //rotate
    //   rotate(distance)

    //   //stretch based on the distance
    //   const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
    //   const newScaleX = transform(absDistance, [0, height/2], [1, 1.3])
    //   const newScaleY = transform(absDistance, [0, width/2], [1, 0.8])
    //   scale.x.set(newScaleX);
    //   scale.y.set(newScaleY);

    //   //move mouse to center of stickyElement + slightly move it towards the mouse pointer
    //   mouse.x.set((center.x - cursorSize / 2) + (distance.x * 0.1));
    //   mouse.y.set((center.y - cursorSize / 2) + (distance.y * 0.1));
    // }
    // else{
    //move custom cursor to center of stickyElement
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
    // }
  };

  const manageMouseOver = (e) => {
    setIsHovered(true);
  };

  const manageMouseLeave = (e) => {
    setIsHovered(false);
    animate(
      cursor.current,
      { scaleX: 1, scaleY: 1 },
      { duration: 0.1 },
      { type: "spring" }
    );
  };

  //   useEffect( () => {
  //     stickyElement?.current?.addEventListener("mouseenter", manageMouseOver)
  //     stickyElement?.current?.addEventListener("mouseleave", manageMouseLeave)
  //     window.addEventListener("mousemove", manageMouseMove);
  //     return () => {
  //       stickyElement?.current?.removeEventListener("mouseenter", manageMouseOver)
  //       stickyElement?.current?.removeEventListener("mouseleave", manageMouseLeave)
  //       window.removeEventListener("mousemove", manageMouseMove)
  //     }
  //   }, [isHovered])

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  const template = ({ rotate, scaleX, scaleY }) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };

  useEffect(() => {
    // Define colors for each section
    const sectionColors = {
      hero: "#000", // Orange
      about: "#fff", // Blue
      experience: "#fff", // Green
      skills: "#000", // Purple
      services: "#fff", // Yellow
      footer: "#000", // Dark Gray
    };

    // Change cursor color based on active section
    if (activeSection in sectionColors) {
      setCursorStyle({ backgroundColor: sectionColors[activeSection] });
    }
  }, [activeSection]);

  useEffect(() => {
    console.log(activeSection)
  }, [activeSection])
  

  return (
    <div className={"cursorContainer"}>
      <motion.div
        transformTemplate={template}
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          scaleX: scale.x,
          scaleY: scale.y,
          backgroundColor: cursorStyle.backgroundColor,
          display: activeSection == "projects" ? "none" : "block"
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        className={"cursor"}
        ref={cursor}
      ></motion.div>
    </div>
  );
};

export default StickyCursor;
