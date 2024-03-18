import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import BannerImage from '../../../assets/images/banner-bg2.jpg';
import { leftContainer, rightContainer } from './styles';
function MainBanner() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Box sx={{ ...leftContainer, backgroundImage: `url(${BannerImage})`, backgroundSize: '100% 100%' }}>
          <Typography variant="h2">Our Blog</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Box sx={rightContainer}>
          <Stack sx={{ width: '80%' }} spacing={2}>
            <Typography variant="h5">Diagnose Car Problems If You Don’t Know Much About Cars</Typography>
            <Typography variant="body1">
              We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes,
              We provide a full range of front end mechanical.
            </Typography>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}

export default MainBanner;
