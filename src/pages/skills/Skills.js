import React, { useEffect, useState } from 'react'
import './skills.css'
import {urlFor, client} from '../../client'
import {motion} from 'framer-motion'
import { useId } from 'react'
const Skills = () => {
  const [skills, setSkills] = useState([])
  useEffect(() => {
const query = '*[_type == "skills"]'
client.fetch(query)
.then((data) => {
  setSkills(data)
 
})
  }, [])

  
  return (
  <div className="skills_container">
    <h2 className='heading'>My Top Skills</h2>
    <div className="skills">
      {skills.map((item, i) => {
        return <motion.div className="skill" key={item.id}
        whileInView={{opacity:[0, 1]}}
              transition={{duration:.5, delay: i * .1}}

        >
        
        <img src={urlFor(item.icon.asset._ref)} alt="image" />
          <div className="info">
            <h2>{item.name}</h2>
            <ul>
              {item.stacks.map((i, ind) => {
            
                return <span key={ind}>{i}</span>
              })}
            </ul>
          </div>
        </motion.div>
      })}
    </div>
  </div>
  )
}

export default Skills