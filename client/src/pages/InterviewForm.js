// src/pages/InterviewForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
} from '@mui/material';

const InterviewForm = () => {
  const navigate = useNavigate();
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [otherDetails, setOtherDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/interview-preparation/mentor-recommendations', {
      state: { company, role, otherDetails },
    });
  };

  return (
    <Container maxWidth="sm" style={{ paddingTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Tell us about your upcoming interview
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box marginBottom={2}>
          <TextField
            label="Company"
            variant="outlined"
            fullWidth
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </Box>
        <Box marginBottom={2}>
          <TextField
            label="Role"
            variant="outlined"
            fullWidth
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </Box>
        <Box marginBottom={2}>
          <TextField
            label="Other Details"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={otherDetails}
            onChange={(e) => setOtherDetails(e.target.value)}
          />
        </Box>
        <Button variant="contained" color="primary" type="submit">
          Find Mentors
        </Button>
      </form>
    </Container>
  );
};

export default InterviewForm;