import React from 'react';
import { Box, Typography, Paper, Button, Grid, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';

const ResumeReview = () => {
  const navigate = useNavigate();
  const { resumeScore, currentResume } = useContext(ResumeContext);

  const handleUploadResume = () => {
    navigate('/resume-review/upload');
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        Resume Review
      </Typography>
      <Grid container spacing={3} alignItems="stretch">
        {/* Current Resume Score */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              padding: 3,
              borderRadius: 4,
              backgroundColor: '#FFFFFF',
              textAlign: 'center',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AssessmentIcon sx={{ fontSize: 60, color: '#00ACC1', mb: 2 }} />
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Latest Resume Score
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
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CloudUploadIcon sx={{ fontSize: 60, color: '#8E24AA', mb: 2 }} />
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Your Resume
            </Typography>
            {currentResume ? (
              <Link href={currentResume.url} target="_blank" rel="noopener">
                <Button variant="contained" color="primary">
                  {currentResume.name}
                </Button>
              </Link>
            ) : (
              <Typography variant="body1" sx={{ mb: 2 }}>
                No resume uploaded.
              </Typography>
            )}
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={handleUploadResume}
            >
              Upload New Resume
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResumeReview;