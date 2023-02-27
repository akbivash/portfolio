import React, { useRef } from "react";
import { useState } from "react";

import { useEffect } from "react";
import { client} from "../../client";
import Slider from "../../components/slider/Slider";
import { projects } from "../../assets/projects";
const MoreProjects = () => {
  const[projects, setProjects] = useState([])
 const [cat, setCat] = useState('finishedProjects')
 const [index, setIndex] = useState(0);
const ref = useRef()
  useEffect(() => {

    const query =`*[_type == '${cat}']`
    client.fetch(query)
    .then((data) => {
      setProjects(data)
    })
    setIndex(0)
if(cat === 'finishedProjects'){
  ref.current.children[1].classList.remove('active')
  ref.current.children[0].classList.add('active')
}else{
  ref.current.children[1].classList.add('active')
  ref.current.children[0].classList.remove('active')
}
      }, [cat])
 

   

  
  return (
  <div className="more_projects">
   <h2 className="heading">Projects</h2>
   <div className="category" ref={ref}>
    <button onClick={() => setCat('finishedProjects')}>Complete</button>
    <button onClick={() => setCat('incompleteProjects')}>On Process</button>
   </div>
   <Slider data={projects} index={index} setIndex={setIndex}/>
  </div>
  );
};

export default MoreProjects;
