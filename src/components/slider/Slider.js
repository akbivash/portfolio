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
    const [maxSlide, setMaxSlide] = useState()
    const [clientWidth, setClientWidth] = useState()
    const slideRef = useRef();
    const containerRef = useRef()
    let diff;




    useEffect(() => {
        const itemPerScreen = parseInt(getComputedStyle(containerRef.current).getPropertyValue('--items-per-screen'))
        setClientWidth(containerRef.current.clientWidth / itemPerScreen)
        if (data.length !== 0) {
            if(data.length < itemPerScreen ){
                setMaxSlide(1)
               }else{
                setMaxSlide(data.length - itemPerScreen + 1)

               }
        }

       
    }, [data])


    useEffect(() => {
        window.addEventListener("resize", debounce(handleResize, 200))
        containerRef.current.style.cursor = 'grab'
     
        if (maxSlide > 0 &&  maxSlide <= index) {
            setIndex(maxSlide - 1)
        } else {
            containerRef.current.style.transform = `translateX(calc(-${index * clientWidth}px ))`;
        }
        return () => window.removeEventListener("resize", debounce(handleResize, 200))
    }, [index, data, clientWidth]);



    function debounce(func, time) {
        var time = time || 100; // 100 by default if no param
        var timer;
        return function (...args) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args)
            }, time);
        };
    }

    function handleResize() {
        const itemPerScreen = parseInt(getComputedStyle(containerRef.current).getPropertyValue('--items-per-screen'))
        setClientWidth(containerRef.current.clientWidth / itemPerScreen)
       if(data.length < itemPerScreen ){
        setMaxSlide(1)
       }
       else{
        setMaxSlide(data.length - itemPerScreen + 1)
       }
    }


    function mouseDown(e) {
        if (e.type === "mousedown") e.preventDefault();
        setIsDown(true);
        containerRef.current.style.cursor = 'grabbing'
        e.type === "mousedown" && setFirstPos(e.clientX);
        e.type === "touchstart" && setFirstPos(e.touches[0].clientX);
    }

    function mouseDrag(e) {
        if (!isDown) return;
        if (e.type === "mousemove") e.preventDefault();
        if (e.type === "mousemove") diff = firstPos - e.clientX;
        if (e.type === "touchmove") diff = firstPos - e.touches[0].clientX;
        let scrollX = index * parseInt(clientWidth);
        containerRef.current.style.transform = `translateX(-${scrollX + diff}px)`;
        containerRef.current.style.cursor = 'grabbing'

    }
    function mouseUp(e) {
        if (e.type === "mousemove") diff = firstPos - e.clientX;
        if (e.type === "touchmove") diff = firstPos - e.touches[0].clientX;
        containerRef.current.style.cursor = 'default'
        setIsDown(false);
        if (diff > 100 && index < maxSlide) {
            setIndex((prev) => prev + 1);
        }
        if (diff < -100 && index > 0) {
            setIndex((prev) => prev - 1);
        }
        else {
            containerRef.current.style.transform = `translateX(-${index * clientWidth}px)`;
        }

    }

    function mouseLeave() {
        if (!isDown) return;
        containerRef.current.style.transform = `translateX(-${index * clientWidth}px)`;
        setIsDown(false);
        containerRef.current.style.cursor = 'default'
    }

    function handleLeft() {
        setIndex((prev) => prev - 1);
    }

    function handleRight() {
        setIndex((prev) => prev + 1);

    }
    return (
        <div className="slides_container">
            <div className="dots">
                {data.length !== 0 && data.slice(0, maxSlide).map((p, i) => {


                    return (
                        <span
                            key={p._id}
                            className={`${i === index ? "active" : ""}`}
                            onClick={() => setIndex(i)}
                        ></span>
                    );
                })}
            </div>
            {index != 0 && maxSlide != 0 && (
                <span className="left_icon" onClick={handleLeft}>
                    <AiOutlineArrowLeft />
                </span>
            )}
            {index < maxSlide - 1 && (
                <span className="right_icon" onClick={handleRight}>
                    {" "}
                    <AiOutlineArrowRight />
                </span>
            )}
            <div
                className="slides"
                style={{ transition: ".4s" }}
                ref={containerRef}
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

                        <div className="slide" key={p._id} ref={slideRef} >
                            <div className="img_container">
                                <img src={urlFor(p.image.asset._ref)} alt="" />
                            </div>
                            <div className="info">
                                <div className="top">
                                    <p>{p.desc}</p>
                                    <a href={p.githubLink} target='_blank' className="github">
                                        <AiOutlineGithub />
                                    </a>
                                </div>

                                <a href={p.link} target='_blank' className="live">live</a>
                                {/* <div className="stacks">
                                    <h4>Used stacks</h4>
                                    <ul>
                                        {p.stacks.map(s => {
                                            return <img key={s._key} src={urlFor(s.asset._ref)} alt="" />
                                        })}
                                    </ul>
                                </div> */}
                            </div>
                            {/* end of info  */}

                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Slider;
