import React from 'react';
import { Box, TextField, Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SemesterInput = ({ selectionData, setSelectionData, handleNext }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSelectionData({ ...selectionData, semestersLeft: e.target.value });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 4,
      }}
    >
      <Paper
        sx={{
          padding: 4,
          borderRadius: 4,
          maxWidth: 500,
          width: '100%',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
          How many semesters do you have left?
        </Typography>
        <TextField
          type="number"
          variant="outlined"
          label="Semesters Left"
          value={selectionData.semestersLeft}
          onChange={handleChange}
          InputProps={{ inputProps: { min: 1 } }}
          fullWidth
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button
            variant="outlined"
            onClick={() => navigate('/course-selection')}
          >
            Back to Current Courses
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              if (selectionData.semestersLeft !== '') {
                handleNext();
              }
            }}
            disabled={!selectionData.semestersLeft}
          >
            Next
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default SemesterInput;