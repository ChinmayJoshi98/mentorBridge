import React from 'react';
import { Box, TextField, Button, Paper, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
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
        alignItems: 'center',
        minHeight: '80vh',
        backgroundColor: '#F5F7FA',
      }}
    >
      <Paper
        sx={{
          padding: 5,
          borderRadius: 6,
          maxWidth: 500,
          width: '100%',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
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
          <SchoolIcon sx={{ fontSize: 48, color: '#1565C0' }} />
        </Box>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 3, color: '#2E3B55' }}>
          How many semesters do you have left?
        </Typography>
        <TextField
          type="number"
          variant="outlined"
          label="Enter Semesters"
          value={selectionData.semestersLeft}
          onChange={handleChange}
          InputProps={{ inputProps: { min: 1 } }}
          fullWidth
          sx={{
            mb: 4,
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
            },
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
          <Button
            variant="outlined"
            onClick={() => navigate('/course-selection')}
            sx={{
              padding: '10px 20px',
              color: '#1565C0',
              borderColor: '#1565C0',
              '&:hover': {
                backgroundColor: '#E3F2FD',
                borderColor: '#1565C0',
              },
            }}
          >
            Back
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
            sx={{
              padding: '10px 20px',
              backgroundColor: '#1565C0',
              '&:hover': {
                backgroundColor: '#0D47A1',
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

export default SemesterInput;