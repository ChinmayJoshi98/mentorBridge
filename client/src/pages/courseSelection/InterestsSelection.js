import React from 'react';
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

const interestsList = [
  'Data Science',
  'Machine Learning',
  'Web Development',
  'Mobile Development',
  'Cybersecurity',
  'Artificial Intelligence',
];

const InterestsSelection = ({ selectionData, setSelectionData }) => {
  const handleChange = (e) => {
    const { interests } = selectionData;
    const value = e.target.name;
    const newInterests = e.target.checked
      ? [...interests, value]
      : interests.filter((interest) => interest !== value);

    setSelectionData({ ...selectionData, interests: newInterests });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Select Your Interests
      </Typography>
      <FormGroup>
        {interestsList.map((interest) => (
          <FormControlLabel
            key={interest}
            control={
              <Checkbox
                checked={selectionData.interests.includes(interest)}
                onChange={handleChange}
                name={interest}
              />
            }
            label={interest}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default InterestsSelection;