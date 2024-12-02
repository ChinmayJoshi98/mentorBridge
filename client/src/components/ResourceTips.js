import React from 'react';
import { Paper, Typography, Button } from '@mui/material';

const ResourcesTips = ({ resources }) => (
  <Paper
    sx={{
      padding: 3,
      borderRadius: 4,
      backgroundColor: '#FFFFFF',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Typography
      variant="h6"
      fontWeight="bold"
      sx={{ mb: 2, color: '#393E46' }}
    >
      Resources & Tips
    </Typography>
    {resources.map((resource, index) => (
      <Typography key={index}>- {resource}</Typography>
    ))}
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#4880FF',
        color: '#FFFFFF',
        marginTop: 2,
      }}
    >
      Explore Resources
    </Button>
  </Paper>
);

export default ResourcesTips;