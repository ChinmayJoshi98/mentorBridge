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
  };

  const handleNext = () => {
    navigate('/resume-review/recommended-mentors', { state: { selectedJobs } });
  };

  // Function to color-code tags
  const getTagColor = (job) => {
    if (['Machine Learning Engineer', 'Data Scientist'].includes(job)) {
      return { backgroundColor: '#E8F5E9', color: '#43A047' }; // Subtle green
    }
    if (job === 'Frontend Developer') {
      return { backgroundColor: '#E3F2FD', color: '#1E88E5' }; // Subtle blue
    }
    return { backgroundColor: '#E0E0E0', color: '#000000' }; // Default
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        backgroundColor: '#F9FAFB',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        sx={{
          padding: 4,
          borderRadius: 4,
          maxWidth: 800,
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 3, color: '#37474F' }}
        >
          Select Your Job Interests
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ mb: 1, color: '#37474F' }}
          >
            Suggested Job Roles
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
            {suggestedJobs.map((job, index) => (
              <Chip
                key={index}
                label={job}
                onClick={() => handleAddJob(job)}
                sx={{
                  ...getTagColor(job),
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              />
            ))}
          </Box>
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
          sx={{
            backgroundColor: '#2196F3',
            color: '#FFFFFF',
            '&:hover': { backgroundColor: '#1976D2' },
          }}
        >
          Add Job Role
        </Button>
        <Box sx={{ mt: 3 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ mb: 1, color: '#37474F' }}
          >
            Selected Job Roles
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
            {selectedJobs.map((job, index) => (
              <Chip
                key={index}
                label={job}
                onDelete={() => handleDeleteJob(job)}
                sx={{
                  ...getTagColor(job),
                  fontWeight: 'bold',
                }}
              />
            ))}
          </Box>
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