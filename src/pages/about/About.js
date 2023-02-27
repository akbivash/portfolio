import React, { useRef, useState } from "react";
import "./about.css";
import { motion } from "framer-motion";
import { socialIcons } from "../../assets/icons";
import Typewriter from "./Typewriter";

const About = () => {
  return (
    <>
      <div className="about">

      <div className="top">
    <motion.div className="greeting"
    whileInView={{x:[-10,0]}}
    transition={{duration:.5}}
    >
    <h3>Hello, </h3><h1>Welcome!</h1>
      
   
    </motion.div>
       <div className="profession">
             <span> I'm </span>
          {/* <span>   <Typewriter words={["Developer", "Freelancer"]} /></span> */}
            </div>
          </div> 
      
         {/* end of top   */}
        <div className="bottom">
          <motion.div
            className="img_container"
            // initial={{ x: 10 }}
            whileInView={{ opacity: [0, 1]}}
            transition={{ duration: 0.5 }}
          >
            <img
              src={require('../../assets/images/biv.jpg')}
              alt=""
            />
          </motion.div>
          
         <div className="details">
         <motion.div
         className="paragraph"
            whileInView={{ opacity: [0, 1], y: [10, 0] }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
           <span> I am passionate about building excellent websites that improves the
            lives of people around the world.</span>
             I specialize in creating frontend
            design to backend for clients ranging from individuals and
            small-businesses all the way to large enterprise corporations.
            </motion.div>

            <motion.div className="name"
                 whileInView={{opacity:[0,1], y:[10,0]}}
          transition={{duration:1}}
            >
          <h2
          >Dipshikha Adhikari</h2>
         </motion.div>
              <motion.div
                className="social_icons_container"
                transition={{ delay: 2 }}
              >
                {socialIcons.map((icon, i) => {
                  return (
                    <motion.a
                      href={icon.link}
                      target="_blank"
                      key={icon.link}
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      {icon.icon}
                    </motion.a>
                  );
                })}
              </motion.div>
         </div>
         </div>
        </div>
    
    </>
  );
};

export default About;
