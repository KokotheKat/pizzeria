import React, { useState } from "react";
import { NavButton } from "./NavButton";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavButtonContainer = () => {
  const [navButtonToggle, setNavButtonToggle] = useState(false);
  const handleNavButtonToggle = () => {
    setNavButtonToggle(!navButtonToggle);
  };
  return (
    <div className="NavButtonContainer">
      <button
        className="NavToggleButton"
        onClick={() => {
          handleNavButtonToggle();
        }}
      >
        <FontAwesomeIcon icon={fas.faBars}/>
      </button>
      {
        <div className={`NavButtonList ${navButtonToggle ? "isActive" : ""}`}>
          <NavButton url={"/"}>Home</NavButton>
          <NavButton url={"/menu"}>Menu</NavButton>
          <NavButton url={"/services"}>Services</NavButton>
          <NavButton url={"/news"}>News</NavButton>
          <NavButton url={"/aboutus"}>About</NavButton>
          <NavButton url={"/contact"}>Contact</NavButton>
        </div>
      }
    </div>
  );
};
