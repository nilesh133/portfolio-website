import React, { useEffect, useRef } from "react";
import "./navbar.css";
import { navScrollGsap } from "../../animations/gsap/navbar";

const Navbar = () => {
  const navMainRef = useRef(null);
  const navMainInnerRef = useRef(null);

  useEffect(() => {
    navScrollGsap(navMainRef, navMainInnerRef);
  }, []);

  return (
    <nav className="p_nav_wrapper">
      <div className="p_nav_inner">
        <div className="p_nav_main" ref={navMainRef}>
          <div className="p_nav_main_inner" ref={navMainInnerRef}></div>
          <div className="p_nav_main_container">
            <div className="p_nav_left">
              <div className="p_nav_left_container">
                <div className="p_nav_left_item">
                    <svg
                      viewBox="0 0 104 104"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M72.3653 4.0896C78.5993 6.7085 84.1923 10.4596 88.9963 15.2317C89.5923 15.8248 90.1753 16.4612 90.7383 17.0544H51.9943C41.4193 17.0544 31.9203 21.7831 25.4665 29.0956H98.9723C99.4083 29.9027 99.8193 30.8425 100.205 31.7525C102.168 36.3594 103.434 41.1937 103.992 46.085H49.1203C45.8343 46.085 43.1593 48.758 43.1593 52.024C43.1593 55.293 45.8343 57.966 49.1203 57.966H103.983C103.42 62.912 102.157 67.687 100.205 72.266C99.8083 73.206 99.3813 74.095 98.9293 75.064H49.1203C46.0033 75.064 42.9743 74.43 40.1183 73.231C37.3673 72.071 34.8953 70.406 32.7753 68.299C30.6543 66.192 28.9883 63.73 27.8233 60.992C26.6151 58.156 26.0027 55.125 26.0027 52.03C26.0027 50.009 26.2667 48.073 26.7812 46.085H0C0.5607 41.1937 1.8264 36.3539 3.7808 31.7606C4.1727 30.8452 4.5865 29.9515 5.0274 29.0604C7.5561 23.9444 10.9014 19.3023 14.9924 15.2371C19.7967 10.4623 25.3903 6.7112 31.6233 4.0923C38.0803 1.3785 44.9343 0 51.9943 0C59.0553 0 65.9093 1.3758 72.3653 4.0896Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M51.9943 86.948H90.7383C90.1723 87.538 89.5923 88.175 88.9963 88.768C84.1923 93.54 78.5983 97.291 72.3653 99.91C65.9093 102.624 59.0553 104.002 51.9943 104.002C44.9333 104.002 38.0793 102.627 31.6233 99.913C25.39 97.294 19.7937 93.545 14.9922 88.773C10.188 83.999 6.4181 78.471 3.7805 72.277C1.837 67.711 0.576797 62.914 0.0105972 58.077H17.3412C20.2183 74.419 34.6613 86.948 51.9943 86.948Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                </div>
                <div className="p_nav_left_item">
                  <p className="p_nav_logo">
                    Eclipso
                  </p>
                </div>
              </div>
            </div>
            <div className="p_nav_right">
              <div className="p_nav_right_main">
                <div className="p_nav_right_inner">
                  <ul>
                    <li>Pricing</li>
                    <li>Agency</li>
                    <li>Work</li>
                    <li>Blog</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
