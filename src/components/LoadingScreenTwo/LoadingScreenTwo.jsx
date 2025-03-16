import "./loadingscreentwo.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const words = [
  "Please wait while I debug reality.",
  "Initializing awesomeness... Almost there!",
  "Welcome to My Portfolio!",
];

const PreLoader = ({ setLoadingComplete }) => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) {
      setTimeout(() => setLoadingComplete(true), 1500);
    } else {
      setTimeout(() => {
        setIndex(index + 1);
      }, words[index] ? 300 + words[index].length * 50 : 300);
    }
  }, [index]);

  const letterAnimation = {
    hidden: { opacity: 0, 
        // y: 10
     },
    visible: (i) => ({
      opacity: 1,
    //   y: 0,
      transition: { delay: i * 0.02, duration: 0.1, ease: [0.76, 0, 0.24, 1] },
    }),
  };

  const fadeOutAnimation = {
    hidden: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.1, ease: [0.76, 0, 0.24, 1] } },
  };

  const slideUp = {
    initial: { top: 0 },
    exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  return (
    <motion.div
    variants={slideUp}
    initial="initial"
    exit="exit"
    className="introduction plus-jakarta-sans-font"
  >
      {dimension.width > 0 && (
        <motion.p
          key={index}
          variants={fadeOutAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {words[index].split("").map((char, i) => (
            <>
            {
                char === " " ? <>&nbsp;</> :   <motion.span
                key={i}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                {char}
              </motion.span>
            }
            </>
          
          ))}
        </motion.p>
      )}
    </motion.div>
  );
};

export default PreLoader;
