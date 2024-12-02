import React from 'react';
import { Box, Typography, Paper, Button, Grid, Link } from '@mui/material';
import UploadResumeCard from '../components/resumeReview/UploadResumeCard';
import { useNavigate } from 'react-router-dom';

const ResumeReview = ({ currentResume, resumeScore }) => {
  const navigate = useNavigate();

  const handleUploadResume = () => {
    navigate('/resume-review/upload');
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        Resume Review
      </Typography>
      <Grid container spacing={3}>
        {/* Current Resume Score */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              padding: 3,
              borderRadius: 4,
              backgroundColor: '#FFFFFF',
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Current Resume Score
            </Typography>
            <Typography variant="h2" color="primary" fontWeight="bold">
              {resumeScore}%
            </Typography>
          </Paper>
        </Grid>

        {/* Current Resume */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              padding: 3,
              borderRadius: 4,
              backgroundColor: '#FFFFFF',
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Your Resume
            </Typography>
            <Link href={currentResume.url} target="_blank" rel="noopener">
              <Button variant="contained" color="primary">
                {currentResume.name}
              </Button>
            </Link>
          </Paper>
        </Grid>

        {/* Upload Resume Card */}
        <Grid item xs={12}>
          <UploadResumeCard onUpload={handleUploadResume} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResumeReview;