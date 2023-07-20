import React from 'react';
import ActionAreaCard from '../components/Project';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Portfolio.css';

function Portfolio() {
    return (
      <>
        <div className='contentContainer'>
            <h2  className="portfolioTitle">Portfolio</h2>
            <hr style={{margin: '5px 0 20px 0'}}/>
            <div className="projectsContainer">
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={5}>
                    {/* First Row */}
                    <Grid item xs={4}>
                      <ActionAreaCard />
                    </Grid>
                    <Grid item xs={4}>
                      <ActionAreaCard />
                    </Grid>
                    <Grid item xs={4}>
                      <ActionAreaCard />
                    </Grid>
                    {/* Second Row */}
                    <Grid item xs={4}>
                      <ActionAreaCard />
                    </Grid>
                    <Grid item xs={4}>
                      <ActionAreaCard />
                    </Grid>
                    <Grid item xs={4}>
                      <ActionAreaCard />
                    </Grid>
                  </Grid>
                </Box>
            </div>
        </div>
      </>
    );
  }

export default Portfolio;