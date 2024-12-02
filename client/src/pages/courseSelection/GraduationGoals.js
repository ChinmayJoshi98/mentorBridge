import React from 'react';
import { Box, Typography, TextField } from '@mui/material';

const GraduationGoals = ({ selectionData, setSelectionData }) => {
  const handleChange = (e) => {
    setSelectionData({ ...selectionData, graduationGoals: e.target.value });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Set Your Graduation Goals
      </Typography>
      <TextField
        label="Number of semesters left"
        type="number"
        value={selectionData.graduationGoals}
        onChange={handleChange}
        fullWidth
      />
    </Box>
  );
};

export default GraduationGoals;