import React from "react";
import ActionAreaCard from "../components/Project";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./Portfolio.css";

// Image assets
import TheSite from "../assets/images/project1thesite.png";
import WanderList from "../assets/images/wanderlist.png";
import WeatherDashboard from "../assets/images/weatherDash.jpg";
import Project3 from "../assets/images/project3.jpg"
import Refactor from "../assets/images/screenshot.jpg"
import Quiz from "../assets/images/screenshot2.jpg"


// Portfolio page layout
function Portfolio() {
  return (
    <>
      <div className="contentContainer">
        <h2 className="contentTitle">Portfolio</h2>
        <hr style={{ margin: "5px 0 20px 0" }} />
        <div className="projectsContainer">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={5}>
              <Grid item xs={4}>
                <ActionAreaCard
                  title="Project 3 WIP"
                  description="A MERN stack photo ecommerce site where users can sign up and sell their photos as well as purchase and from other users."
                  imageUrl={Project3}
                  altText="A screenshot of the Project 3 application."
                  repoUrl="https://github.com/JDempe/project3"
                  deployUrl="https://webwarriors-project3-dev-614a3d568e3e.herokuapp.com/"
                />
              </Grid>
              {/* First Row */}
              <Grid item xs={4}>
                <ActionAreaCard
                  title="WanderList"
                  description="A fullstack application where users can sign up and share their travel experiences with other users as well as save their favorite posts."
                  imageUrl={WanderList}
                  altText="A screenshot of the WanderList application."
                  repoUrl="https://github.com/JDempe/project2"
                  deployUrl="https://wanderlist.herokuapp.com/"
                />
              </Grid>
              <Grid item xs={4}>
                <ActionAreaCard
                  title="The Site: You Camp"
                  description="An application that utlizes Google Maps and Google Places API to help users locate campsites near their requested search area."
                  imageUrl={TheSite}
                  altText="A screenshot of the You Camp application."
                  repoUrl="https://github.com/Kevrev/the-site"
                  deployUrl="https://kevrev.github.io/the-site/"
                />
              </Grid>
              <Grid item xs={4}>
                <ActionAreaCard
                  title="Weather Dashboard"
                  description="A dashboard that displays the current weather and a 5 day forecast for a city of your choice, utilizing the OpenWeather API."
                  imageUrl={WeatherDashboard}
                  altText="A screenshot of the Weather Dashboard application."
                  repoUrl="https://github.com/Kevrev/weather-dashboard"
                  deployUrl="https://kevrev.github.io/weather-dashboard/"
                />
              </Grid>
              {/* Second Row */}
              <Grid item xs={4}>
                <ActionAreaCard
                  title="Coding Quiz"
                  description="A coding quiz made with HTML, CSS, and JavaScript that allows users to test their knowledge and save their high scores."
                  imageUrl={Quiz}
                  altText="Placeholder"
                  repoUrl="https://github.com/Kevrev/code-quiz"
                  deployUrl="https://kevrev.github.io/code-quiz/"
                />
              </Grid>
              <Grid item xs={4}>
                <ActionAreaCard
                  title="Horiseon Refactor"
                  imageUrl={Refactor}
                  description="Refactored code for the Horiseon website to make it more accessible and SEO friendly as well as decreasing load times."
                  altText="A screenshot of the Horiseon website."
                  repoUrl="https://github.com/Kevrev/horiseon-refactor"
                  deployUrl="https://kevrev.github.io/horiseon-refactor/"
                />
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
