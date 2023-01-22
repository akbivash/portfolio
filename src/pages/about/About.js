import React, { useRef, useState } from "react";
import "./about.css";
import { motion } from "framer-motion";
import { socialIcons } from "../../assets/icons";
import Typewriter from "./Typewriter";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="gradient"></div>

        <div className="top">
          <div className="top_content">
            <div className="title">
              <span className="name">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2>Dipshikha</h2>
                  <h2>Adhikari</h2>
                </motion.div>
              </span>
              <div className="moving_text">
              I'm a  <Typewriter words={["developer", "designer"]} />
              </div>
            </div>
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
          {/* end of top content  */}

         {/* img container  */}
          <motion.div
            className="img_container"
            initial={{ x: 10 }}
            whileInView={{ opacity: [0, 1], x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://scontent.fbhr1-1.fna.fbcdn.net/v/t1.6435-9/185209661_2936085376660919_5178820856626075728_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=oB9tjoxjzaIAX9oaC-k&_nc_ht=scontent.fbhr1-1.fna&oh=00_AfDmaX8EbNbWUEFOLElge-im7vN0M4oY4xIwOaQDWlbDOA&oe=63D085FF"
              alt=""
            />
          </motion.div>
        </div>
        {/* end of top  */}
        <div className="bottom">
          <motion.p
            whileInView={{ opacity: [0, 1], y:[10,0] }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            I am passionate about building excellent websites that improves the
            lives of people around the world. I specialize in creating frontend
            design to backend for clients ranging from individuals and
            small-businesses all the way to large enterprise corporations.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default About;
