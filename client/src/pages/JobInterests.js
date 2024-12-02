// src/pages/JobInterests.js

import React, { useState } from 'react';
import { Box, Typography, Chip, TextField, Button, Paper } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const JobInterests = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialTags = location.state?.tags || [];
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [suggestedJobs, setSuggestedJobs] = useState([
    'Frontend Developer',
    'Machine Learning Engineer',
    'Data Scientist',
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddJob = (job) => {
    if (job && !selectedJobs.includes(job)) {
      setSelectedJobs([...selectedJobs, job]);
    }
    setSearchTerm('');
  };

  const handleDeleteJob = (jobToDelete) => {
    setSelectedJobs((jobs) => jobs.filter((job) => job !== jobToDelete));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // You can implement search logic here
  };

  const handleNext = () => {
    // Proceed to recommended mentors
    navigate('/resume-review/recommended-mentors', { state: { selectedJobs } });
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Paper
        sx={{
          padding: 3,
          borderRadius: 4,
          maxWidth: 800,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
          Select Your Job Interests
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
            Suggested Job Roles
          </Typography>
          {suggestedJobs.map((job, index) => (
            <Chip
              key={index}
              label={job}
              onClick={() => handleAddJob(job)}
              sx={{ m: 0.5, cursor: 'pointer' }}
            />
          ))}
        </Box>
        <TextField
          label="Search Job Roles"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          onClick={() => handleAddJob(searchTerm)}
          disabled={!searchTerm}
        >
          Add Job Role
        </Button>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
            Selected Job Roles
          </Typography>
          {selectedJobs.map((job, index) => (
            <Chip
              key={index}
              label={job}
              onDelete={() => handleDeleteJob(job)}
              sx={{ m: 0.5 }}
            />
          ))}
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          onClick={handleNext}
          disabled={selectedJobs.length === 0}
        >
          Next
        </Button>
      </Paper>
    </Box>
  );
};

export default JobInterests;