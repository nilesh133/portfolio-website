export const heroProfileAnim = {
    initial: {
        translateY: "-100%",
        opacity: 0,
    },
    animate: (i) => ({
        translateY: "0%",
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: [0.76, 0, 0.24, 1],
            delay: i * 0.1,
        },
    }),
};


export const heroHeadingAnim = {
    initial: {
        translateX: "-10px",
        opacity: 0,
    },
    animate: {
        translateX: "0px",
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: [0.76, 0, 0.24, 1]
        },
    }
};