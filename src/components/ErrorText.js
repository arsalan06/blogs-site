import { Stack, Typography } from '@mui/material';
import React from 'react';

function ErrorText({ error }) {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
      <Typography variant="textOrange">{error}</Typography>
    </Stack>
  );
}

export default ErrorText;
