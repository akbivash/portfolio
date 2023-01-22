import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {motion} from 'framer-motion'
import { useState } from "react";
import { useEffect } from "react";
import { socialIcons } from "../../assets/icons";

const Contact = () => {
  const[isLoading, setIsLoading] = useState(false)
  const[emailSent, setEmailSent] = useState(false)
  const[showMessage, setShowMessage] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
setIsLoading(true)

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLETE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_ID
      )
      .then((result) => {
        result.status === 200 && setEmailSent(true);
       
      })
      .catch((err) => console.log(err));
    e.target.reset();

  };

  useEffect(() => {
    emailSent && setShowMessage(true);
    setIsLoading(false)
    setTimeout(() => {
      setShowMessage(false);
    }, 4000);
  }, [emailSent]);

  return (
    <>
    <motion.div className="contact" 
         initial={{opacity:0, y:20}}
   whileInView={{opacity:1, y:0}}
   transition={{duration:.4}}
    >
      <div className="heading">
        <h2> Want a conversation !</h2>
      </div>
      <form ref={form} onSubmit={sendEmail} className={`${showMessage && isLoading ? "blur form":"form"}`}>
        <div className="form_control">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form_control">
          <label htmlFor="">Email </label>
          <input
            type="text"
            name="user_email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form_control">
          <label htmlFor="">Message</label>
          <textarea
            name="user_message"
            placeholder="Type your message"
          ></textarea>
        </div>
        <input type="submit" value="send" readOnly className="submit_btn" />
       
        {isLoading &&
         <div className="loading"></div>
          }
      </form>
      {emailSent && showMessage &&
        <div className="msg_box">
          <h2>Thanks for your message</h2>
          <span>If your email is correct, you will get replay soon</span>
          <span>Enjoy</span>
        </div>
      }
      {showMessage && 
      <div className="blur"></div>
      }
    
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

    </>
  );
};

export default Contact;
