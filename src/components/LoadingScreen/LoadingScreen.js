import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./loadingscreen.css"; // Add your custom styles
import { BsEmojiSmileFill } from "react-icons/bs";

const LoadingScreen = () => {
    const firstName = ['N', 'I', 'L', 'E', 'S', 'H'];
    const lastName = ['P', 'R', 'A', 'J', 'A', 'P', 'A', 'T', 'I'];

    const [animationComplete, setAnimationComplete] = useState(false);

    // Once the animation ends, remove the loading screen
    const handleAnimationComplete = () => {
        setAnimationComplete(true);
    };

    const nameVariants = {
        initial: {
            opacity: 0,
            translateY: "100%"
        },
        animate: (i) => ({
            translateY: "0%",
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 8, delay: (i * 0.1) + 0.3 },
        }),
    };

    const lastNameVariants = {
        initial: {
            opacity: 0,
            translateY: "100%"
        },
        animate: (i) => ({
            translateY: "0%",
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 8, delay: (i * 0.1) + 0.8 },
        }),
    };

    const smileyVariants = {
        initial: { left: "-100%", rotate: 0 },
        animate: {
            left: ["-50%", "20%", "0%"],
            rotate: [0, 1080, 1440],
            transition: {
                duration: 2,
                ease: "easeInOut",
            },
        },
    };

    return (
        <>
            <div className="p_loading_container">
                <div className="p_loading_left">
                    {
                        firstName.map((letter, idx) => {
                            return (
                                <motion.h1 vaiants={nameVariants} custom={idx} initial="initial" animate="animate">{letter}</motion.h1>
                            )
                        })
                    }
                </div>

                <motion.div
                    className='p_loading_smiley'
                    initial="initial"
                    animate="animate"
                    variants={smileyVariants}
                >
                    <BsEmojiSmileFill />
                </motion.div>

                <div className="p_loading_right">
                    {
                        lastName.map((letter, idx) => {
                            return (
                                <motion.h1 variants={lastNameVariants} custom={(lastName.length - idx)} initial="initial" animate="animate">{letter}</motion.h1>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default LoadingScreen;
