import React, { useState, useEffect } from "react";
import "./Nav.css";
import netflixlogo from "./netflixlogo.png";
import avatar from "./avatar.png";
import { useHistory } from "react-router";

function Nav() {
  const [show, handleShow] = useState(false);
  const history =useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img 
        onClick={() => history.push("/")}
        className="nav__logo" src={netflixlogo} alt="" />
 
        <img 
        onClick={() => history.push("/profile")}
        className="nav__avatar" src={avatar} alt="" />
      </div>
    </div>
  );
}

export default Nav;
