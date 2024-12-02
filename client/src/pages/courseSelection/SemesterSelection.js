import React from 'react';
import { Box, Typography, TextField } from '@mui/material';

const SemesterSelection = ({ selectionData, setSelectionData }) => {
  const handleChange = (e) => {
    setSelectionData({ ...selectionData, semester: e.target.value });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Select Your Semester
      </Typography>
      <TextField
        label="Semester (e.g., Fall 2024)"
        value={selectionData.semester}
        onChange={handleChange}
        fullWidth
      />
    </Box>
  );
};

export default SemesterSelection;