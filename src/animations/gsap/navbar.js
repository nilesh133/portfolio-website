import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const navScrollGsap = (navMainRef, navMainInnerRef) => {
    gsap.to(navMainRef.current, {
        scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "500px top",
            scrub: 1,
            // markers: true
        },
        width: "60%",
        boxShadow: "0 0 10px #0000001a;",
        duration: 1,
    });

    gsap.to(navMainInnerRef.current, {
        scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "500px top",
            scrub: 1,
            // markers: true
        },
        opacity: 1,
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
        duration: 1,
    });
};
