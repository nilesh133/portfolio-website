import React from 'react';
import { IoIosFlower } from "react-icons/io";
import './skillstwomain.css';

const SkillsTwoMain = () => {
  return (
    <div className='skills_two_main plus-jakarta-sans-font'>
        <div className='skills_two_main_container'>
            <div className='skills_two_header'>
                <h1>My Tech Arsenal And Achievement</h1>
            </div>
            <div className='skills_two_achievements'>
                <span className='skills_two_achievements_icon'><IoIosFlower/></span>
                <span>
                    250+ questions solved<br/> on Leetcode
                </span>
                <span className='skills_two_achievements_icon'><IoIosFlower/></span>
                <span>5 star in Problem Solving, <br/> Java and Python</span>
                <span className='skills_two_achievements_icon'><IoIosFlower/></span>
            </div>
        </div>
    </div>
  )
}

export default SkillsTwoMain