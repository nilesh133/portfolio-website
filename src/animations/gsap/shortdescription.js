import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const sdMainContAnimGsap = (sdWrapper, sdContentContRef) => {
    // const contentElement = sdContentContRef.current;

    // gsap.to(contentElement, {
    //     scrollTrigger: {
    //         trigger: sdWrapper.current,
    //         start: "top top",
    //         end: "bottom bottom",
    //         scrub: 1,
    //     },
    //     position: "fixed",
    //     top: 0,
    //     left: 0
    // });
};

export const sdVideoMaskAnimGsap = (sdWrapper, sdContentMaskRef) => {
    gsap.to(sdContentMaskRef.current, {
        scrollTrigger: {
            trigger: sdWrapper.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            // markers: true,
            pin: true
        },
        clipPath: "circle(100%)",
    });
};