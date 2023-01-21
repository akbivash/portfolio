import React from "react";
import { projects } from "../../assets/projects";
import { useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillEye,
} from "react-icons/ai";
import { useRef } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const MoreProjects = () => {
  const [index, setIndex] = useState(0);
  const [clientWidth, setClientWidth] = useState();
  const [itemPerScreen, setItemPerScreen] = useState();
  const [hideIcon, setHideIcon] = useState();
  const sliderRef = useRef();
  const ulRef = useRef();

  useEffect(() => {
    setClientWidth(sliderRef.current.clientWidth);
    setItemPerScreen(
      getComputedStyle(sliderRef.current).getPropertyValue("--items-per-screen")
    );
    window.addEventListener("resize", () => {
      setIndex(0);
    });
  }, [index]);

  function handleLeft() {
    setIndex((prev) => prev - 1);
  }

  function handleRight() {
    index < projects.length - 1 && setIndex((prev) => prev + 1);
  }

  return (
    <motion.div
      className="more_projects"
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {index != 0 && (
        <span className="left_icon" onClick={handleLeft}>
          <AiOutlineArrowLeft />
        </span>
      )}
      <ul
        ref={ulRef}
        style={{
          transform: `translateX(-${clientWidth * index}px)`,
          transition: ".3s",
        }}
      >
        {projects.map((p) => {
          return (
            <li className="project" key={p.id} ref={sliderRef}>
              <div className="info">
                <h2>{p.name}</h2>
                <p>{p.desc}</p>
                <a href={p.link} target="_blank" rel="noreferrer">
                  {" "}
                  <AiFillEye />
                </a>
              </div>
              <img src={p.img} alt="" />
            </li>
          );
        })}
      </ul>
      {index < projects.length - itemPerScreen && (
        <span className="right_icon" onClick={handleRight}>
          {" "}
          <AiOutlineArrowRight />
        </span>
      )}
    </motion.div>
  );
};

export default MoreProjects;
