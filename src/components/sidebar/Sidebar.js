import React from "react";
import "./sidebar.css";
import { FaTimes } from "react-icons/fa";
import { links } from "../../assets/links";
import { useState } from "react";
import { useEffect } from "react";
import{BiDownArrowAlt} from 'react-icons/bi'
const SidebarContainer = ({ isMenuOpen, closeMenu }) => {
  function handleLinksClick(e) {
    e.preventDefault();
  
    let id = e.target.getAttribute("href").slice(1);
    var elem = document.getElementById(id);
    const location = elem.offsetTop - 70
   setTimeout(() => {
    window.scrollTo({
      left: 0,
      top: location,
      behavior: "smooth",
    });
   },500)
    closeMenu();
  }

  return (
    <div className={`${isMenuOpen ? "show_sidebar sidebar" : "sidebar"}`}>
      <div className="sidebar_header">
        <div className="logo">
          <img src={require("../../assets/images/logo.png")} alt="" />
        </div>
        <div className="close_icon" onClick={closeMenu}>
          <FaTimes />
        </div>
      </div>
      <div className="sidebar_container">
        <SidebarLinks handleLinksClick={handleLinksClick}  />
      </div>
    </div>
  );
};

const SidebarLinks = ({handleLinksClick}) => {
  return (
    <>
      {links.map((link) => {
        return <SidebarItem link={link} key={link.id} handleLinksClick={handleLinksClick}/>;
      })}
    </>
  );
};

const SidebarItem = ({ link, handleLinksClick}) => {
  const [isSublinkOpen, setIsSublinkOpen] = useState(false);

  useEffect(() => {
    setIsSublinkOpen(false);
  }, []);

  function handleSublink(e) {
    setIsSublinkOpen((prev) => !prev);
  }

  return (
    <>
      {link.sublinks ? (
        <div className="sidebar_link dropdown ">
          <a onClick={handleSublink} style={{ height: "2.5rem" }}>
            {link.name}  <BiDownArrowAlt className="icon"/>
          </a>
          <div className="sublink">
            {link.sublinks.map((slink) => {
              return (
                <a
                href={slink.link}
                onClick={handleLinksClick}
                  key={slink.name}
                  style={
                    isSublinkOpen
                      ? {
                          height: `2.5rem`,
                          transition: ".3s",
                          transform:'translateX(0px)',
                          borderBottom: "1px solid var(--primary-2)",
                        }
                         
                      : { height: `0`, transform:'translateX(100px)', transition: ".3s", borderBottom: "none" }
                  }
                >
                 {slink.name}
                </a>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="sidebar_link">
          <a href={link.link} onClick={handleLinksClick} style={{ height: "2.5rem" }}>
            {link.name}{" "}
          </a>
        </div>
      )}
    </>
  );
};

export default SidebarContainer;
