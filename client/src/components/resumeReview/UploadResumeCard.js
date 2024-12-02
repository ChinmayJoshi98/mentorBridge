import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const UploadResumeCard = ({ onUpload }) => (
  <Paper
    sx={{
      padding: 3,
      borderRadius: 4,
      backgroundColor: '#F5F5F5',
      textAlign: 'center',
    }}
  >
    <CloudUploadIcon sx={{ fontSize: 60, color: '#90A4AE', mb: 2 }} />
    <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
      Upload Your Resume
    </Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      Upload your latest resume to get a new score and feedback.
    </Typography>
    <Button variant="contained" color="primary" onClick={onUpload}>
      Upload Resume
    </Button>
  </Paper>
);

export default UploadResumeCard;