import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

// Nav bar layout, based off of the one I initially built for project 3
function Nav() {
  return (
    <header className="flex-row">
      <div className="titleLinks">
        <h1 className="websiteTitle">Kevin Small</h1>
        <div className="verticalDivider"></div>
        <Link to="/portfolio">
          <div className="linkText">Portfolio</div>
        </Link>
        <Link to="/resume">
          <div className="linkText">Resume</div>
        </Link>
        <Link to="/about">
          <div className="linkText">About Me</div>
        </Link>
        <Link to="/contact">
          <div className="linkText">Contact</div>
        </Link>
      </div>
    </header>
  );
}

export default Nav;
