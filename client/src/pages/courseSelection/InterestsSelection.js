import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Autocomplete,
  TextField,
  Chip,
  Paper,
} from '@mui/material';
import InterestsIcon from '@mui/icons-material/Interests';

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

const InterestsSelection = ({
  selectionData,
  setSelectionData,
  handleNext,
  handleBack,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event, values) => {
    setSelectionData({ ...selectionData, interests: values });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        backgroundColor: '#F5F7FA',
      }}
    >
      <Paper
        sx={{
          padding: 5,
          borderRadius: 6,
          backgroundColor: '#FFFFFF',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
          maxWidth: 600,
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <InterestsIcon sx={{ fontSize: 48, color: '#388E3C' }} />
        </Box>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 3, textAlign: 'center', color: '#2E3B55' }}
        >
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
              <Chip
                label={option}
                {...getTagProps({ index })}
                key={index}
                sx={{
                  backgroundColor: '#388E3C20',
                  color: '#388E3C',
                  fontWeight: 'bold',
                }}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Interests"
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                },
              }}
            />
          )}
          sx={{
            mb: 4,
            '& .MuiAutocomplete-root': {
              borderRadius: 3,
            },
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
          <Button
            variant="outlined"
            onClick={handleBack}
            sx={{
              padding: '10px 20px',
              color: '#388E3C',
              borderColor: '#388E3C',
              '&:hover': {
                backgroundColor: '#E8F5E9',
                borderColor: '#388E3C',
              },
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={selectionData.interests.length === 0}
            sx={{
              padding: '10px 20px',
              backgroundColor: '#388E3C',
              '&:hover': {
                backgroundColor: '#2E7D32',
              },
            }}
          >
            Next
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default InterestsSelection;