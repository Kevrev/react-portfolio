import React from "react";
import ActionAreaCard from "../components/Project";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./Portfolio.css";
import TheSite from "../assets/images/project1thesite.png";
import WanderList from "../assets/images/wanderlist.png";
import WeatherDashboard from "../assets/images/weatherDash.jpg";

function Portfolio() {
  return (
    <>
      <div className="contentContainer">
        <h2 className="contentTitle">Portfolio</h2>
        <hr style={{ margin: "5px 0 20px 0" }} />
        <div className="projectsContainer">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={5}>
              {/* First Row */}
              <Grid item xs={4}>
                <ActionAreaCard
                  title="WanderList"
                  description="A fullstack application where users can sign up and share their travel experiences with other users as well as save their favorite posts."
                  imageUrl={WanderList}
                  altText="Lizard"
                  repoUrl="https://github.com/JDempe/project2"
                  deployUrl="https://wanderlist.herokuapp.com/"
                />
              </Grid>
              <Grid item xs={4}>
                <ActionAreaCard
                  title="The Site: You Camp"
                  description="An application that utlizes Google Maps and Google Places API to help users locate campsites near their requested search area."
                  imageUrl={TheSite}
                  altText="Lizard"
                  repoUrl="https://github.com/Kevrev/the-site"
                  deployUrl="https://kevrev.github.io/the-site/"
                />
              </Grid>
              <Grid item xs={4}>
                <ActionAreaCard
                  title="Weather Dashboard"
                  description="A dashboard that displays the current weather and a 5 day forecast for a city of your choice, utilizing the OpenWeather API."
                  imageUrl={WeatherDashboard}
                  altText="Lizard"
                  repoUrl="https://github.com/Kevrev/weather-dashboard"
                  deployUrl="https://kevrev.github.io/weather-dashboard/"
                />
              </Grid>
              {/* Second Row */}
              <Grid item xs={4}>
                <ActionAreaCard
                  title="Placeholder"
                  description="Placeholder"
                  altText="Placeholder"
                  repoUrl="https://github.com/Kevrev/"
                  deployUrl="https://kevrev.github.io//"
                />
              </Grid>
              <Grid item xs={4}>
                <ActionAreaCard
                  title="Placeholder"
                  description="Placeholder"
                  altText="Placeholder"
                  repoUrl="https://github.com/Kevrev/"
                  deployUrl="https://kevrev.github.io//"
                />
              </Grid>
              <Grid item xs={4}>
                <ActionAreaCard
                  title="Placeholder"
                  description="Placeholder"
                  altText="Placeholder"
                  repoUrl="https://github.com/Kevrev/"
                  deployUrl="https://kevrev.github.io//"
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
