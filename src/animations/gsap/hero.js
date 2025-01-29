import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const heroScrollGsap = (heroRef) => {
    gsap.to(heroRef.current, {
        scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "500px top",
            scrub: 1,
        },
        scale: 0.9,
        opacity: 0.4,
        duration: 1,
    });
};
