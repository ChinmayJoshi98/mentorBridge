import React, { useState } from 'react';
import { Box, Typography, Button, Autocomplete, TextField, Chip, Paper } from '@mui/material';

const interestsList = [
  'Data Science',
  'Machine Learning',
  'Web Development',
  'Mobile Development',
  'Cybersecurity',
  'Artificial Intelligence',
  'Cloud Computing',
  'Blockchain',
  'Internet of Things',
  'Game Development',
  'Virtual Reality',
  'Augmented Reality',
  'Big Data',
  'DevOps',
  'Robotics',
  'Natural Language Processing',
  'Computer Vision',
  'Software Engineering',
  'Embedded Systems',
  'Bioinformatics',
  'Cryptography',
];
const InterestsSelection = ({ selectionData, setSelectionData, handleNext, handleBack }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event, values) => {
    setSelectionData({ ...selectionData, interests: values });
  };

  return (
    <Paper
      sx={{
        padding: 4,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
        Select Your Academic Interests
      </Typography>
      <Autocomplete
        multiple
        options={interestsList}
        value={selectionData.interests}
        onChange={handleChange}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip label={option} {...getTagProps({ index })} key={index} />
          ))
        }
        renderInput={(params) => <TextField {...params} label="Interests" />}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button variant="outlined" onClick={handleBack}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          disabled={selectionData.interests.length === 0}
        >
          Next
        </Button>
      </Box>
    </Paper>
  );
};

export default InterestsSelection;