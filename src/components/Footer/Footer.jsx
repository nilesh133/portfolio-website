import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./footer.css";

import { FaLinkedinIn } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  return (
    <footer className="footer_main plus-jakarta-sans-font" ref={footerRef}>
      <div className="footer_container">
        <div className="footer_top">
          {/* Animated Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Great collaborations start with a simple hello.
          </motion.p>

          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            Let's Collab
          </motion.h1>

          <div className="hero_three_main_social">
            <span><FaLinkedinIn /></span>
            <span><FiInstagram /></span>
            <span><IoLogoGithub /></span>
            <span><FaXTwitter /></span>
          </div>
        </div>

        <div className="footer_bottom">
          <div className="footer_bottom_container">
            <div className="footer_bottom_item footer_bottom_left">
              <span><FiPhone /></span>
              <span>+91 9904332821</span>
            </div>
            <div className="footer_bottom_middle footer_bottom_item">
              <span><HiOutlineMail /></span>
              <span>nkpnilesh13@gmail.com</span>
            </div>
            <div className="footer_bottom_right footer_bottom_item">
              <span><HiOutlineLocationMarker /></span>
              <span>Ahmedabad, India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;