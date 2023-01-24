import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const blinkingAnim = keyframes`
0%{opacity:0}
100%{opacity:1}
`;

const Span = styled.span`
  position: relative;
  background: -webkit-linear-gradient(var(--primary-1), rgb(121, 226, 111));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &::after {
    content: "|";
    position: absolute;
    right: -1rem;
    top: 0;
    height: 100%;
    background: -webkit-linear-gradient(var(--primary-1), rgb(121, 226, 111));
    animation-name: ${blinkingAnim};
    animation-iteration-count: infinite;
    animation-duration: 0.5s;
  }
`;
function Typewriter({ words }) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(200);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let fullText = words[index];
    let timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(fullText.slice(0, text.length + 1));
        setTypingSpeed(200);
      }
    }, typingSpeed);
    if (!isDeleting && text === fullText) {
      setTypingSpeed(1500);
      setIsDeleting(true);
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  useEffect(() => {
    let fullText = words[index];
    if (index === words.length) {
      setIndex(0);
    }
    let timeout = setTimeout(() => {
      if (isDeleting) {
        setText(fullText.slice(0, text.length - 1));
        setTypingSpeed(200);
      }
    }, typingSpeed);
    if (isDeleting && text === "") {
      setIndex((prev) => prev + 1);
      setIsDeleting(false);
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

 
  
 return <Span>a {text}</Span>

}

export default Typewriter;
