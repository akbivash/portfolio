import React from 'react'
import './services.css'
// import { services } from '../../assets/services'
import {motion} from 'framer-motion'
import { client, urlFor } from '../../client'
import { useState , useEffect} from 'react'

const Services = () => {
const[services, setServices] = useState([])

  useEffect(() => {
    const query = '*[_type == "services"]'
    client.fetch(query)
    .then((data) => {
      setServices(data)

    })
      }, [])


     
  return (
    <div className="service_container">
    <h2 className='heading'>Why Choose Me</h2>
   <div className="services">
   {services.map((service, ind) => {
        return  <motion.div 
             initial={{opacity:0}}
             whileInView={{opacity:1}}
              transition={{duration:.5, delay: ind * .1}}

              key={service.id}
           
              >
             <div className="service" key={service.id}>
            <h4 >{service.name}</h4>
       <div className="img_container">
       <img src={urlFor(service.icon.asset._ref)} alt="image" />
       </div>
        <p>{service.desc}</p>

        </div>

              </motion.div>
       
    })}
   </div>

    </div>
  )
}

export default Services