import { Box, Skeleton } from '@mui/material';
import React from 'react';

function SkeletonLoading() {
  return (
    <Box sx={{ width: '100%' }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
}

export default SkeletonLoading;
