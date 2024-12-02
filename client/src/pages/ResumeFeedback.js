// src/pages/ResumeFeedback.js

import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import { useLocation } from 'react-router-dom';

const ResumeFeedback = () => {
  const location = useLocation();
  const notification = location.state?.notification;
  const mentor = notification?.mentor || {
    name: 'Mentor Name',
    feedback: [
      'Great structure in your resume.',
      'Consider adding more projects related to your job interest.',
      'Highlight your technical skills more prominently.',
    ],
  };

  const resumeScore = Math.floor(Math.random() * 21) + 80; // Random score between 80 and 100

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Paper
        sx={{
          padding: 4,
          borderRadius: 4,
          maxWidth: 800,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
          Resume Feedback
        </Typography>
        <Typography variant="h2" color="primary" fontWeight="bold" sx={{ mb: 2 }}>
          {resumeScore}%
        </Typography>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          Feedback from {mentor.name}
        </Typography>
        <List>
          {mentor.feedback.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default ResumeFeedback;