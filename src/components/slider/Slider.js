import React from "react";
import { useState } from "react";
import {
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
    AiFillEye,
    AiOutlineGithub,
} from "react-icons/ai";
import { useRef } from "react";
import { useEffect } from "react";
import { urlFor } from "../../client";
import './slider.css'

const Slider = ({ data, index, setIndex }) => {
    const [isDown, setIsDown] = useState(false);
    const [firstPos, setFirstPos] = useState();
    const ref = useRef();
    let diff;


    useEffect(() => {
        ref.current.style.transform = `translateX(calc(-${index * 100}% ))`;
    }, [index]);

    function mouseDown(e) {
        if (e.type === "mousedown") e.preventDefault();
        setIsDown(true);
        ref.current.style.cursor = 'grab'

        e.type === "mousedown" && setFirstPos(e.clientX);
        e.type === "touchstart" && setFirstPos(e.touches[0].clientX);
    }

    function mouseDrag(e) {
        if (!isDown) return;

        if (e.type === "mousemove") e.preventDefault();
        if (e.type === "mousemove") diff = firstPos - e.clientX;
        if (e.type === "touchmove") diff = firstPos - e.touches[0].clientX;
        let scrollX = index * parseInt(ref.current.clientWidth);
        ref.current.style.transform = `translateX(-${scrollX + diff}px)`;
        ref.current.style.cursor = 'grab'
    }
    function mouseUp(e) {
        if (e.type === "mousemove") diff = firstPos - e.clientX;
        if (e.type === "touchmove") diff = firstPos - e.touches[0].clientX;
        ref.current.style.cursor = 'default'

        setIsDown(false);
        if (diff > 100 && index < data.length - 1) {
            setIndex((prev) => prev + 1);
        }
        if (diff < -100 && index > 0) {
            setIndex((prev) => prev - 1);
        } else {
            ref.current.style.transform = `translateX(-${index * 100}%)`;
        }
    }
    function mouseLeave() {
        setIsDown(false);
        ref.current.style.cursor = 'default'
        ref.current.style.transform = `translateX(-${index * 100}%)`;
    }

    function handleLeft() {
        setIndex((prev) => prev - 1);
    }

    function handleRight() {
        index < data.length - 1 && setIndex((prev) => prev + 1);
    }

    return (
        <div className="slides_container">
            <div className="dots">
                {data.length !== 0 && data.map((p, i) => {
                    return (
                        <span
                            key={p._id}
                            className={`${i === index ? "active" : ""}`}
                            onClick={() => setIndex(i)}
                        ></span>
                    );
                })}
            </div>
            {index != 0 && (
                <span className="left_icon" onClick={handleLeft}>
                    <AiOutlineArrowLeft />
                </span>
            )}
            {index < data.length - 1 && (
                <span className="right_icon" onClick={handleRight}>
                    {" "}
                    <AiOutlineArrowRight />
                </span>
            )}
            <div
                className="slides"
                ref={ref}
                style={{ transition: ".4s" }}
                onMouseDown={mouseDown}
                onMouseMove={mouseDrag}
                onMouseUp={mouseUp}
                onMouseLeave={mouseLeave}
                onTouchStart={mouseDown}
                onTouchMove={mouseDrag}
                onTouchEnd={mouseUp}
            >
                {data.length !== 0 && data.map((p) => {
                    return (
                        <div className="slide" key={p._id}>
                            <div className="img_container">
                                <img src={urlFor(p.image.asset._ref)} alt="" />
                            </div>
                            <div className="info">
                                <h2>{p.name}</h2>
                                <p>{p.desc}</p>
                                <div className="icons">
                                    <a href={p.link} className='live' target="_blank" rel="noreferrer">
                                        {" "}
                                        see live
                                    </a>
                                    <a href={p.githubLink} target='_blank' className="github">
                                        <AiOutlineGithub />
                                    </a>
                                </div>
                                <div className="stacks">
                                    <h4>Used stacks</h4>
                                    <ul>
                                        {p.stacks.map(s => {
                                            return <img key={s._key} src={urlFor(s.asset._ref)} alt="" />
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Slider;
