import React from "react";
import "./index.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerWrap">
        <Link to="https://github.com/Kevrev">
            <GitHubIcon />
        </Link>
        <h5>GitHub (all I have)</h5>
      </div>
    </footer>
  );
};

export default Footer;
