import React from 'react';
import './herotwo.css';
import { herotwodesigner, herotwodeveloper, herotwoname} from '../../animations/framer-motion/herotwo';
import { motion } from 'framer-motion';

const HeroTwo = () => {
  return (
    <div className='herosection_wrapper'>
        <div className='herosection_inner'>
            <div className='herosection_main'>
                <div className='herosection_heading'>
                    <h3>
                        Hi! Glad to have you here. I'm
                    </h3>
                </div>

                <div className='herosection_name_fncontainer'>
                    <div className='herosection_name_inner'>
                        <div className='herosection_name_text herosection_name_fn'>
                            <motion.h1 variants={herotwoname} initial='initial' animate="animate">Nilesh</motion.h1>
                            <motion.div variants={herotwodesigner} initial='initial' animate="animate" className='herosection_name_label herosection_name_label_fn'>
                                Designer
                            </motion.div>
                        </div>
                        <div className='herosection_name_text herosection_name_ln'>
                        <motion.h1 variants={herotwoname} initial='initial' animate="animate">Prajapati</motion.h1>
                            <motion.div variants={herotwodeveloper} initial='initial' animate="animate" className='herosection_name_label herosection_name_label_ln'>
                                Frontend Developer
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroTwo