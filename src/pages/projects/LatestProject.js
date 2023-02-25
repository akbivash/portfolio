import React, { useState } from "react";
import "./projects.css";
import { motion } from "framer-motion";

const LatestProject = () => {
  return (
     
      <div className="latest_project">
      <div className="bg_image"></div>
          <div className="content">
          <motion.span
            initial={{
              y: 10,
              opacity: 0,
              
            }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            LATEST PROJECT
          </motion.span>
          <motion.h2
          viewport={{ once: true }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: .7 , delay:.3}}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Fashio Nepal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: .7,delay:.6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Combine with ideas of owner, Anonymous . Designed a full stack
            E-commerce app with super cool features.

          </motion.p>
          <motion.a 
           initial={{ opacity: 0, y: 10 }}
            transition={{ duration: .7, delay:.9 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          href="https://fashionepafrontend.onrender.com" target="_blank">See project </motion.a>
        </div>
      </div>
   
  );
};

export default LatestProject;
