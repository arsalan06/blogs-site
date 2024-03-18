import React from 'react';
import Header from '../Header';
import { Box, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

function MainLayout() {
  return (
    <Box>
      <CssBaseline />
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}

export default MainLayout;
