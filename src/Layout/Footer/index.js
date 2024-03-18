import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { footerContainer, socialIcons } from './styles';
import Header from '../Header';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
function Footer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      <Box sx={footerContainer}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={10} lg={9}>
            <Grid container justifyContent="space-around">
              <Grid item xs={10} sm={10} md={4} lg={4}>
                <Typography variant="h5">Get in touch with us for your service</Typography>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                  <FacebookIcon sx={socialIcons} />
                  <TwitterIcon sx={socialIcons} />
                  <InstagramIcon sx={socialIcons} />
                  <LinkedInIcon sx={socialIcons} />
                </Stack>
              </Grid>
              <Grid item xs={10} sm={10} md={6} lg={6}>
                <Box>
                  <Stack direction="column" spacing={2} sx={{ mt: 2 }}>
                    <Typography variant="textCaption">Help line Number</Typography>
                    <Typography variant="linkWhite">1800 265 24 52</Typography>
                  </Stack>
                  <Stack direction="column" spacing={2} sx={{ mt: 2 }}>
                    <Typography variant="textCaption">Address</Typography>
                    <Typography variant="linkWhite">NH 234 Public Square San Francisco 65368</Typography>
                  </Stack>
                  <Stack direction="column" spacing={2} sx={{ mt: 2 }}>
                    <Typography variant="textCaption">We are open</Typography>
                    <Typography variant="linkWhite">Monday to Friday 9:00 AM to 10:00 AM</Typography>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {matches && <Header flag={true} />}
    </>
  );
}

export default Footer;
