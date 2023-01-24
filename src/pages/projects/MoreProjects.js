import React from "react";
import { projects } from "../../assets/projects";
import { useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillEye,
  AiOutlineGithub,
} from "react-icons/ai";
import { useRef } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const MoreProjects = () => {
  const [index, setIndex] = useState(0);
  const [isDown, setIsDown] = useState(false);
  const [firstPos, setFirstPos] = useState();
  const ulRef = useRef();
  let diff;
  useEffect(() => {
    ulRef.current.style.transform = `translateX(-${index * 100}%)`;
  }, [index]);

  function mouseDown(e) {
    if (e.type === "mousedown") e.preventDefault();
    setIsDown(true);
    e.type === "mousedown" && setFirstPos(e.clientX);
    e.type === "touchstart" && setFirstPos(e.touches[0].clientX);
  }

  function mouseDrag(e) {
    if (!isDown) return;
    if (e.type === "mousemove") e.preventDefault();

    if (e.type === "mousemove") diff = firstPos - e.clientX;
    if (e.type === "touchmove") diff = firstPos - e.touches[0].clientX;
    let scrollX = index * parseInt(ulRef.current.clientWidth);
    ulRef.current.style.transform = `translateX(-${scrollX + diff}px)`;
  }
  function mouseUp(e) {
    if (e.type === "mousemove") diff = firstPos - e.clientX;
    if (e.type === "touchmove") diff = firstPos - e.touches[0].clientX;

    setIsDown(false);
    if (diff > 100 && index < projects.length - 1) {
      setIndex((prev) => prev + 1);
    }
    if (diff < -100 && index > 0) {
      setIndex((prev) => prev - 1);
    } else {
      ulRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }
  function mouseLeave() {
    setIsDown(false);
    ulRef.current.style.transform = `translateX(-${index * 100}%)`;
  }

  function handleLeft() {
    setIndex((prev) => prev - 1);
  }

  function handleRight() {
    index < projects.length - 1 && setIndex((prev) => prev + 1);
  }

  return (
    <>
      <div className="dots">
        {projects.map((p, i) => {
          return (
            <span
              key={i}
              className={`${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            ></span>
          );
        })}
      </div>

      <div
        className="more_projects"
       
      >
        {index != 0 && (
          <span className="left_icon" onClick={handleLeft}>
            <AiOutlineArrowLeft />
          </span>
        )}

        <ul
          ref={ulRef}
          style={{ transition: ".4s" }}
          onMouseDown={mouseDown}
          onMouseMove={mouseDrag}
          onMouseUp={mouseUp}
          onMouseLeave={mouseLeave}
          onTouchStart={mouseDown}
          onTouchMove={mouseDrag}
          onTouchEnd={mouseUp}
        >
          {projects.map((p) => {
            return (
              <li className="project" key={p.id}>
                <div className="img_container">
                  <img src={p.img} alt="" />
                </div>
                <div className="info">
                  <h2>{p.name}</h2>
                  <p>{p.desc}</p>
                  <div className="icons">
                    <a href={p.link} target="_blank" rel="noreferrer">
                      {" "}
                      <AiFillEye />
                    </a>
                    <a href="" className="github">
                      <AiOutlineGithub />
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {index < projects.length - 1 && (
          <span className="right_icon" onClick={handleRight}>
            {" "}
            <AiOutlineArrowRight />
          </span>
        )}
      </div>
    </>
  );
};

export default MoreProjects;
