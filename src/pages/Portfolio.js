import React from 'react';
// import MediaCard from '../components/Project';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Portfolio() {
    return (
      <>
        <h2 data-testid='h1tag' className="top-title">Portfolio</h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {/* First Row */}
            <Grid item xs={4}>
              <div>TESTING 123</div>
            </Grid>
            <Grid item xs={4}>
              <div>TESTING 123</div>
            </Grid>
            <Grid item xs={4}>
              <div>TESTING 123</div>
            </Grid>
            {/* Second Row */}
            <Grid item xs={4}>
              <div>TESTING 123</div>
            </Grid>
            <Grid item xs={4}>
              <div>TESTING 123</div>
            </Grid>
            <Grid item xs={4}>
              <div>TESTING 123</div>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }

export default Portfolio;