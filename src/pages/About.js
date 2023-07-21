import React from "react";
import "./About.css";
import avatarImage from "../assets/images/avatar.png";

function About() {
  return (
    <>
      <div className="contentContainer">
        <h2 className="contentTitle">About Me</h2>
        <hr style={{ margin: "5px 0 20px 0" }} />
        <div className="aboutContainer">
          <div className="aboutImageContainer">
            <img
              src={avatarImage}
              alt="placeholder"
              className="aboutImage"
              style={{ borderRadius: "10%", width: "15rem" }}
            />
          </div>
          <div className="aboutTextContainer">
            <p>
              Hello and welcome to my portfolio! My name is Kevin Small and I am
              a full stack web developer. I am a recent graduate of the
              University of Berkley Extension's Fullstack Coding Bootcamp. I
              have experience with HTML, CSS, JavaScript, Node.js, Express.js,
              MySQL, MongoDB, GraphQL, and React.js. I'm always learning new
              things and enjoy exploring new technologies to solve the problems
              we face in the development world.
            </p>
            <p>
              Outside of development, I really enjoy activites like rock
              climbing and hiking. It's a great way to get out into nature and
              away from the computer screen! I also have a deep passion for art
              but as I've begun my coding journey, I've also found myself really
              enjoying design and thinking about the UI/UX of the applications
              I'm building. It's vital for applications to be easy to use and
              accessible to all users. One thing I'd really like to do in the
              future is design and development my own component library. Shoot
              me an email over at <b>ksmnk@protonmail.com</b> if you'd like to
              get in touch!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
