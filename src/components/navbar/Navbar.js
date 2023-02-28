import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaAngleDoubleRight } from "react-icons/fa";
// import pdf from "../../assets/Frontend_dev_resume.pdf";
import SidebarContainer from "../sidebar/Sidebar";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const navRef = useRef(null)

  useEffect(() =>{
window.addEventListener('scroll', handleScroll)

return () => window.removeEventListener('scroll', handleScroll)
  },[navRef])

 function handleMenu(){
  setIsMenuOpen(prev => !prev)
 }

 function closeMenu(){
  setIsMenuOpen(false)
 }
  
 function handleScroll(e){
 if(navRef.current !== null){
  if(e.currentTarget.scrollY > 0){
    navRef.current.classList.add('fixed')
    }else{
    navRef.current.classList.remove('fixed')
    
    }
 }
 }
 
  return (
    <div className="nav " >
      {/* nav header  */}
      <div className="nav_header" ref={navRef}>
        <div className="logo">
          <img src={require('../../assets/images/logo.png')} alt="" />
        </div>
        {/* right nav buttons  */}
        <div className="nav_btns">
          <div className="resume_btn ">
            <a href='https://flowcv.com/resume/skdgps051g' target="_blank">
              {" "}
           
              Resume
            </a>
          </div>
          <div className="menu_icon" onClick={handleMenu} >
        {!isMenuOpen ?     <GiHamburgerMenu/> : <FaTimes/>}
          </div>
          <div
        className={`${
          isMenuOpen ? "show_nav_center nav_center" : "nav_center"
        }`}
      >
        <SidebarContainer isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
      </div>
        </div>
{/* end of buttons  */}
      </div>
   
    </div>
  );
};

export default Navbar;
