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
                            style={{ borderRadius: '10%', width:'15rem'}}
                        />
                    </div>
                    <div className="aboutTextContainer">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            bibendum turpis sed ex condimentum molestie. Mauris condimentum
                            lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat
                            metus aliquam maximus. Proin aliquam justo nec diam vulputate
                            vestibulum. Aenean sollicitudin nulla at nisi ornare, nec
                            suscipit massa eleifend. Morbi tristique justo vel turpis
                            sollicitudin, et tristique velit convallis. In hac habitasse
                            platea dictumst. Phasellus mattis nunc sed orci consequat
                            laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies
                            mollis. In hac habitasse platea dictumst.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            bibendum turpis sed ex condimentum molestie. Mauris condimentum
                            lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat
                            metus aliquam maximus. Proin aliquam justo nec diam vulputate
                            vestibulum. Aenean sollicitudin nulla at nisi ornare, nec
                            suscipit massa eleifend. Morbi tristique justo vel turpis
                            sollicitudin, et tristique velit convallis. In hac habitasse
                            platea dictumst. Phasellus mattis nunc sed orci consequat
                            laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies
                            mollis. In hac habitasse platea dictumst.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;